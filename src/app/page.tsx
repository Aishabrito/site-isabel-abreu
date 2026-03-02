import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import PainPoints from './components/sections/PainPoints';
import Services from './components/sections/Services';
import Footer from './components/layout/Footer'; 

export default function Home() {
 return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <PainPoints />
      <Services />
      
      {/* Seção de Palestras Simplificada */}
      <section className="bg-navy text-white py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Inspiração e Estratégia no seu Palco</h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-300 italic">Palestra sobre Liderança Humanizada, Gestão de Alta Performance e Finanças.</p>
        <button className="bg-gold text-navy font-bold py-3 px-10 rounded hover:bg-gold-light transition-all">Solicitar Orçamento</button>
      </section>

      <Footer />
    </main>
  );
}