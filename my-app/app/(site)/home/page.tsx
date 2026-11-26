import Link from "next/link";
import { Clock, MapPin } from "lucide-react";
import { getServicos, getBarbeiros } from "@/lib/queries"; // <- BANCO
import { reais } from "@/lib/format";
import { info } from "@/lib/info";
import Image from "next/image";

export const dynamic = "force-dynamic"; // sempre busca os dados atuais do banco

const coresAvatar = ["bg-azul", "bg-madeira", "bg-mudo"];

export default async function Home() {
  // Esta página roda no servidor, então pode chamar o banco direto
  const [servicos, barbeiros] = await Promise.all([getServicos(), getBarbeiros()]);

  return (
    <main>
      <section className="grid items-center gap-12 px-6 py-14 md:grid-cols-2 md:px-16">
        <div className="flex flex-col items-start gap-5">
          <h1 className="font-serif text-4xl leading-tight md:text-5xl">Cuidar do visual sem pressa.</h1>
          <p className="max-w-lg text-lg leading-relaxed text-mudo">{info.sobre}</p>
          <Link href="/agendar" className="rounded-full bg-azul px-7 py-4 font-bold text-painel">
            Agendar horário
          </Link>
        </div>
        <div className="relative h-80 overflow-hidden rounded-2xl">
          <Image
            src="/interno.jpg"
            alt="Interior da barbearia"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="grid gap-14 bg-painel px-6 py-14 md:grid-cols-2 md:px-16">
        <div>
          <h2 className="mb-4 font-serif text-3xl">Serviços</h2>
          <ul>
            {servicos.map((s) => (
              <li key={s.id} className="flex justify-between border-b border-borda py-3.5 last:border-b-0">
                <span>{s.nome}</span>
                <b>{reais(s.preco)}</b>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-7">
          <h2 className="font-serif text-3xl">Visite a gente</h2>
          <p className="flex items-start gap-3.5">
            <Clock size={24} className="mt-0.5 shrink-0 text-madeira" aria-hidden="true" />
            <span>{info.horario}</span>
          </p>
          <p className="flex items-start gap-3.5">
            <MapPin size={24} className="mt-0.5 shrink-0 text-madeira" aria-hidden="true" />
            <span>{info.endereco}</span>
          </p>
        </div>
      </section>

      <section className="px-6 py-14 md:px-16">
        <h2 className="mb-6 font-serif text-3xl">Nossos barbeiros</h2>
        <ul className="flex flex-wrap gap-10">
          {barbeiros.map((b, i) => (
            <li key={b.id} className="flex items-center gap-4">
              <span className={`flex h-16 w-16 items-center justify-center rounded-full font-serif text-2xl text-painel ${coresAvatar[i % 3]}`}>
                {b.nome[0]}
              </span>
              <b className="text-lg">{b.nome}</b>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
