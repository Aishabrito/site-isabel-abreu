import ProgressBar from "../components/ProgressBar";

// "Para quem é" no estilo do slide interno do carrossel clean: número em Fraunces Light Italic ouro
export default function Positioning() {
  const cards = [
    {
      n: "01",
      label: "Pessoa física",
      title: "Você ganha bem, mas o dinheiro some.",
      desc: "Para profissionais que querem parar de apagar incêndio e ter clareza de para onde vai cada real.",
    },
    {
      n: "02",
      label: "Empresas",
      title: "Vende bem, mas o caixa vive no limite.",
      desc: "Para empresários que precisam separar as contas, organizar o fluxo de caixa e crescer com segurança.",
    },
    {
      n: "03",
      label: "Futuro",
      title: "Quer viver de renda um dia.",
      desc: "Para quem quer transformar o salário de hoje em patrimônio e decidir com números, não com medo.",
    },
  ];

  return (
    <section id="como-funciona" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex max-w-2xl flex-col gap-4 border-t border-line pt-8">
          <span className="eyebrow">Para quem é</span>
          <h2 className="text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.06]">
            Você produz resultado. <em className="accent">Seu dinheiro também deveria.</em>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <article
              key={c.n}
              className="group flex flex-col gap-5 rounded-[1.75rem] border border-line bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(15,30,51,0.35)] md:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="font-serif text-7xl font-light italic leading-none text-gold">{c.n}</span>
                <span className="rounded-full bg-chip px-3 py-1 text-xs font-semibold text-navy">{c.label}</span>
              </div>
              <h3 className="text-2xl leading-snug">{c.title}</h3>
              <p className="flex-1 leading-relaxed text-warm-gray">{c.desc}</p>
              <ProgressBar total={cards.length} active={i + 1} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
