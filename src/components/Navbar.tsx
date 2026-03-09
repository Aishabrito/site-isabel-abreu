"use client";

import { useEffect, useState } from "react";
import Link from "next/link"; // Componente do Next.js para links rápidos

const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Consultoria Pessoal", href: "/consultoria-pessoal" },
  { label: "Para Empresas", href: "/para-empresas" },
  { label: "Palestras", href: "/palestras" },
];

export default function Navbar() {
  // Lógica para saber se a página rolou para baixo
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true); // Se rolou mais de 50px, ativa o fundo
      } else {
        setScrolled(false); // Se voltou pro topo, fica transparente
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      // Se 'scrolled' for true, usa o fundo azul-escuro. Se não, fica transparente.
      className={
        scrolled 
          ? "fixed top-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-navy transition-all"
          : "fixed top-0 w-full z-50 flex items-center justify-between px-8 py-6 bg-transparent transition-all"
      }
    >
      {/* 1. LADO ESQUERDO: LOGO */}
      <Link href="/" className="flex items-center gap-3">
        <div className="w-1 h-8 bg-gold" /> {/* Barrinha dourada */}
        <div className="flex flex-col">
          <span className="text-white text-lg font-bold tracking-widest uppercase">ISABEL ABREU</span>
          <span className="text-gold text-xs tracking-widest uppercase">Estratégia & Finanças</span>
        </div>
      </Link>

      {/* 2. MEIO: LINKS */}
      <ul className="hidden md:flex gap-8"> 
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <Link 
              href={link.href}
              // Um hover simples: o texto fica dourado ao passar o mouse
              className="text-white/70 hover:text-gold transition-colors text-xs tracking-widest uppercase"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* 3. LADO DIREITO: BOTÃO */}
      <Link href="/agendar">
        <button className="border border-gold text-gold px-6 py-3 uppercase text-xs tracking-widest hover:bg-gold hover:text-navy transition-colors">
          Agendar Diagnóstico
        </button>
      </Link>
    </nav>
  );
}