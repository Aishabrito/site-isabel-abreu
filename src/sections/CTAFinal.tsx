import ArrowButton from "../components/ArrowButton";
import ProgressBar from "../components/ProgressBar";
import { AGENDAR_HREF } from "../constants/links";

// No estilo do slide final (CTA): fundo detalhado, 3 passos com número em círculo ouro, barra toda em ouro
const PASSOS_PADRAO: React.ReactNode[] = [
  "Você agenda uma conversa inicial, sem compromisso.",
  "A gente olha os seus números juntos, com calma.",
  <>
    Você sai com um <b className="text-gold-light">plano claro</b> do próximo passo.
  </>,
];

export default function CTAFinal({
  title = (
    <>
      Segurança não vem do crachá. <em className="accent-dark">Vem do plano.</em>
    </>
  ),
  passos = PASSOS_PADRAO,
  cta = "Agendar conversa",
}: {
  title?: React.ReactNode;
  passos?: React.ReactNode[];
  cta?: string;
}) {
  return (
    <section className="bg-detalhado px-6 py-24 text-cream md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col gap-6">
          <span className="eyebrow">Próximo passo</span>
          <h2 className="text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.03] text-cream">
            {title}
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          <ol className="flex flex-col gap-3">
            {passos.map((p, i) => (
              <li
                key={i}
                className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-bold text-navy">
                  {i + 1}
                </span>
                <span className="font-medium text-cream/90">{p}</span>
              </li>
            ))}
          </ol>

          <ArrowButton href={AGENDAR_HREF} tone="dark">
            {cta}
          </ArrowButton>

          <ProgressBar total={7} active={7} tone="gold" />
        </div>
      </div>
    </section>
  );
}
