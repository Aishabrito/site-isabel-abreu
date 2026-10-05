import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import PostCard from "../../../components/PostCard";
import TituloPost, { tituloSemMarcas } from "../../../components/TituloPost";
import { Section, SectionHead } from "../../../components/blocks";
import CTAFinal from "../../../sections/CTAFinal";
import { INSTAGRAM } from "../../../constants/links";
import { buscarPost, listarPosts } from "../../../lib/blog";
import { formatarData } from "../../../lib/datas";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return listarPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = buscarPost((await params).slug);
  if (!post) return {};
  return {
    title: `${tituloSemMarcas(post.titulo)} | Isabel Abreu`,
    description: post.resumo,
  };
}

export default async function PostPage({ params }: Props) {
  const post = buscarPost((await params).slug);
  if (!post) notFound();

  const outros = listarPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        <article className="px-6 pb-20 pt-36 md:px-10 md:pt-44">
          <header className="mx-auto flex max-w-3xl flex-col">
            <Link href="/blog" className="eyebrow mb-8 w-fit hover:text-terracotta">
              ← Blog · {post.categoria}
            </Link>
            <h1 className="text-[clamp(2.5rem,5.5vw,4.25rem)] leading-[1.04]">
              <TituloPost texto={post.titulo} />
            </h1>
            <span className="my-10 block h-1 w-16 rounded-full bg-gold" />
            <p className="text-xl leading-relaxed text-warm-gray">{post.resumo}</p>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-line py-5 text-sm text-warm-gray">
              <span className="font-semibold text-navy">Isabel Abreu · Economista</span>
              <time dateTime={post.data}>{formatarData(post.data)}</time>
              <span>{post.minutos} min de leitura</span>
            </div>
          </header>

          <div
            className="prose-isa mx-auto mt-12 max-w-3xl"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <footer className="mx-auto mt-16 flex max-w-3xl flex-col gap-2 rounded-[1.75rem] border border-line bg-surface p-8">
            <span className="font-serif text-2xl font-medium text-navy">
              Gostou? <em className="accent">Tem mais no Instagram.</em>
            </span>
            <Link
              href={INSTAGRAM.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit font-semibold text-gold hover:text-terracotta"
            >
              {INSTAGRAM.handle} →
            </Link>
          </footer>
        </article>

        {outros.length > 0 && (
          <Section className="border-t border-line">
            <SectionHead eyebrow="Leia também" title="Outros textos" />
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {outros.map((p) => (
                <li key={p.slug}>
                  <PostCard post={p} />
                </li>
              ))}
            </ul>
          </Section>
        )}

        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
