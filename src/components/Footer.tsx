export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12 px-6 border-t border-gold/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div>
          <span className="text-xl font-bold block mb-2">ISABEL ABREU</span>
          <p className="text-gold italic font-light text-sm">
  {"\"A organização é o terreno onde a prosperidade floresce.\""}
</p>s
        </div>
        
        <div className="flex gap-8 text-sm text-gray-400">
          <a href="#" className="hover:text-gold transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-gold transition-colors">Instagram</a>
          <a href="#" className="hover:text-gold transition-colors">WhatsApp</a>
        </div>
        
        <p className="text-xs text-gray-500">© 2026 Isabel Abreu. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}