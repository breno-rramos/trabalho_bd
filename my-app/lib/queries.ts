// TODAS as conversas com o banco ficam neste arquivo.
// Se algo do banco der errado, o problema está aqui ou em lib/supabase.ts.
import { supabase } from "./supabase";
import type { Barbeiro, Servico } from "./types";

type NovoAgendamento = {
  nome: string;
  telefone: string;
  servicoId: number;
  barbeiroId: number;
  data: string; // AAAA-MM-DD
  hora: string; // HH:MM
};

// SQL equivalente: SELECT * FROM servico ORDER BY id;
export async function getServicos(): Promise<Servico[]> {
  const { data, error } = await supabase.from("servico").select("*").order("id");
  if (error) throw new Error(error.message);
  return (data ?? []) as Servico[];
}

// SQL equivalente: SELECT * FROM barbeiro ORDER BY id;
export async function getBarbeiros(): Promise<Barbeiro[]> {
  const { data, error } = await supabase.from("barbeiro").select("*").order("id");
  if (error) throw new Error(error.message);
  return (data ?? []) as Barbeiro[];
}

// SQL equivalente:
//   SELECT data_hora FROM atendimento
//   WHERE barbeiro_id = ? AND status <> 'cancelado' AND data_hora BETWEEN (início do dia) AND (fim do dia);
// Devolve só os horários JÁ OCUPADOS, ex: ["10:00", "13:00"]
export async function getHorariosOcupados(barbeiroId: number, data: string): Promise<string[]> {
  // -03:00 = horário de Brasília (o Brasil não usa mais horário de verão)
  const inicio = `${data}T00:00:00-03:00`;
  const fim = `${data}T23:59:59-03:00`;

  const { data: linhas, error } = await supabase
    .from("atendimento")
    .select("data_hora")
    .eq("barbeiro_id", barbeiroId)
    .neq("status", "cancelado")
    .gte("data_hora", inicio)
    .lte("data_hora", fim);
  if (error) throw new Error(error.message);

  // O banco guarda data e hora juntas; aqui pegamos só a hora, no fuso de São Paulo ("14:00")
  return (linhas ?? []).map((l: { data_hora: string }) =>
    new Date(l.data_hora).toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "America/Sao_Paulo",
    })
  );
}

// Chama a função "agendar" que criamos no banco (db/ajustes.sql). Ela faz os dois INSERTs de uma vez:
//   INSERT em cliente (se for novo) + INSERT em atendimento.
// Devolve { ok: true } se salvou, ou { ok: false, conflito: true } se o horário já estava ocupado.
export async function criarAgendamento(
  { nome, telefone, servicoId, barbeiroId, data, hora }: NovoAgendamento
): Promise<{ ok: boolean; conflito?: boolean }> {
  const { error } = await supabase.rpc("agendar", {
    p_nome: nome,
    p_telefone: telefone,
    p_barbeiro_id: barbeiroId,
    p_servico_id: servicoId,
    p_data_hora: `${data}T${hora}:00-03:00`,
  });

  if (error) {
    // 23505 = violação do índice único: alguém reservou esse horário antes
    if (error.code === "23505") return { ok: false, conflito: true };
    throw new Error(error.message);
  }
  return { ok: true };
}
