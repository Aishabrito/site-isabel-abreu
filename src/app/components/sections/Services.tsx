export default function Services() {
  return (
    <section id="servicos" className="py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Pessoal */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-navy mb-6">Domine seu Dinheiro, Governe sua Vida</h2>
            <p className="text-slate-600 mb-6">Não é sobre privação, é sobre direção. Vamos construir um plano onde o dinheiro trabalha para você.</p>
            <ul className="space-y-3 text-navy font-medium">
              <li>✓ Diagnóstico de gastos</li>
              <li>✓ Plano de reserva financeira</li>
              <li>✓ Mentalidade de abundância</li>
            </ul>
          </div>
          <div className="flex-1 bg-navy/5 rounded-2xl h-64 flex items-center justify-center italic text-navy/40">
            [Imagem Consultoria Pessoal]
          </div>
        </div>

        {/* Empresarial */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-navy mb-6">Sua Empresa Deve Ser um Ativo</h2>
            <p className="text-slate-600 mb-6">Transformo empresas desorganizadas em máquinas de resultados através de processos e gestão sólida.</p>
            <ul className="space-y-3 text-navy font-medium">
              <li>✓ Estruturação de fluxo de caixa</li>
              <li>✓ Otimização de vendas</li>
              <li>✓ Liderança de equipes</li>
            </ul>
          </div>
          <div className="flex-1 bg-gold/10 rounded-2xl h-64 flex items-center justify-center italic text-gold/60">
            [Imagem Consultoria Empresarial]
          </div>
        </div>

      </div>
    </section>
  );
}
