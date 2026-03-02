import { Target, TrendingDown, Brain } from 'lucide-react';

const pains = [
  {
    title: "Pessoal",
    description: "Trabalha muito, mas o dinheiro some? O caos financeiro tira a sua paz.",
    icon: <TrendingDown className="text-gold" size={32} />
  },
  {
    title: "Empresarial",
    description: "Vende bem, mas o caixa está sempre no limite? Falta de processos mata seu lucro.",
    icon: <Target className="text-gold" size={32} />
  },
  {
    title: "Mentalidade",
    description: "Presa a crenças e desorganização que te impedem de prosperar.",
    icon: <Brain className="text-gold" size={32} />
  }
];

export default function PainPoints() {
  return (
    <section className="py-20 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
          Onde você está travada hoje?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pains.map((pain, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-gold hover:shadow-md transition-shadow">
              <div className="mb-4">{pain.icon}</div>
              <h3 className="text-xl font-bold text-navy mb-3">{pain.title}</h3>
              <p className="text-slate-600 leading-relaxed">{pain.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}