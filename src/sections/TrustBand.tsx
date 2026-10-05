// Faixa "Na mídia": selo "Foi ao ar" marinho com ponto vermelho, como no post do guia
export default function TrustBand() {
  const veiculos = ["SBT", "Globo", "CBN", "Record"];

  return (
    <section aria-label="Na mídia" className="border-y border-line bg-surface px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">Na mídia</span>
          <span className="flex items-center gap-2 rounded-full bg-navy px-3 py-1 text-[0.7rem] font-semibold text-cream">
            <span className="h-2 w-2 animate-pulse rounded-full bg-live" />
            Foi ao ar
          </span>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 md:gap-x-16">
          {veiculos.map((v) => (
            <li key={v} className="font-serif text-2xl font-medium text-navy/70 md:text-3xl">
              {v}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
