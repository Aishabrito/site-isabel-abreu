import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import WhatsAppFlutuante from "../components/WhatsAppFlutuante";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Isabel Abreu | Economista e Planejadora Financeira",
  description:
    "Planejamento financeiro sem julgamento, para você sair do improviso e decidir com números. Consultoria pessoal, empresas e palestras.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        {children}
        <WhatsAppFlutuante />
      </body>
    </html>
  );
}
