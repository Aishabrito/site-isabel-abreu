export default function TrustBand() {
  const items = [
    "Gestão Patrimonial", 
    "Planejamento Tributário", 
    "Inteligência Financeira", 
    "Alta Performance", 
    "Liderança Estratégica"
  ];

  return (
    <div className="bg-navy border-y border-gold/10 py-6 px-8 flex items-center justify-center flex-wrap gap-6 md:gap-12">
      {items.map((item, index) => (
        <span 
          key={item} 
          className={`flex items-center gap-4 text-xs tracking-[0.2em] uppercase ${index % 3 === 1 ? 'text-sage' : 'text-white/20'}`}
        >
          {/* Bolinha divisória que some no celular e aparece no PC (hidden md:block) */}
          {index > 0 && <span className="w-1 h-1 rounded-full bg-gold/20 hidden md:block" />}
          {item}
        </span>
      ))}
    </div>
  );
}