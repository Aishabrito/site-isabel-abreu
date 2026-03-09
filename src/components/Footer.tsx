// src/components/Footer.tsx
import Link from "next/link";
import { NAV_LINKS } from "../constants/links"; // <-- Mesmo import aqui!

export default function Footer() {
  return (
    <footer className="bg-navy py-14 px-8 md:px-16 border-t border-gold/10">
      
      <div className="flex flex-col md:flex-row items-center justify-between flex-wrap gap-8 mb-10">
        
        {/* LOGO */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-white text-lg font-serif font-bold tracking-widest uppercase">
            ISABEL ABREU
          </span>
          <span className="text-gold text-xs tracking-widest uppercase">
            Estratégia & Finanças · Est. 2024
          </span>
        </div>
        
        {/* LINKS PUXADOS DA CONSTANTE */}
        <div className="flex gap-6 flex-wrap justify-center">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.label} 
              href={link.href}
              className="text-white/40 hover:text-gold transition-colors text-xs tracking-widest uppercase"
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        {/* REDES SOCIAIS */}
        <div className="flex gap-6">
          {["Instagram", "LinkedIn"].map((social) => (
            <Link 
              key={social} 
              href="#"
              className="text-sage hover:text-white transition-colors text-xs tracking-widest uppercase"
            >
              {social}
            </Link>
          ))}
        </div>

      </div>
      
      {/* COPYRIGHT */}
      <div className="border-t border-gold/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
        <span className="text-white/30 text-xs tracking-wider">
          © 2024 Isabel Abreu. Todos os direitos reservados.
        </span>
        <span className="text-white/30 text-xs tracking-wider">
          Política de Privacidade · Termos de Uso
        </span>
      </div>
      
    </footer>
  );
}