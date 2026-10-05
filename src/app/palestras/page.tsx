import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FAQ, NumberedCards, PageHeader, Section, SectionHead, Steps } from "../../components/blocks";
import CTAFinal from "../../sections/CTAFinal";
import { PALESTRAS_HREF } from "../../constants/links";

export const metadata: Metadata = {
  title: "Palestras | Isabel Abreu",
  description:
    "Palestras de educação financeira para empresas, eventos e instituições, com linguagem leve e números que todo mundo entende.",
};

const temas = [
  {
    tag: "Equipes",
    title: "Dinheiro sem tabu no trabalho",
    text: "Como o estresse financeiro afeta a produtividade e quais hábitos simples ajudam a equipe a sair do aperto.",
  },
  {
    tag: "Aposentadoria",
    title: "Emprego fixo não é plano de aposentadoria",
    text: "Por que a carteira assinada não garante o futuro e como começar a construir patrimônio com o salário de hoje.",
  },
  {
    tag: "Comportamento",
    title: "Bets, crédito fácil e o hábito do “só dessa vez”",
    text: "Uma conversa sem julgamento sobre apostas, parcelamentos e o efeito dos pequenos gastos no orçamento.",
  },
  {
    tag: "Investimentos",
    title: "Da reserva de emergência ao primeiro investimento",
    text: "O caminho prático para organizar o orçamento, montar a reserva e entender as opções de investimento.",
  },
];

const formatos = [
  {
    tag: "Formato",
    title: "Presencial ou online",
    text: "Em auditórios, salas de treinamento, eventos ou transmissões ao vivo.",
  },
  {
    tag: "Duração",
    title: "Adaptada ao seu evento",
    text: "De falas curtas em eventos a encontros mais longos, com espaço para perguntas.",
  },
  {
    tag: "Conteúdo",
    title: "Feito para o seu público",
    text: "O tema é ajustado à realidade das pessoas que vão assistir, com exemplos e números reais.",
  },
];

const passos = [
  { title: "Contato", text: "Você conta sobre o evento, o público e a data." },
  { title: "Alinhamento", text: "Definimos juntos o tema, o formato e o tempo de fala." },
  { title: "Proposta", text: "Você recebe a proposta com o conteúdo e as condições." },
  { title: "Palestra", text: "No dia, uma conversa leve, prática e cheia de exemplos." },
];

const faq = [
  {
    q: "Para que tipo de público são as palestras?",
    a: "Equipes de empresas, eventos corporativos, escolas, universidades e instituições. A linguagem é ajustada para cada público.",
  },
  {
    q: "É possível criar um tema sob medida?",
    a: "Sim. Os temas acima são os mais pedidos, mas o conteúdo pode ser montado a partir da necessidade do seu evento.",
  },
  {
    q: "Com quanta antecedência devo entrar em contato?",
    a: "Quanto antes, melhor para garantir a data. Entre em contato assim que tiver o evento definido.",
  },
];

export default function PalestrasPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Palestras · Empresas e eventos"
          title={
            <>
              Educação financeira <em className="accent">que todo mundo entende.</em>
            </>
          }
          intro="Palestras leves e diretas, com números concretos e sem jargão, para equipes, eventos e instituições que querem falar de dinheiro sem tabu."
          cta="Solicitar proposta"
          ctaHref={PALESTRAS_HREF}
        />

        <Section>
          <SectionHead
            eyebrow="Temas"
            title={
              <>
                Os assuntos <em className="accent">mais pedidos.</em>
              </>
            }
          />
          <NumberedCards items={temas} cols={2} />
        </Section>

        <section className="bg-storytelling px-6 py-24 text-cream md:px-10 md:py-32">
          <figure className="mx-auto flex max-w-4xl flex-col gap-10">
            <span aria-hidden="true" className="font-serif text-[9rem] leading-[0.5] text-gold">
              “
            </span>
            <blockquote className="text-[clamp(1.75rem,3.8vw,3rem)] font-semibold leading-[1.2]">
              <span className="text-cream/45">Falar de dinheiro não precisa ser chato. </span>
              <span className="text-cream">
                Precisa ser <em className="accent-dark">claro.</em>
              </span>
            </blockquote>
            <figcaption className="border-t border-white/10 pt-6 text-sm text-cream/50">
              Isabel Abreu · Economista
            </figcaption>
          </figure>
        </section>

        <Section>
          <SectionHead
            eyebrow="Formatos"
            title={
              <>
                Do jeito que o seu <em className="accent">evento precisa.</em>
              </>
            }
          />
          <NumberedCards items={formatos} />
        </Section>

        <Steps
          eyebrow="Como contratar"
          title={
            <>
              Do primeiro contato <em className="accent-dark">ao palco.</em>
            </>
          }
          steps={passos}
        />

        <Section>
          <SectionHead eyebrow="Dúvidas frequentes" title="Perguntas que sempre aparecem" />
          <FAQ items={faq} />
        </Section>

        <CTAFinal
          title={
            <>
              Leve essa conversa <em className="accent-dark">para o seu evento.</em>
            </>
          }
          passos={[
            "Você envia os detalhes do evento e do público.",
            "Alinhamos tema, formato e duração.",
            <>
              Você recebe uma <b className="text-gold-light">proposta sob medida.</b>
            </>,
          ]}
          cta="Solicitar proposta"
          ctaHref={PALESTRAS_HREF}
        />
      </main>
      <Footer />
    </>
  );
}
