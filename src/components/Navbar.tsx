
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "../constants/links"; // <-- Olha o nosso import aqui!

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={
        scrolled 
          ? "fixed top-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-navy transition-all"
          : "fixed top-0 w-full z-50 flex items-center justify-between px-8 py-6 bg-transparent transition-all"
      }
    >
      {/* LOGO */}
      <Link href="/" className="flex items-center gap-3">
        <div className="w-1 h-8 bg-gold" />
        <div className="flex flex-col">
          <span className="text-white text-lg font-bold tracking-widest uppercase">ISABEL ABREU</span>
          <span className="text-gold text-xs tracking-widest uppercase">Estratégia & Finanças</span>
        </div>
      </Link>

      {/* LINKS DO MENU */}
      <ul className="hidden md:flex gap-8">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <Link 
              href={link.href}
              className="text-white/70 hover:text-gold transition-colors text-xs tracking-widest uppercase"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* BOTÃO */}
      <Link href="/agendar">
        <button className="border border-gold text-gold px-6 py-3 uppercase text-xs tracking-widest hover:bg-gold hover:text-navy transition-colors">
          Agendar Diagnóstico
        </button>
      </Link>
    </nav>
  );
}