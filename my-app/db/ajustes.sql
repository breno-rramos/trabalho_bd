-- Rode este arquivo INTEIRO no SQL Editor do Supabase, depois do script que você já tinha.
-- Ele pode ser rodado mais de uma vez sem duplicar nada.

-- 1) Correção: no seu script, a linha do RLS usava "agendamento", mas a tabela se chama "atendimento"
alter table atendimento enable row level security;

-- 2) Tabela de serviços (corte, barba...) e ligação com o atendimento
create table if not exists servico (
  id    bigint generated always as identity primary key,
  nome  text          not null,
  preco numeric(10,2) not null
);

insert into servico (nome, preco)
select * from (values
  ('Corte masculino', 45), ('Barba', 30), ('Corte + Barba', 70), ('Sobrancelha', 15)
) v(nome, preco)
where not exists (select 1 from servico);

alter table atendimento add column if not exists servico_id bigint references servico(id);

-- 3) Terceiro barbeiro (troque o nome depois, se quiser)
insert into barbeiro (nome, cadeira)
select 'Rafael', 3
where not exists (select 1 from barbeiro where cadeira = 3);

-- 4) Regra anti-conflito: um barbeiro não pode ter dois atendimentos no mesmo horário
--    (atendimentos cancelados não contam, então o horário volta a ficar livre)
create unique index if not exists atendimento_horario_unico
  on atendimento (barbeiro_id, data_hora)
  where status <> 'cancelado';

-- 5) Permissões (RLS)
alter table servico enable row level security;
drop policy if exists "leitura demo" on servico;
create policy "leitura demo" on servico for select using (true);

-- O site NÃO precisa mais ler a tabela cliente nem inserir direto em atendimento.
-- Remover estas duas políticas evita que qualquer pessoa leia telefones dos clientes.
drop policy if exists "leitura demo" on cliente;
drop policy if exists "insercao demo" on atendimento;

-- 6) Função que faz o agendamento completo (cria o cliente, se for novo, e o atendimento)
--    "security definer" = roda com permissão do dono do banco, por isso o cliente fica protegido.
create or replace function agendar(
  p_nome        text,
  p_telefone    text,
  p_barbeiro_id bigint,
  p_servico_id  bigint,
  p_data_hora   timestamptz
) returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_cliente_id bigint;
begin
  -- reaproveita o cliente se o telefone já existe
  select id into v_cliente_id from cliente where telefone = p_telefone limit 1;

  if v_cliente_id is null then
    insert into cliente (nome, telefone) values (p_nome, p_telefone)
    returning id into v_cliente_id;
  end if;

  -- se o horário já estiver ocupado, o índice único acima gera o erro 23505
  insert into atendimento (cliente_id, barbeiro_id, servico_id, data_hora)
  values (v_cliente_id, p_barbeiro_id, p_servico_id, p_data_hora);
end;
$$;
