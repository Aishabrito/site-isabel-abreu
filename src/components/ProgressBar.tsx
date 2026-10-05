// Barra de progresso dos carrosséis: 1 traço por slide
export default function ProgressBar({
  total,
  active,
  tone = "light",
}: {
  total: number;
  active: number;
  tone?: "light" | "dark" | "gold";
}) {
  const on = tone === "light" ? "bg-navy" : "bg-gold";
  const off = tone === "light" ? "bg-sand" : tone === "gold" ? "bg-gold" : "bg-white/10";

  return (
    <div className="flex gap-2.5" aria-hidden="true">
      {Array.from({ length: total }, (_, i) => (
        <span key={i} className={`h-1.5 flex-1 rounded-full ${i < active ? on : off}`} />
      ))}
    </div>
  );
}
