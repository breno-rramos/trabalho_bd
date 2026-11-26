import { criarAgendamento } from "@/lib/queries";
import { HORARIOS } from "@/lib/horarios";

// POST /api/agendamentos  ->  salva um agendamento
export async function POST(request: Request) {
  const corpo = await request.json();
  const nome = String(corpo.nome ?? "").trim();
  const telefone = String(corpo.telefone ?? "").trim();
  const servicoId = Number(corpo.servicoId);
  const barbeiroId = Number(corpo.barbeiroId);
  const data = String(corpo.data ?? "");
  const hora = String(corpo.hora ?? "");

  // Nunca confie só no formulário: valide de novo aqui no servidor
  if (!nome || !telefone || !servicoId || !barbeiroId || !/^\d{4}-\d{2}-\d{2}$/.test(data) || !HORARIOS.includes(hora)) {
    return Response.json({ erro: "Preencha todos os campos corretamente." }, { status: 400 });
  }

  try {
    const resultado = await criarAgendamento({ nome, telefone, servicoId, barbeiroId, data, hora });
    if (resultado.conflito) {
      return Response.json({ erro: "Esse horário acabou de ser reservado. Escolha outro." }, { status: 409 });
    }
    return Response.json({ ok: true }, { status: 201 });
  } catch (e) {
    console.error(e);
    return Response.json({ erro: "Erro ao salvar o agendamento." }, { status: 500 });
  }
}
