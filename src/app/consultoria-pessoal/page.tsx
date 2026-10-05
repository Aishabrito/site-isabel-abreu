import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { CheckList, FAQ, NumberedCards, PageHeader, Section, SectionHead, Steps } from "../../components/blocks";
import CTAFinal from "../../sections/CTAFinal";
import Numbers from "../../sections/Numbers";

export const metadata: Metadata = {
  title: "Consultoria Pessoal | Isabel Abreu",
  description:
    "Planejamento financeiro para pessoa física: organize o orçamento, monte sua reserva e invista com um plano feito para a sua vida.",
};

const dores = [
  {
    tag: "Orçamento",
    title: "O salário entra e some.",
    text: "Você não sabe exatamente para onde vai o dinheiro, e o fim do mês sempre chega antes do que deveria.",
  },
  {
    tag: "Reserva",
    title: "Qualquer imprevisto vira dívida.",
    text: "Um conserto no carro ou uma consulta médica já bagunça o cartão pelos próximos meses.",
  },
  {
    tag: "Investimentos",
    title: "Sabe que deveria investir, mas não sabe em quê.",
    text: "Poupança, Tesouro, CDB, ações. Muita informação e pouca clareza sobre o que faz sentido para você.",
  },
];

const passos = [
  {
    title: "Conversa inicial",
    text: "A gente se conhece, você conta o que te incomoda hoje e onde quer chegar.",
  },
  {
    title: "Diagnóstico",
    text: "Olhamos juntos entradas, gastos, dívidas e patrimônio. Sem julgamento, só os números.",
  },
  {
    title: "Plano",
    text: "Você recebe um plano com metas, prazos e quanto separar por mês para cada objetivo.",
  },
  {
    title: "Acompanhamento",
    text: "Encontros periódicos para ajustar a rota quando a vida muda, porque ela sempre muda.",
  },
];

const incluso = [
  "Mapa completo das suas finanças",
  "Orçamento que cabe na sua rotina",
  "Plano para sair das dívidas, se houver",
  "Construção da reserva de emergência",
  "Estratégia de investimentos alinhada aos seus objetivos",
  "Planejamento para aposentadoria e independência financeira",
  "Organização de metas: casa, viagem, filhos, carreira",
  "Acompanhamento e ajustes ao longo do tempo",
];

const faq = [
  {
    q: "Preciso ganhar muito para fazer consultoria?",
    a: "Não. O planejamento começa a partir da sua realidade. Quanto mais cedo você organiza, menos esforço é preciso depois.",
  },
  {
    q: "Você vende produtos financeiros?",
    a: "O foco é o seu plano. As recomendações são pensadas para os seus objetivos, e você entende o porquê de cada uma.",
  },
  {
    q: "Os atendimentos são online?",
    a: "Sim, os encontros podem ser online, o que permite atender pessoas de qualquer cidade.",
  },
  {
    q: "E se eu estiver endividada ou endividado?",
    a: "Esse é um ótimo momento para começar. O primeiro passo do plano é justamente organizar e negociar o que está pesando.",
  },
];

export default function ConsultoriaPessoalPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Consultoria pessoal · Pessoa física"
          title={
            <>
              Seu dinheiro com <em className="accent">clareza e plano.</em>
            </>
          }
          intro="Planejamento financeiro feito para a sua vida, não para uma planilha genérica. A gente organiza o presente para você decidir o futuro com calma."
        />

        <Section>
          <SectionHead
            eyebrow="Você se reconhece?"
            title={
              <>
                Não é falta de esforço. <em className="accent">É falta de plano.</em>
              </>
            }
          />
          <NumberedCards items={dores} />
        </Section>

        <Steps
          eyebrow="Como funciona"
          title={
            <>
              Do diagnóstico ao <em className="accent-dark">acompanhamento.</em>
            </>
          }
          steps={passos}
        />

        <Section>
          <SectionHead
            eyebrow="O que está incluso"
            title={
              <>
                Tudo o que você precisa para <em className="accent">sair do improviso.</em>
              </>
            }
          />
          <CheckList items={incluso} />
        </Section>

        <Numbers />

        <Section>
          <SectionHead eyebrow="Dúvidas frequentes" title="Perguntas que sempre aparecem" />
          <FAQ items={faq} />
        </Section>

        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
