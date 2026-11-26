import "./globals.css";
import type { Metadata } from "next";
import { Young_Serif, DM_Sans } from "next/font/google";
import { info } from "@/lib/info";

const serif = Young_Serif({ subsets: ["latin"], weight: "400", variable: "--font-young" });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-dm" });

export const metadata: Metadata = {
  title: `${info.nome} | Agende seu horário`,
  description: "Agende seu corte ou barba online.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
