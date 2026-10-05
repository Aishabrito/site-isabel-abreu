import Link from "next/link";

export default function Services() {
  const rows = [
    {
      n: "01",
      name: "Consultoria Pessoal",
      desc: "Diagnóstico dos seus números, reserva de emergência, organização do orçamento e um plano de investimentos que cabe na sua vida.",
      tag: "Pessoa física",
      href: "/consultoria-pessoal",
    },
    {
      n: "02",
      name: "Para Empresas",
      desc: "Separação das contas, fluxo de caixa, precificação e rotinas financeiras para o negócio crescer sem sufoco.",
      tag: "Pessoa jurídica",
      href: "/para-empresas",
    },
    {
      n: "03",
      name: "Palestras",
      desc: "Educação financeira para equipes e eventos, com linguagem leve, exemplos reais e números que todo mundo entende.",
      tag: "Empresas e eventos",
      href: "/palestras",
    },
  ];

  return (
    <section className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-8 border-t border-line pt-8 md:flex-row md:items-end">
          <div className="flex flex-col gap-4">
            <span className="eyebrow">Como posso ajudar</span>
            <h2 className="text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.06]">
              Uma frente para <em className="accent">cada momento.</em>
            </h2>
          </div>
          <p className="max-w-sm leading-relaxed text-warm-gray md:text-right">
            Nada de solução pronta. Cada plano é montado a partir da sua realidade.
          </p>
        </div>

        <ul className="flex flex-col">
          {rows.map((r) => (
            <li key={r.n}>
              <Link
                href={r.href}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-6 gap-y-3 border-b border-line py-8 transition-colors md:grid-cols-[4rem_1fr_1.3fr_auto_auto] md:gap-x-10 md:py-10"
              >
                <span className="font-serif text-3xl font-light italic text-gold">{r.n}</span>
                <span className="font-serif text-3xl font-medium text-navy transition-colors duration-300 group-hover:text-terracotta md:text-4xl">
                  {r.name}
                </span>
                <span className="col-span-3 leading-relaxed text-warm-gray md:col-span-1">{r.desc}</span>
                <span className="hidden whitespace-nowrap rounded-full bg-chip px-4 py-1.5 text-xs font-semibold text-navy md:inline-block">
                  {r.tag}
                </span>
                <span className="row-start-1 col-start-3 flex h-11 w-11 items-center justify-center rounded-full border border-line text-navy transition-all duration-300 group-hover:border-navy group-hover:bg-navy group-hover:text-cream md:col-start-auto md:row-start-auto">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
