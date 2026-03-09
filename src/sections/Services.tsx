import Link from "next/link";

export default function Services() {
  const rows = [
    { n: "01", name: "Consultoria Pessoal", desc: "Planejamento patrimonial, gestão de investimentos e estratégia fiscal para profissionais de alta renda.", tag: "Pessoa Física", href: "/consultoria-pessoal" },
    { n: "02", name: "Para Empresas", desc: "Estruturação financeira, governança corporativa e processos de alta performance para negócios em expansão.", tag: "Pessoa Jurídica", href: "/para-empresas" },
    { n: "03", name: "Palestras", desc: "Conteúdo de alto impacto sobre liderança financeira, gestão de alta performance e inteligência econômica.", tag: "Educação Executiva", href: "/palestras" },
  ];

  return (
    <section className="bg-cream py-24 px-8 md:px-[8vw]">
      
      {/* CABEÇALHO */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-10">
        <div>
          <p className="flex items-center gap-4 text-navy/60 text-xs tracking-[0.35em] uppercase mb-4">
            <span className="w-8 h-px bg-navy/30 block" />
            Área de atuação
          </p>
          <h2 className="text-navy text-4xl md:text-5xl font-serif font-light leading-tight">
            Uma frente para<br />cada estágio da jornada.
          </h2>
        </div>
        <p className="text-navy/60 text-sm leading-relaxed max-w-xs text-left md:text-right">
          Não trabalhamos com soluções genéricas.<br />Cada estratégia é construída para o seu perfil.
        </p>
      </div>

      {/* LISTA DE SERVIÇOS */}
      <div className="flex flex-col">
        {rows.map((r) => (
          <Link key={r.n} href={r.href} className="group text-none">
            {/* O group permite que o hover na div afete os elementos filhos */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 py-10 border-b border-navy/10 group-hover:bg-black/5 transition-colors duration-300 px-4 md:px-0">
              
              <span className="font-serif text-base text-navy/20 w-12 text-left">{r.n}</span>
              
              <span className="font-serif text-3xl text-navy group-hover:text-gold transition-colors duration-300 flex-1">
                {r.name}
              </span>
              
              <span className="text-sm text-navy/60 leading-relaxed flex-[1.2]">
                {r.desc}
              </span>
              
              <span className="text-[0.55rem] tracking-[0.2em] uppercase px-4 py-2 border border-navy/20 text-navy/40 group-hover:text-sage group-hover:border-sage transition-colors duration-300 whitespace-nowrap">
                {r.tag}
              </span>
              
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-navy/20 group-hover:text-gold transition-colors duration-300 hidden md:block">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}