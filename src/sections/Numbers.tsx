// Seção no estilo do carrossel detalhado: fundo marinho com grade, números em ouro
export default function Numbers() {
  const linhas = [
    { renda: "R$ 5 mil/mês", patrimonio: "R$ 777 mil" },
    { renda: "R$ 10 mil/mês", patrimonio: "R$ 1,55 mi" },
    { renda: "R$ 20 mil/mês", patrimonio: "R$ 3,11 mi" },
  ];

  return (
    <section className="bg-detalhado relative overflow-hidden px-6 py-24 text-cream md:px-10 md:py-32">
      <div aria-hidden="true" className="bg-grade absolute inset-0" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col gap-6">
          <span className="w-fit rounded-full bg-gold px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-navy">
            Viver de renda
          </span>
          <h2 className="text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] text-cream">
            Quanto você precisa juntar para{" "}
            <em className="accent-dark">nunca mais depender do salário?</em>
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-cream/70">
            Aqui a conversa é com número na mesa. Com o seu número da liberdade definido, fica
            claro quanto guardar por mês e por quanto tempo.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="rounded-[2.25rem] border border-gold-light/25 bg-white/[0.03] p-6 backdrop-blur-sm md:p-8">
            {linhas.map((l, i) => (
              <div
                key={l.renda}
                className={`flex items-end justify-between gap-4 py-5 ${
                  i < linhas.length - 1 ? "border-b border-dashed border-white/10" : ""
                }`}
              >
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-cream/60">Renda desejada</span>
                  <span className="whitespace-nowrap text-lg font-bold text-cream md:text-2xl">{l.renda}</span>
                </div>
                <span className="whitespace-nowrap font-serif text-3xl font-medium text-gold sm:text-4xl md:text-5xl">
                  {l.patrimonio}
                </span>
              </div>
            ))}
          </div>
          <p className="px-2 text-xs text-cream/55">
            *Considerando rentabilidade real de 8% ao ano (cerca de 0,64% ao mês), sem consumir o
            patrimônio.
          </p>
        </div>
      </div>
    </section>
  );
}
