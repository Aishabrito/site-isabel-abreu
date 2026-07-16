import Link from "next/link";

export default function CTAFinal() {
  return (
    <section className="bg-[#c4a35a] py-24 px-8 md:px-[8vw] flex flex-col md:flex-row items-center justify-between gap-12">
      
      {/* TEXTO */}
      <div>
        <p className="text-navy/50 text-[0.56rem] tracking-[0.35em] uppercase mb-4">
          Próximo passo
        </p>
        <h2 className="font-serif text-3xl md:text-5xl font-normal text-navy leading-tight max-w-lg">
          Pronto para tomar decisões<br />
          <em className="italic">financeiras de elite?</em>
        </h2>
      </div>

      {/* BOTÃO E AVISO */}
      <div className="flex flex-col items-center md:items-end gap-4">
        <Link href="/agendar">
          <button className="font-sans text-[0.62rem] tracking-[0.24em] uppercase px-12 py-5 bg-navy text-gold font-bold transition-all duration-300 hover:bg-navyDeep hover:-translate-y-1 hover:shadow-2xl">
            Agendar Diagnóstico Gratuito
          </button>
        </Link>
        <p className="text-navy/50 text-[0.56rem] tracking-widest uppercase">
          Vagas limitadas por trimestre
        </p>
      </div>

    </section>
  );
}
