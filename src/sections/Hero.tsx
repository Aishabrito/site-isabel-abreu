import Image from "next/image";
import Link from "next/link";
import ArrowButton from "../components/ArrowButton";
import { AGENDAR_HREF, INSTAGRAM } from "../constants/links";
import foto from "../assets/profissionalisa.jpeg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        {/* TEXTO — no estilo da capa do carrossel clean */}
        <div className="relative z-10 flex flex-col">
          <span className="eyebrow mb-8">Isabel Abreu · Economista</span>

          <h1 className="text-[clamp(2.75rem,6.5vw,5.5rem)] leading-[1.02]">
            Menos improviso, <em className="accent">mais liberdade</em> com o seu dinheiro.
          </h1>

          <span className="my-10 block h-1 w-16 rounded-full bg-gold" />

          <p className="max-w-lg text-lg leading-relaxed text-warm-gray">
            Planejamento financeiro próximo, firme e sem julgamento. Para quem trabalha muito,
            ganha bem e ainda sente que o dinheiro escapa no fim do mês.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6">
            <ArrowButton href={AGENDAR_HREF}>Agendar conversa</ArrowButton>
            <Link
              href="#como-funciona"
              className="text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-8 transition-colors hover:text-terracotta"
            >
              Conheça o trabalho
            </Link>
          </div>
        </div>

        {/* FOTO com o círculo ouro claro cortado, assinatura dos carrosséis */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-gold-light/55 md:-left-32 md:h-96 md:w-96"
          />
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(15,30,51,0.45)]">
            <Image
              src={foto}
              alt="Isabel Abreu, economista e planejadora financeira"
              priority
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="h-auto w-full"
            />
          </div>

          <Link
            href={INSTAGRAM.href}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-5 top-5 rounded-full border border-cream/40 bg-navy/40 px-4 py-1.5 text-xs font-semibold text-cream backdrop-blur-sm transition-colors hover:bg-navy/70"
          >
            {INSTAGRAM.handle}
          </Link>

          <div className="absolute -bottom-6 right-4 flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4 shadow-[0_18px_40px_-24px_rgba(15,30,51,0.35)] md:right-8">
            <span className="font-serif text-4xl font-light italic leading-none text-gold">01</span>
            <span className="text-sm leading-snug text-graphite">
              Primeiro passo:
              <br />
              <b className="text-navy">entender os seus números</b>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
