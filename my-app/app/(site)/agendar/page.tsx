import { getServicos, getBarbeiros } from "@/lib/queries"; // <- BANCO
import FormAgendar from "@/components/FormAgendar";

export const dynamic = "force-dynamic";

export default async function Agendar() {
  const [servicos, barbeiros] = await Promise.all([getServicos(), getBarbeiros()]);

  return (
    <main className="flex flex-col gap-9 px-6 pb-16 pt-12 md:px-16">
      <h1 className="font-serif text-4xl">Agende com seu barbeiro</h1>
      {/* O formulário é interativo, então vive num componente de navegador. Os dados do banco entram como props. */}
      <FormAgendar servicos={servicos} barbeiros={barbeiros} />
    </main>
  );
}
