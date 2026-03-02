import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-white pt-16 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Conteúdo de Texto */}
        <div className="flex-1 space-y-8 z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-navy leading-tight">
            Transforme seus números em <span className="italic text-gold">liberdade</span> e sua gestão em lucro real.
          </h1>
          <p className="text-lg text-slate-600 max-w-lg">
            Consultoria estratégica para mulheres que buscam clareza financeira e empresas que precisam de processos sólidos para crescer.
          </p>
          <button className="bg-navy text-white px-8 py-4 rounded font-bold text-lg hover:bg-navy/90 transition-all shadow-xl">
            Quero começar minha transformação
          </button>
        </div>

        {/* Espaço para a Foto */}
        <div className="flex-1 relative">
          <div className="relative w-full aspect-square md:aspect-[4/5] bg-slate-200 rounded-2xl overflow-hidden border-2 border-gold/30">
             {/* Quando tiver a foto, você usará a tag <Image /> do Next.js aqui */}
             <div className="absolute inset-0 flex items-center justify-center text-navy/40 italic">
               Foto da Isabel (Autoridade e Sorriso)
             </div>
          </div>
          {/* Detalhe decorativo */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/10 rounded-full blur-3xl -z-10"></div>
        </div>

      </div>
    </section>
  );
}