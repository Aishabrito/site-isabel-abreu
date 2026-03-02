"use client"; // Necessário para interatividade e ícones

import React from 'react';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-navy text-white shadow-md border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-wider">ISABEL ABREU</span>
          <span className="text-[10px] text-gold uppercase tracking-[0.2em]">Estratégia & Finanças</span>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:text-gold transition-colors">Início</a>
          <a href="#" className="hover:text-gold transition-colors">Consultoria Pessoal</a>
          <a href="#" className="hover:text-gold transition-colors">Para Empresas</a>
          <a href="#" className="hover:text-gold transition-colors">Palestras</a>
        </nav>

        {/* Botão CTA */}
        <button className="hidden md:block bg-gold text-navy px-6 py-2 rounded font-bold hover:bg-gold-light transition-all">
          Agendar Diagnóstico
        </button>

        {/* Menu Mobile */}
        <button className="md:hidden text-gold">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}