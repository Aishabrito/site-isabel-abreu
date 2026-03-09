export default function Manifesto() {
  return (
    <section className="bg-navy py-40 px-8 text-center relative overflow-hidden flex flex-col items-center">
      
      {/* Detalhe de linha e bolinha */}
      <div className="flex items-center justify-center gap-8 mb-16">
        <div className="h-px w-20 bg-gold/20" />
        <div className="w-2 h-2 rounded-full bg-gold/50" />
        <div className="h-px w-20 bg-gold/20" />
      </div>

      <blockquote className="font-serif text-3xl md:text-5xl font-light italic leading-relaxed max-w-3xl text-white mb-12">
        &quot;Não é sobre privação.<br />
        Não é sobre sacrifício.<br />
        É sobre <em className="not-italic text-goldLight">decisão.</em>&quot;
      </blockquote>

      {/* Assinatura */}
      <div className="flex items-center justify-center gap-4">
        <div className="w-6 h-px bg-gold/40" />
        <cite className="font-sans text-[0.58rem] tracking-[0.32em] uppercase text-gold/70 not-italic">
          Isabel Abreu
        </cite>
        <div className="w-6 h-px bg-gold/40" />
      </div>

    </section>
  );
}