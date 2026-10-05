import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { PageHeader, Section, SectionHead } from "../../components/blocks";
import CTAFinal from "../../sections/CTAFinal";
import { MATERIAS, VEICULOS } from "../../content/midia";
import { formatarData } from "../../lib/datas";
import { EMAIL, IMPRENSA_HREF } from "../../constants/links";

export const metadata: Metadata = {
  title: "Na mídia | Isabel Abreu",
  description: "Entrevistas, reportagens e participações da economista Isabel Abreu na TV, rádio e imprensa.",
};

export default function NaMidiaPage() {
  const materias = [...MATERIAS].sort((a, b) => b.data.localeCompare(a.data));

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Na mídia · Entrevistas e reportagens"
          title={
            <>
              Finanças explicadas <em className="accent">em rede nacional.</em>
            </>
          }
          intro="Entrevistas e participações em TV, rádio e imprensa, levando educação financeira de um jeito simples para cada vez mais gente."
          cta={null}
          aside={
            <ul className="flex flex-wrap gap-3 lg:justify-end">
              {VEICULOS.map((v) => (
                <li
                  key={v}
                  className="rounded-full border border-line bg-surface px-5 py-2 font-serif text-xl font-medium text-navy"
                >
                  {v}
                </li>
              ))}
            </ul>
          }
        />

        <Section className="pt-0 md:pt-0">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {materias.map((m) => (
              <li key={`${m.veiculo}-${m.titulo}`}>
                <CardMateria materia={m} />
              </li>
            ))}
          </ul>
        </Section>

        <Section className="border-t border-line bg-surface">
          <div className="grid items-end gap-10 lg:grid-cols-2">
            <SectionHead
              eyebrow="Imprensa"
              title={
                <>
                  Precisa de uma fonte <em className="accent">sobre finanças?</em>
                </>
              }
              intro="Disponível para entrevistas sobre finanças pessoais, endividamento, investimentos, aposentadoria e comportamento financeiro."
            />
            <div className="mb-14 flex flex-col items-start gap-4 lg:items-end lg:justify-self-end">
              <Link
                href={IMPRENSA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-navy px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-cream transition-colors hover:bg-terracotta"
              >
                Contato para imprensa
              </Link>
              <a href={`mailto:${EMAIL}`} className="text-sm font-semibold text-navy hover:text-terracotta">
                ou {EMAIL}
              </a>
            </div>
          </div>
        </Section>

        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}

// Card no estilo do post "Na mídia" do guia: foto com cantos 40, selo "Foi ao ar" marinho com ponto vermelho
function CardMateria({ materia: m }: { materia: (typeof MATERIAS)[number] }) {
  const conteudo = (
    <article className="group flex h-full flex-col gap-5 rounded-[1.75rem] border border-line bg-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(15,30,51,0.35)]">
      <div className="bg-detalhado relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[1.25rem]">
        {m.imagem ? (
          <Image src={m.imagem} alt="" fill sizes="(min-width: 1024px) 30vw, 90vw" className="object-cover" />
        ) : (
          <span className="font-serif text-5xl font-medium text-cream/90">{m.veiculo}</span>
        )}
        <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-navy px-3 py-1 text-[0.7rem] font-semibold text-cream">
          <span className="h-2 w-2 rounded-full bg-live" />
          Foi ao ar
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 px-3 pb-3">
        <div className="flex items-center justify-between gap-3 text-xs">
          <span className="font-bold uppercase tracking-[0.2em] text-terracotta">
            {m.veiculo} · {m.tipo}
          </span>
          <time dateTime={m.data} className="text-warm-gray">
            {formatarData(m.data, "mes")}
          </time>
        </div>
        <h2 className="text-2xl leading-snug">{m.titulo}</h2>
        {m.link && (
          <span className="mt-auto pt-2 text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-8 group-hover:text-terracotta">
            {m.tipo === "Jornal" || m.tipo === "Portal" ? "Ler matéria" : "Assistir"} →
          </span>
        )}
      </div>
    </article>
  );

  return m.link ? (
    <Link href={m.link} target="_blank" rel="noopener noreferrer" className="block h-full">
      {conteudo}
    </Link>
  ) : (
    conteudo
  );
}
