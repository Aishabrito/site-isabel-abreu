import PostCard from "../components/PostCard";
import { Section, SectionHead, TextLink } from "../components/blocks";
import { listarPosts } from "../lib/blog";

export default function BlogPreview() {
  const posts = listarPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <Section>
      <div className="flex flex-col justify-between md:flex-row md:items-end">
        <SectionHead
          eyebrow="Do blog"
          title={
            <>
              Finanças <em className="accent">sem jargão.</em>
            </>
          }
        />
        <div className="mb-14">
          <TextLink href="/blog">Ver todos os textos →</TextLink>
        </div>
      </div>
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
