// src/sections/Positioning.tsx

export default function Positioning() {
  const cards = [
    { n: "01", label: "Patrimônio Pessoal", desc: "Para executivos e profissionais de alta renda que precisam de clareza e estratégia no crescimento patrimonial." },
    { n: "02", label: "Empresas em Expansão", desc: "Para empresários que vendem bem mas precisam estruturar as finanças para crescer com segurança." },
    { n: "03", label: "Decisões de Alto Nível", desc: "Decisões financeiras de alto nível vão além de planilhas — exigem visão estratégica e presença contínua." },
  ];

  return (
    // bg-navy é o fundo azul escuro principal
    <section className="bg-navy py-28 px-8 md:px-[8vw]">
      
      {/* CABEÇALHO */}
      <div className="max-w-2xl mb-16">
        <p className="flex items-center gap-4 text-gold text-xs tracking-[0.3em] uppercase mb-4">
          <span className="w-8 h-px bg-gold block" />
          Para Quem É
        </p>
        <h2 className="text-white text-4xl md:text-5xl font-serif font-light leading-tight">
          Você produz resultados.<br />
          <em className="italic text-goldLight">Seu patrimônio também deveria.</em>
        </h2>
      </div>

      {/* GRID DOS CARDS (Igualzinho você pediu, mas com Tailwind) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/10">
        
        {cards.map((c) => (
          // bg-[#0f2444] é a cor de fundo específica que você enviou no código
          <div 
            key={c.n} 
            className="bg-[#0f2444] p-10 hover:bg-white/5 transition-colors duration-300"
          >
            {/* NÚMERO */}
            <div className="font-serif text-5xl font-bold text-gold/10 mb-5 leading-none">
              {c.n}
            </div>
            
            {/* TÍTULO DO CARD */}
            <div className="font-sans text-[0.65rem] font-semibold tracking-widest uppercase text-gold mb-4">
              {c.label}
            </div>
            
            {/* DESCRIÇÃO */}
            <p className="text-white/60 text-sm font-light leading-relaxed">
              {c.desc}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}