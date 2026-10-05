import Link from "next/link";
import { AGENDAR_HREF, EMAIL, INSTAGRAM, NAV_LINKS, WHATSAPP } from "../constants/links";

export default function Footer() {
  return (
    <footer className="bg-navy-night px-6 pb-10 pt-16 text-cream md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          {/* ASSINATURA */}
          <div className="flex flex-col gap-2">
            <span className="font-serif text-3xl font-medium text-cream">
              Isabel <em className="accent-dark">Abreu</em>
            </span>
            <span className="text-sm text-cream/60">Economista e Planejadora Financeira</span>
            <Link
              href={INSTAGRAM.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-sm font-semibold text-gold transition-colors hover:text-gold-light"
            >
              {INSTAGRAM.handle}
            </Link>
            <Link
              href={AGENDAR_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cream/60 transition-colors hover:text-gold-light"
            >
              WhatsApp {WHATSAPP.exibicao}
            </Link>
            <a href={`mailto:${EMAIL}`} className="text-sm text-cream/60 transition-colors hover:text-gold-light">
              {EMAIL}
            </a>
          </div>

          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-cream/60 transition-colors hover:text-gold-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Barra toda em ouro, como no slide final */}
        <div className="my-10 h-px bg-gold/30" />

        <div className="flex flex-col gap-3 text-xs text-cream/40 md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} Isabel Abreu. Todos os direitos reservados.</span>
          <span>Política de Privacidade · Termos de Uso</span>
        </div>
      </div>
    </footer>
  );
}
