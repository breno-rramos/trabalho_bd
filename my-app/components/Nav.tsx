"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { info } from "@/lib/info";

export default function Nav() {
  const pathname = usePathname(); // diz em qual página estamos, para destacar o link

  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-borda px-6 py-5 md:px-16">
      <Link href="/" className="font-serif text-2xl">{info.nome}</Link>
      <nav className="flex items-center gap-7">
        <Link href="/home" className={pathname === "/home" ? "font-bold underline underline-offset-8" : ""}>
          Início
        </Link>
        <Link
          href="/agendar"
          className={`rounded-full px-5 py-3 font-bold ${
            pathname === "/agendar" ? "bg-tinta text-painel" : "bg-azul text-painel"
          }`}
        >
          Agendar horário
        </Link>
      </nav>
    </header>
  );
}
