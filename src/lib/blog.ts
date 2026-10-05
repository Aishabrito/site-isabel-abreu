import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

// Cada post é um arquivo .md na pasta content/blog.
// O nome do arquivo vira o endereço: content/blog/meu-post.md → /blog/meu-post

const PASTA = path.join(process.cwd(), "content", "blog");

export type Post = {
  slug: string;
  titulo: string;
  resumo: string;
  categoria: string;
  data: string;
  minutos: number;
  html: string;
};

// Lê o bloco entre --- no topo do arquivo (chave: valor por linha)
function separarCabecalho(arquivo: string) {
  const match = arquivo.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { campos: {} as Record<string, string>, corpo: arquivo };

  const campos: Record<string, string> = {};
  for (const linha of match[1].split(/\r?\n/)) {
    const i = linha.indexOf(":");
    if (i === -1) continue;
    const valor = linha.slice(i + 1).trim().replace(/^["']|["']$/g, "");
    campos[linha.slice(0, i).trim()] = valor;
  }
  return { campos, corpo: match[2] };
}

function lerPost(arquivo: string): Post | null {
  const slug = arquivo.replace(/\.md$/, "");
  const { campos, corpo } = separarCabecalho(fs.readFileSync(path.join(PASTA, arquivo), "utf8"));

  // rascunho: sim → o post não aparece no site
  if (campos.rascunho === "sim") return null;

  const palavras = corpo.split(/\s+/).filter(Boolean).length;
  return {
    slug,
    titulo: campos.titulo ?? slug,
    resumo: campos.resumo ?? "",
    categoria: campos.categoria ?? "Finanças",
    data: campos.data ?? "1970-01-01",
    minutos: Math.max(1, Math.round(palavras / 200)),
    html: marked.parse(corpo, { async: false }),
  };
}

export function listarPosts(): Post[] {
  if (!fs.existsSync(PASTA)) return [];
  return fs
    .readdirSync(PASTA)
    .filter((f) => f.endsWith(".md"))
    .map(lerPost)
    .filter((p): p is Post => p !== null)
    .sort((a, b) => b.data.localeCompare(a.data));
}

export function buscarPost(slug: string) {
  return listarPosts().find((p) => p.slug === slug) ?? null;
}
