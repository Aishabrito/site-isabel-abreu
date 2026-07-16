
export default function Differentiators() {
  const items = [
    {
      icon: "◇",
      title: "Confidencialidade",
      text: "Seus dados e estratégias permanecem estritamente confidenciais. Relação construída sobre confiança absoluta."
    },
    {
      icon: "◇",
      title: "Visão Integrada",
      text: "Finanças pessoais, empresariais e comportamentais em uma única estratégia coesa."
    },
    {
      icon: "◇",
      title: "Método Testado",
      text: "Framework desenvolvido em 8 anos, testado em mais de 200 portfólios de alta complexidade."
    },
    {
      icon: "◇",
      title: "Presença Contínua",
      text: "Não entregamos relatórios. Estamos ao lado do cliente na execução e nos ajustes de rota."
    },
  ];

  return (
    // bg-navy garante que o fundo todo seja o azul escuro
    <section className="bg-navy py-28 px-8 md:px-[8vw]">
      
      {/* GRID DIVIDINDO 50/50 A TELA NO COMPUTADOR */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start max-w-7xl mx-auto">

        {/* --- LADO ESQUERDO: TEXTOS --- */}
        <div className="flex flex-col">
          
          {/* Eyebrow (Texto pequenininho em cima) */}
          <p className="flex items-center gap-4 text-white/50 text-[0.65rem] tracking-[0.2em] uppercase mb-6">
            <span className="w-8 h-px bg-gold block" />
            Por que Isabel Abreu
          </p>

          {/* Título Principal Faltante! */}
          <h2 className="text-white text-4xl md:text-5xl font-serif font-bold leading-tight mb-16">
            Uma parceria<br />
            construída para<br />
            durar décadas.
          </h2>

          {/* Citação com a linha dourada do lado */}
          <div className="pl-6 border-l-[2px] border-gold">
            <p className="font-serif text-lg text-white/80 leading-relaxed mb-4">
              &quot;Riqueza não é quanto você ganha.<br />
              É quanto você mantém — e multiplica.&quot;
            </p>
            <p className="font-sans text-xs text-white/40">
              — Isabel Abreu
            </p>
          </div>
        </div>


        {/* --- LADO DIREITO: GRID DE CARDS --- */}
        {/* Usando gap-6 para criar espaço real entre os cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              // bg-[#14243b] é um azul sutilmente diferente para destacar do fundo.
              // border-t border-gold/40 cria aquela linha dourada em cima do card!
              className="bg-[#14243b] p-8 border-t border-gold/40 hover:bg-white/5 transition-colors duration-300"
            >
              <div className="text-gold text-sm mb-6">
                {item.icon}
              </div>
              
              <h3 className="font-sans text-[0.75rem] font-bold text-white tracking-wide mb-4">
                {item.title}
              </h3>
              
              <p className="text-white/60 text-[0.8rem] font-light leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}