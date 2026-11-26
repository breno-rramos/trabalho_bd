"use client";

import { useEffect, useState } from "react";
import { HORARIOS } from "@/lib/horarios";
import { reais } from "@/lib/format";
import type { Barbeiro, Servico } from "@/lib/types";

const SEMANA = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const coresAvatar = ["bg-latao text-tinta", "bg-madeira text-painel", "bg-mudo text-painel"];

type Dia = { iso: string; semana: string; dia: number; mes: number };

const dois = (n: number) => String(n).padStart(2, "0");

// Data no formato AAAA-MM-DD usando a data LOCAL (toISOString usa UTC e pode errar o dia à noite)
const paraISO = (d: Date): string => `${d.getFullYear()}-${dois(d.getMonth() + 1)}-${dois(d.getDate())}`;

// Próximos dias de atendimento (pula domingo)
function proximosDias(qtd = 6): Dia[] {
  const lista: Dia[] = [];
  const d = new Date();
  while (lista.length < qtd) {
    if (d.getDay() !== 0) {
      lista.push({ iso: paraISO(d), semana: SEMANA[d.getDay()], dia: d.getDate(), mes: d.getMonth() + 1 });
    }
    d.setDate(d.getDate() + 1);
  }
  return lista;
}

export default function FormAgendar({ servicos, barbeiros }: { servicos: Servico[]; barbeiros: Barbeiro[] }) {
  const [dias, setDias] = useState<Dia[]>([]);
  const [barbeiroId, setBarbeiroId] = useState<number | undefined>(barbeiros[0]?.id);
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [ocupados, setOcupados] = useState<string[]>([]); // horários já reservados (vêm do banco)
  const [servicoId, setServicoId] = useState(String(servicos[0]?.id ?? ""));
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [msg, setMsg] = useState<{ tipo: "ok" | "erro"; texto: string } | null>(null);
  const [enviando, setEnviando] = useState(false);

  // Calcula os dias só depois que a página abre (evita diferença entre servidor e navegador)
  useEffect(() => {
    const lista = proximosDias();
    setDias(lista);
    setData(lista[0].iso);
  }, []);

  // BANCO: pergunta à API quais horários já estão ocupados
  async function carregarOcupados() {
    if (!barbeiroId || !data) return;
    const res = await fetch(`/api/horarios?barbeiro=${barbeiroId}&data=${data}`);
    const json = await res.json();
    setOcupados(json.ocupados ?? []);
  }

  // Sempre que trocar de barbeiro ou de dia, limpa a escolha e busca de novo
  useEffect(() => {
    setHora("");
    setOcupados([]);
    carregarOcupados();
  }, [barbeiroId, data]);

  // Horário indisponível = já reservado OU já passou (se o dia for hoje)
  const agora = new Date();
  const indisponivel = (h: string) =>
    ocupados.includes(h) || (data === paraISO(agora) && Number(h.slice(0, 2)) <= agora.getHours());

  const barbeiro = barbeiros.find((b) => b.id === barbeiroId);
  const dia = dias.find((d) => d.iso === data);
  const resumo = hora && dia ? `${barbeiro?.nome}, ${dia.semana} ${dois(dia.dia)}/${dois(dia.mes)}, às ${hora}` : "Escolha um horário ao lado.";

  // BANCO: envia o agendamento para a API salvar
  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnviando(true);
    setMsg(null);
    try {
      const res = await fetch("/api/agendamentos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, telefone, servicoId, barbeiroId, data, hora }),
      });
      const json = await res.json();

      if (res.ok) {
        setMsg({ tipo: "ok", texto: `Tudo certo! Horário reservado: ${resumo}.` });
        setNome("");
        setTelefone("");
        setHora("");
      } else {
        setMsg({ tipo: "erro", texto: json.erro });
      }
      await carregarOcupados(); // atualiza a lista de horários na tela
    } catch {
      setMsg({ tipo: "erro", texto: "Sem conexão. Tente de novo em instantes." });
    } finally {
      setEnviando(false);
    }
  }

  return (
    <>
      {/* Escolha do barbeiro */}
      <div className="flex flex-wrap gap-4" role="group" aria-label="Barbeiro">
        {barbeiros.map((b, i) => {
          const ativo = b.id === barbeiroId;
          return (
            <button
              type="button"
              key={b.id}
              onClick={() => setBarbeiroId(b.id)}
              aria-pressed={ativo}
              className={`flex min-w-[220px] items-center gap-3.5 rounded-2xl border-2 px-5 py-4 text-left ${
                ativo ? "border-azul bg-azul text-painel" : "border-contorno bg-painel"
              }`}
            >
              <span className={`flex h-12 w-12 items-center justify-center rounded-full font-serif text-xl ${coresAvatar[i % 3]}`}>
                {b.nome[0]}
              </span>
              <span>
                <b className="block text-lg">{b.nome}</b>
                <span className="text-sm opacity-80">Cadeira {b.cadeira}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid items-start gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-7">
          {/* Escolha do dia */}
          <div>
            <h2 className="mb-3.5 font-serif text-2xl">Escolha o dia</h2>
            <div className="flex flex-wrap gap-2.5">
              {dias.map((d) => (
                <button
                  type="button"
                  key={d.iso}
                  onClick={() => setData(d.iso)}
                  aria-pressed={d.iso === data}
                  className={`rounded-xl border px-4 py-2.5 leading-snug ${
                    d.iso === data ? "border-azul bg-azul text-painel" : "border-contorno bg-painel"
                  }`}
                >
                  {d.semana}
                  <br />
                  <b>{d.dia}</b>
                </button>
              ))}
            </div>
          </div>

          {/* Horários: os ocupados aparecem riscados e não dá para clicar */}
          <div>
            <h2 className="mb-3.5 font-serif text-2xl">Horários de {barbeiro?.nome}</h2>
            <div className="flex flex-wrap gap-2.5">
              {HORARIOS.map((h) => {
                const off = indisponivel(h);
                return (
                  <button
                    type="button"
                    key={h}
                    disabled={off}
                    onClick={() => setHora(h)}
                    aria-pressed={h === hora}
                    className={`min-w-[76px] rounded-[10px] border px-4 py-3 ${
                      off
                        ? "cursor-not-allowed border-dashed border-contorno text-apagado line-through"
                        : h === hora
                        ? "border-azul bg-azul font-bold text-painel"
                        : "border-contorno bg-painel hover:border-azul"
                    }`}
                  >
                    {h}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dados do cliente */}
        <form onSubmit={enviar} className="flex flex-col gap-4 rounded-2xl bg-painel p-7">
          <h2 className="font-serif text-2xl">Seus dados</h2>

          <label className="flex flex-col gap-1.5 font-medium">
            Nome
            <input value={nome} onChange={(e) => setNome(e.target.value)} required
              className="rounded-[10px] border border-contorno bg-white px-3.5 py-3 font-normal" />
          </label>

          <label className="flex flex-col gap-1.5 font-medium">
            Telefone
            <input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)}
              placeholder="(11) 99999-9999" required
              className="rounded-[10px] border border-contorno bg-white px-3.5 py-3 font-normal" />
          </label>

          <label className="flex flex-col gap-1.5 font-medium">
            Serviço
            <select value={servicoId} onChange={(e) => setServicoId(e.target.value)}
              className="rounded-[10px] border border-contorno bg-white px-3.5 py-3 font-normal">
              {servicos.map((s) => (
                <option key={s.id} value={s.id}>{s.nome} ({reais(s.preco)})</option>
              ))}
            </select>
          </label>

          <p className="rounded-[10px] bg-borda/70 px-3.5 py-3 text-mudo">{resumo}</p>

          <button type="submit" disabled={!hora || enviando}
            className="rounded-full bg-azul py-4 font-bold text-painel disabled:cursor-not-allowed disabled:opacity-50">
            {enviando ? "Reservando..." : "Confirmar agendamento"}
          </button>

          {msg && (
            <p role="status" className={`rounded-[10px] px-3.5 py-3 font-medium ${
              msg.tipo === "ok" ? "bg-green-100 text-green-900" : "bg-red-100 text-red-900"
            }`}>
              {msg.texto}
            </p>
          )}
        </form>
      </div>
    </>
  );
}
