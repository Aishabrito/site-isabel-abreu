import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PostCard from "../../components/PostCard";
import TituloPost from "../../components/TituloPost";
import { PageHeader, Section } from "../../components/blocks";
import CTAFinal from "../../sections/CTAFinal";
import { listarPosts } from "../../lib/blog";
import { formatarData } from "../../lib/datas";

export const metadata: Metadata = {
  title: "Blog | Isabel Abreu",
  description: "Artigos sobre finanças pessoais, investimentos, aposentadoria e organização financeira, sem jargão.",
};

export default function BlogPage() {
  const [destaque, ...outros] = listarPosts();

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Blog · Finanças sem jargão"
          title={
            <>
              Ideias para decidir <em className="accent">com mais calma.</em>
            </>
          }
          intro="Textos curtos e práticos sobre orçamento, investimentos, aposentadoria e o comportamento por trás do dinheiro."
          cta={null}
        />

        <Section className="pt-0 md:pt-0">
          {!destaque && <p className="text-lg text-warm-gray">Em breve, os primeiros textos.</p>}

          {destaque && (
            <Link
              href={`/blog/${destaque.slug}`}
              className="bg-detalhado group relative mb-10 block overflow-hidden rounded-[2rem] p-8 text-cream md:p-14"
            >
              <div aria-hidden="true" className="bg-grade absolute inset-0" />
              <div className="relative flex max-w-3xl flex-col gap-6">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="rounded-full bg-gold px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-navy">
                    Mais recente
                  </span>
                  <span className="text-sm text-cream/60">
                    {destaque.categoria} · {destaque.minutos} min de leitura
                  </span>
                </div>
                <h2 className="text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] text-cream">
                  <TituloPost texto={destaque.titulo} dark />
                </h2>
                <p className="text-lg leading-relaxed text-cream/70">{destaque.resumo}</p>
                <div className="flex items-center justify-between border-t border-white/10 pt-6">
                  <time dateTime={destaque.data} className="text-sm text-cream/60">
                    {formatarData(destaque.data)}
                  </time>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold transition-transform group-hover:translate-x-1">
                    Ler texto →
                  </span>
                </div>
              </div>
            </Link>
          )}

          {outros.length > 0 && (
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {outros.map((post) => (
                <li key={post.slug}>
                  <PostCard post={post} />
                </li>
              ))}
            </ul>
          )}
        </Section>

        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
