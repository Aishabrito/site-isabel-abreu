// Frase de impacto no estilo do slide storytelling: Manrope forte + trecho em Fraunces itálico ouro claro
export default function Manifesto() {
  return (
    <section className="bg-navy-night px-6 py-28 md:px-10 md:py-40">
      <figure className="mx-auto flex max-w-4xl flex-col gap-10">
        <span aria-hidden="true" className="font-serif text-[9rem] leading-[0.5] text-gold">
          “
        </span>
        <blockquote className="flex flex-col gap-3 text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.15]">
          <span className="text-cream/45">Não é sobre privação.</span>
          <span className="text-cream/45">Não é sobre sacrifício.</span>
          <span className="text-cream">
            É sobre <em className="accent-dark">decisão.</em>
          </span>
        </blockquote>
        <figcaption className="flex items-center justify-between border-t border-white/10 pt-6 text-sm">
          <span className="text-cream/50">Isabel Abreu · Economista</span>
          <span className="font-semibold text-gold">@isabreu.co</span>
        </figcaption>
      </figure>
    </section>
  );
}
