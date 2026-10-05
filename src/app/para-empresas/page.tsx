import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { CheckList, FAQ, NumberedCards, PageHeader, Section, SectionHead, Steps, TextLink } from "../../components/blocks";
import CTAFinal from "../../sections/CTAFinal";
import { EMPRESAS_HREF } from "../../constants/links";

export const metadata: Metadata = {
  title: "Consultoria para Empresas | Isabel Abreu",
  description:
    "Organização financeira para empresas: fluxo de caixa, separação das contas, precificação e rotinas para crescer com segurança.",
};

const dores = [
  {
    tag: "Caixa",
    title: "Vende bem, mas o caixa vive no limite.",
    text: "O faturamento cresce e mesmo assim falta dinheiro para pagar fornecedores, impostos e salários em dia.",
  },
  {
    tag: "Contas",
    title: "Conta da empresa e conta pessoal misturadas.",
    text: "Fica impossível saber se o negócio dá lucro de verdade, e quanto você pode retirar sem prejudicar a empresa.",
  },
  {
    tag: "Preço",
    title: "Não sabe se o preço cobre os custos.",
    text: "Sem uma conta clara de custos e margem, é comum vender muito e lucrar pouco, ou nada.",
  },
];

const passos = [
  {
    title: "Raio-x",
    text: "Entendemos o modelo do negócio, as entradas, os custos e como o dinheiro circula hoje.",
  },
  {
    title: "Organização",
    text: "Separamos contas, definimos o pró-labore e estruturamos o fluxo de caixa.",
  },
  {
    title: "Indicadores",
    text: "Margem, ponto de equilíbrio e capital de giro, explicados em linguagem simples.",
  },
  {
    title: "Rotina",
    text: "Criamos uma rotina financeira que você ou sua equipe consegue manter sozinha.",
  },
];

const incluso = [
  "Separação entre finanças pessoais e da empresa",
  "Definição de pró-labore",
  "Fluxo de caixa simples e atualizado",
  "Revisão de precificação e margem",
  "Cálculo de ponto de equilíbrio",
  "Planejamento de capital de giro e reserva da empresa",
  "Indicadores mensais fáceis de acompanhar",
  "Educação financeira para a equipe, se fizer sentido",
];

const faq = [
  {
    q: "Para qual tamanho de empresa é a consultoria?",
    a: "Principalmente para pequenos e médios negócios que cresceram e sentem que a parte financeira não acompanhou.",
  },
  {
    q: "Substitui a contabilidade?",
    a: "Não. A contabilidade cuida das obrigações fiscais. A consultoria cuida da gestão: entender os números e decidir melhor.",
  },
  {
    q: "Preciso de um sistema específico?",
    a: "Não. A gente começa com o que você já usa e só sugere ferramentas novas se fizerem diferença de verdade.",
  },
];

export default function ParaEmpresasPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Consultoria para empresas · Pessoa jurídica"
          title={
            <>
              Faturar é bom. <em className="accent">Lucrar é melhor.</em>
            </>
          }
          ctaHref={EMPRESAS_HREF}
          intro="Organização financeira para o seu negócio crescer sem sufoco: caixa sob controle, preço certo e decisões tomadas com números na mesa."
        />

        <Section>
          <SectionHead
            eyebrow="Sinais de alerta"
            title={
              <>
                Crescer sem organização <em className="accent">custa caro.</em>
              </>
            }
          />
          <NumberedCards items={dores} />
        </Section>

        <Steps
          eyebrow="Como funciona"
          title={
            <>
              Quatro etapas para <em className="accent-dark">colocar a casa em ordem.</em>
            </>
          }
          steps={passos}
        />

        <Section>
          <SectionHead
            eyebrow="O que está incluso"
            title={
              <>
                Gestão financeira <em className="accent">sem complicação.</em>
              </>
            }
          />
          <CheckList items={incluso} />
          <div className="mt-12">
            <TextLink href="/palestras">Também levo educação financeira para a sua equipe →</TextLink>
          </div>
        </Section>

        <Section className="pt-0 md:pt-0">
          <SectionHead eyebrow="Dúvidas frequentes" title="Perguntas que sempre aparecem" />
          <FAQ items={faq} />
        </Section>

        <CTAFinal
          title={
            <>
              Sua empresa merece <em className="accent-dark">números claros.</em>
            </>
          }
          passos={[
            "Você agenda uma conversa sobre o seu negócio.",
            "Fazemos o raio-x financeiro da empresa.",
            <>
              Você recebe um <b className="text-gold-light">plano de organização</b> com prioridades.
            </>,
          ]}
          ctaHref={EMPRESAS_HREF}
        />
      </main>
      <Footer />
    </>
  );
}
