import Link from "next/link";
import { Scissors } from "lucide-react";
import { info } from "@/lib/info";
import Image from "next/image";

export default function TelaInicial() {
  return (
    <main className="grid min-h-screen md:grid-cols-[1.1fr_1fr]">
      <section className="flex flex-col justify-center gap-6 bg-azul px-8 py-16 text-painel md:px-16">
        <Scissors size={40} aria-hidden="true" />
        <h1 className="font-serif text-5xl leading-tight md:text-7xl">{info.nome}</h1>
        <p className="max-w-md text-xl leading-relaxed text-painel/85">{info.frase}</p>
        <div className="mt-2 flex flex-wrap gap-4">
          <Link href="/home" className="rounded-full bg-latao px-7 py-4 font-bold text-tinta">
            Conhecer a barbearia
          </Link>
          <Link href="/agendar" className="rounded-full border-2 border-latao px-7 py-3.5 font-bold text-painel">
            Agendar horário
          </Link>
        </div>
      </section>

      <section className="flex items-center justify-center bg-borda p-10">
          <div className="relative h-[420px] w-full max-w-md overflow-hidden rounded-t-[200px] rounded-b-2xl">
            <Image
              src="/fachada.jpg"
              alt="Fachada da barbearia"
              fill
              sizes="448px"
              className="object-cover"
              priority
            />
          </div>
      </section>
    </main>
  );
}
