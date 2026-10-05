import { AGENDAR_HREF } from "../constants/links";

// Botão fixo no canto da tela para chamar no WhatsApp de qualquer página
export default function WhatsAppFlutuante() {
  return (
    <a
      href={AGENDAR_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a Isabel no WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-navy py-3 pl-3 pr-5 text-cream shadow-[0_18px_40px_-16px_rgba(15,30,51,0.6)] ring-1 ring-gold/40 transition-all duration-300 hover:-translate-y-1 hover:bg-navy-glow md:bottom-8 md:right-8"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-navy">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.03c-.25.69-1.44 1.33-2 1.38-.51.05-.99.24-3.34-.7-2.82-1.11-4.6-4-4.74-4.18-.14-.19-1.13-1.5-1.13-2.87 0-1.37.71-2.04.97-2.32.25-.28.55-.35.74-.35l.53.01c.17 0 .4-.06.62.48.25.6.84 2.07.92 2.22.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.26 1.64 2.04 1.13 1 2.08 1.31 2.37 1.46.29.15.46.12.63-.07.17-.19.73-.85.92-1.15.19-.29.39-.24.65-.15.27.1 1.7.8 1.99.95.29.15.48.22.55.34.08.12.08.69-.17 1.38Z" />
        </svg>
      </span>
      <span className="hidden text-sm font-semibold sm:inline">Fale comigo</span>
    </a>
  );
}
