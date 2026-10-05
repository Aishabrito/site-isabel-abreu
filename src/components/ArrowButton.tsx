import Link from "next/link";

// Botão "Arraste →" da capa clean: texto em caixa-alta + círculo marinho com seta
export default function ArrowButton({
  href,
  children,
  tone = "light",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  const text = tone === "light" ? "text-navy" : "text-cream";
  const circle =
    tone === "light"
      ? "bg-navy text-cream group-hover:bg-terracotta"
      : "bg-gold text-navy group-hover:bg-gold-light";

  return (
    <Link href={href} className={`group inline-flex items-center gap-4 ${text}`}>
      <span className="text-xs font-bold uppercase tracking-[0.2em]">{children}</span>
      <span
        className={`flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-1 ${circle}`}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </span>
    </Link>
  );
}
