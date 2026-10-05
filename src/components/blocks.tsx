import Link from "next/link";
import ArrowButton from "./ArrowButton";
import ProgressBar from "./ProgressBar";
import { AGENDAR_HREF } from "../constants/links";

// Peças reutilizadas pelas páginas internas, todas seguindo o guia visual.

/* Cabeçalho de página: etiqueta, título com itálico de destaque, linha ouro e introdução */
export function PageHeader({
  eyebrow,
  title,
  intro,
  cta = "Agendar conversa",
  ctaHref = AGENDAR_HREF,
  aside,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  cta?: string | null;
  ctaHref?: string;
  aside?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-36 md:px-10 md:pb-24 md:pt-44">
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-24 h-96 w-96 rounded-full bg-gold-light/45 md:h-[30rem] md:w-[30rem]"
      />
      <div className="relative mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="flex flex-col">
          <span className="eyebrow mb-8">{eyebrow}</span>
          <h1 className="text-[clamp(2.75rem,6vw,5rem)] leading-[1.03]">{title}</h1>
          <span className="my-10 block h-1 w-16 rounded-full bg-gold" />
          <p className="max-w-xl text-lg leading-relaxed text-warm-gray">{intro}</p>
          {cta && (
            <div className="mt-10">
              <ArrowButton href={ctaHref}>{cta}</ArrowButton>
            </div>
          )}
        </div>
        {aside}
      </div>
    </section>
  );
}

/* Cabeçalho de seção: linha fina em cima, etiqueta e título */
export function SectionHead({
  eyebrow,
  title,
  intro,
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`mb-14 flex max-w-2xl flex-col gap-4 border-t pt-8 ${
        dark ? "border-white/10" : "border-line"
      }`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2
        className={`text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.06] ${dark ? "text-cream" : ""}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`text-lg leading-relaxed ${dark ? "text-cream/70" : "text-warm-gray"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

/* Cartões numerados 01, 02, 03 no estilo do carrossel clean */
export function NumberedCards({
  items,
  cols = 3,
}: {
  items: { title: string; text: string; tag?: string }[];
  cols?: 2 | 3;
}) {
  return (
    <div className={`grid gap-6 ${cols === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
      {items.map((item, i) => (
        <article
          key={item.title}
          className="flex flex-col gap-5 rounded-[1.75rem] border border-line bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(15,30,51,0.35)] md:p-10"
        >
          <div className="flex items-start justify-between gap-4">
            <span className="font-serif text-6xl font-light italic leading-none text-gold">
              {String(i + 1).padStart(2, "0")}
            </span>
            {item.tag && (
              <span className="rounded-full bg-chip px-3 py-1 text-xs font-semibold text-navy">
                {item.tag}
              </span>
            )}
          </div>
          <h3 className="text-2xl leading-snug">{item.title}</h3>
          <p className="flex-1 leading-relaxed text-warm-gray">{item.text}</p>
          <ProgressBar total={items.length} active={i + 1} />
        </article>
      ))}
    </div>
  );
}

/* Passo a passo no fundo marinho com grade (carrossel detalhado) */
export function Steps({
  eyebrow,
  title,
  steps,
}: {
  eyebrow: string;
  title: React.ReactNode;
  steps: { title: string; text: string }[];
}) {
  return (
    <section className="bg-detalhado relative overflow-hidden px-6 py-24 text-cream md:px-10 md:py-32">
      <div aria-hidden="true" className="bg-grade absolute inset-0" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHead eyebrow={eyebrow} title={title} dark />
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="flex flex-col gap-4 rounded-[1.75rem] border border-gold-light/25 bg-white/[0.03] p-8"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                Passo {i + 1}
              </span>
              <h3 className="text-2xl text-cream">{s.title}</h3>
              <p className="leading-relaxed text-cream/65">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* Lista com marca-texto ouro claro, para "o que está incluso" */
export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-x-10 gap-y-5 md:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-4 border-b border-line pb-5 text-lg text-graphite">
          <span
            aria-hidden="true"
            className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-gold"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

/* Perguntas frequentes, abre e fecha sem JavaScript */
export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="flex flex-col">
      {items.map((item) => (
        <details key={item.q} className="group border-b border-line py-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl font-medium text-navy md:text-2xl [&::-webkit-details-marker]:hidden">
            {item.q}
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-navy transition-transform duration-300 group-open:rotate-45">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M7 1v12M1 7h12" />
              </svg>
            </span>
          </summary>
          <p className="mt-4 max-w-3xl leading-relaxed text-warm-gray">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

/* Container padrão de seção clara */
export function Section({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`px-6 py-24 md:px-10 md:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

/* Link de texto sublinhado em ouro */
export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-8 transition-colors hover:text-terracotta"
    >
      {children}
    </Link>
  );
}
