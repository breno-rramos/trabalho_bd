import { getHorariosOcupados } from "@/lib/queries";

export const dynamic = "force-dynamic";

// GET /api/horarios?barbeiro=1&data=2026-11-26  ->  { ocupados: ["10:00", "13:00"] }
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const barbeiro = Number(searchParams.get("barbeiro"));
  const data = searchParams.get("data") ?? "";

  if (!barbeiro || !/^\d{4}-\d{2}-\d{2}$/.test(data)) {
    return Response.json({ erro: "Informe barbeiro e data." }, { status: 400 });
  }

  try {
    const ocupados = await getHorariosOcupados(barbeiro, data);
    return Response.json({ ocupados });
  } catch (e) {
    console.error(e);
    return Response.json({ erro: "Não foi possível buscar os horários." }, { status: 500 });
  }
}
