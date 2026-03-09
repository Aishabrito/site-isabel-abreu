export default function Differentiators() {
  const items = [
    { icon: "◇", title: "Discrição Total", text: "Seus dados e estratégias permanecem estritamente confidenciais. Relação construída sobre confiança absoluta.", sage: false },
    { icon: "◇", title: "Visão 360°", text: "Integramos finanças pessoais, empresariais e comportamentais em uma única estratégia coesa.", sage: true },
    { icon: "◇", title: "Método Proprietário", text: "Framework desenvolvido em 8 anos, testado em mais de 200 portfólios de alta complexidade.", sage: false },
    { icon: "◇", title: "Acompanhamento Contínuo", text: "Não entregamos relatórios. Estamos ao lado do cliente na execução e nos ajustes de rota.", sage: true },
  ];

  return (
    <section className="bg-navyDeep py-24 px-8 md:px-[8vw]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        
        {/* LADO ESQUERDO: TEXTO */}
        <div>
          <p className="flex items-center gap-4 text-sage text-xs tracking-[0.38em] uppercase mb-4">
            <span className="w-8 h-px bg-sage block" />
            Por que Isabel Abreu
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-serif font-light leading-tight mb-8">
            Precisão onde<br />
            <em className="italic text-goldLight">outros generalizam.</em>
          </h2>
          <p className="text-white/50 text-sm leading-relaxed max-w-md mb-10">
            Trabalhamos com um número limitado de clientes por ciclo, garantindo atenção irrestrita e resultados que fazem sentido para a sua realidade.
          </p>
          <div className="pl-6 border-l-2 border-sage bg-sage/5 py-6 pr-6">
            <p className="font-serif text-xl italic text-sageLight leading-relaxed">
              &quot;Riqueza não é quanto você ganha.<br />É quanto você mantém — e multiplica.&quot;
            </p>
          </div>
        </div>

        {/* LADO DIREITO: GRID DE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-gold/10">
          {items.map((item) => (
            <div 
              key={item.title} 
              className="bg-navyDeep hover:bg-navyMid transition-colors duration-300 p-8"
            >
              <div className={`text-base mb-4 ${item.sage ? 'text-sage' : 'text-gold'}`}>
                {item.icon}
              </div>
              <h3 className={`text-[0.62rem] tracking-[0.2em] uppercase mb-3 ${item.sage ? 'text-sageLight' : 'text-goldLight'}`}>
                {item.title}
              </h3>
              <p className="text-white/40 text-[0.75rem] leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}