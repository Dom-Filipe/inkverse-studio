export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-black text-white sticky top-0 z-50">
      <h1 className="text-2xl font-bold underline">Inkverse Studio</h1>
      <nav className="space-x-4">
        <a 
          href="#about" 
          className="text-white font-bold px-3 py-2 rounded shadow-md hover:text-red-700 hover:bg-white/10 transition"
        >
          Sobre
        </a>
        <a 
          href="#portfolio" 
          className="text-white font-bold px-3 py-2 rounded shadow-md hover:text-red-700 hover:bg-white/10 transition"
        >
          Portfólio
        </a>
        <a 
          href="#artists" 
          className="text-white font-bold px-3 py-2 rounded shadow-md hover:text-red-700 hover:bg-white/10 transition"
        >
          Artistas
        </a>
        <a 
          href="#contato" 
          className="text-white font-bold px-3 py-2 rounded shadow-md hover:text-red-700 hover:bg-white/10 transition"
        >
          Contato
        </a>
      </nav>
    </header>
  );
}

  