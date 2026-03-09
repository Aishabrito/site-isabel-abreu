import Link from "next/link";

export default function Hero() {
  return (
    // min-h-screen faz a seção ocupar 100% da altura da tela
    <section className="relative min-h-screen bg-navy flex items-center overflow-hidden">
      
      {/* BACKGROUND DECORATIVO SIMPLIFICADO */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex items-center justify-end pr-20 hidden md:flex">
        <div className="w-[500px] h-[500px] rounded-full border border-gold border-dashed animate-[spin_40s_linear_infinite]" />
        <div className="absolute w-[300px] h-[300px] rounded-full border border-sage animate-[spin_30s_linear_infinite_reverse]" />
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="relative z-10 px-8 md:px-[8vw] pt-32 pb-40 max-w-3xl">
        <p className="flex items-center gap-4 text-gold text-xs tracking-[0.4em] uppercase mb-8">
          <span className="w-10 h-px bg-gold" />
          Gestão Patrimonial · Est. 2024
        </p>

        <h1 className="text-white text-5xl md:text-7xl font-serif font-light leading-tight mb-8">
          Quem sabe gerir<br />
          patrimônio,<br />
          <em className="italic text-goldLight">constrói legado.</em>
        </h1>

        <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md mb-8">
          Estratégia financeira de alto nível para executivos, empresários e profissionais que exigem clareza, discrição e resultados consistentes.
        </p>

        <p className="flex items-center gap-3 text-sage text-xs tracking-wider mb-12">
          <span className="w-4 h-px bg-sage" />
          Diagnóstico personalizado · Resultados mensuráveis
        </p>

        {/* BOTÕES */}
        <div className="flex flex-wrap items-center gap-8">
          <Link href="/agendar">
            <button className="bg-gold text-navy font-bold px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-goldLight hover:-translate-y-1 transition-all duration-300">
              Agendar Diagnóstico
            </button>
          </Link>
          <Link href="/sobre" className="text-white/40 hover:text-sage flex items-center gap-2 text-xs tracking-widest uppercase transition-colors">
            Conheça o método
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M9 4l4 4-4 4"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* BARRA DE ESTATÍSTICAS (RODAPÉ DO HERO) */}
      <div className="absolute bottom-0 left-0 w-full z-20 flex flex-col md:flex-row bg-[#0E1620]/80 backdrop-blur-md border-t border-gold/10">
        {[
          ["200+", "Clientes atendidos"],
          ["8+", "Anos de experiência"],
          ["3×", "Crescimento médio"],
          ["100%", "Dedicação personalizada"]
        ].map(([num, lbl], index) => (
          <div key={lbl} className={`flex-1 p-6 md:p-8 flex flex-col gap-2 ${index < 3 ? 'md:border-r border-gold/10' : ''}`}>
            <span className="text-gold font-serif text-3xl font-light">{num}</span>
            <span className="text-white/30 text-[0.6rem] tracking-[0.2em] uppercase">{lbl}</span>
          </div>
        ))}
      </div>
    </section>
  );
}