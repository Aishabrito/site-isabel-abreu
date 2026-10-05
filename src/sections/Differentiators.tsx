// "Por que Isabel Abreu" no estilo do carrossel storytelling: fundo escuro, aspas em ouro, "1/4"
export default function Differentiators() {
  const items = [
    {
      title: "Sem julgamento",
      text: "Ninguém aqui vai apontar o dedo para o seu cartão de crédito. A gente parte de onde você está.",
    },
    {
      title: "Com números de verdade",
      text: "Cada recomendação vem com a conta junto, para você entender o porquê e decidir com segurança.",
    },
    {
      title: "Visão integrada",
      text: "Finanças pessoais, do negócio e comportamento olhados juntos, em um único plano coerente.",
    },
    {
      title: "Presença contínua",
      text: "Não é um relatório entregue e esquecido. É acompanhamento na execução e nos ajustes de rota.",
    },
  ];

  return (
    <section className="bg-storytelling px-6 py-24 text-cream md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="flex flex-col">
          <span className="eyebrow mb-6">Por que Isabel Abreu</span>
          <h2 className="mb-14 text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.06] text-cream">
            Uma parceria feita para <em className="accent-dark">durar décadas.</em>
          </h2>

          <figure className="flex flex-col gap-6">
            <span aria-hidden="true" className="font-serif text-8xl leading-[0.5] text-gold">
              “
            </span>
            <blockquote className="font-sans text-2xl font-semibold leading-snug text-cream md:text-3xl">
              Riqueza não é quanto você ganha.{" "}
              <em className="accent-dark font-normal">É quanto você mantém e multiplica.</em>
            </blockquote>
            <figcaption className="text-sm text-cream/50">Isabel Abreu · Economista</figcaption>
          </figure>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item, i) => (
            <article
              key={item.title}
              className="flex flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8 transition-colors duration-300 hover:border-gold/40"
            >
              <span className="text-sm font-bold text-gold">
                {i + 1}/{items.length}
              </span>
              <h3 className="font-sans text-xl font-bold tracking-normal text-cream">{item.title}</h3>
              <p className="leading-relaxed text-cream/60">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
