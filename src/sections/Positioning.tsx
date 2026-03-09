export default function Positioning() {
  const cards = [
    { n: "01", title: "Patrimônio Pessoal", accent: "bg-gold", textClass: "text-gold", text: "Para executivos e profissionais de alta renda que querem transformar remuneração em ativos reais — com estratégia, não intuição." },
    { n: "02", title: "Governança Empresarial", accent: "bg-sage", textClass: "text-sage", text: "Para empresários que vendem bem mas precisam de processos financeiros robustos, caixa previsível e crescimento sustentável." },
    { n: "03", title: "Mentalidade de Elite", accent: "bg-goldLight", textClass: "text-goldLight", text: "Decisões financeiras de alto nível vão além de planilhas. Trabalhamos o comportamento e a visão que sustentam riqueza duradoura." },
  ];

  return (
    <section className="bg-navy py-24 px-8 md:px-[8vw]">
      
      {/* CABEÇALHO DA SEÇÃO */}
      <div className="max-w-2xl mb-16">
        <p className="flex items-center gap-4 text-gold text-xs tracking-[0.3em] uppercase mb-4">
          <span className="w-8 h-px bg-gold block" />
          Para quem é
        </p>
        <h2 className="text-white text-4xl md:text-5xl font-serif font-light leading-tight">
          Você produz resultados.<br />
          <em className="italic text-goldLight">Seu patrimônio também deveria.</em>
        </h2>
      </div>

      {/* GRID DE CARDS */}
      {/* No celular (1 coluna), no PC (3 colunas). O gap-1 com fundo gold/10 cria o efeito de borda fininha entre eles! */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-gold/10 border border-gold/10">
        
        {cards.map((card) => (
          <div 
            key={card.n} 
            className="bg-navy p-10 relative group hover:bg-navyMid transition-colors duration-300"
          >
            {/* Linha colorida no topo que aparece quando passa o mouse (Tailwind puro!) */}
            <div className={`absolute top-0 left-0 w-full h-[2px] ${card.accent} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500`} />

            <div className="text-5xl font-serif text-gold/10 mb-6">{card.n}</div>
            <h3 className={`${card.textClass} text-xs tracking-widest uppercase mb-4`}>
              {card.title}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              {card.text}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}