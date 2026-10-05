import Link from "next/link";
import TituloPost from "./TituloPost";
import { formatarData } from "../lib/datas";
import type { Post } from "../lib/blog";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col gap-5 rounded-[1.75rem] border border-line bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(15,30,51,0.35)]"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-chip px-3 py-1 text-xs font-semibold text-navy">{post.categoria}</span>
        <span className="text-xs text-warm-gray">{post.minutos} min de leitura</span>
      </div>
      <h3 className="text-2xl leading-snug transition-colors group-hover:text-terracotta">
        <TituloPost texto={post.titulo} />
      </h3>
      <p className="flex-1 leading-relaxed text-warm-gray">{post.resumo}</p>
      <time dateTime={post.data} className="border-t border-line pt-4 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
        {formatarData(post.data)}
      </time>
    </Link>
  );
}
