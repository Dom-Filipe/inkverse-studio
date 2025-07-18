export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full flex flex-col md:flex-row justify-between items-center p-6 text-white z-50">
      <h1 className="text-2xl font-bold underline mb-4 md:mb-0">Inkverse Studio</h1>
      <nav aria-label="Menu principal" className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
        <a 
          href="#about"
          className="text-white font-bold px-3 py-2 rounded shadow-md hover:text-red-700 hover:bg-white/10 transition focus:outline-red-500"
        >
          Sobre
        </a>
        <a 
          href="#portfolio"
          className="text-white font-bold px-3 py-2 rounded shadow-md hover:text-red-700 hover:bg-white/10 transition focus:outline-red-500"
        >
          Portfólio
        </a>
        <a 
          href="#artists"
          className="text-white font-bold px-3 py-2 rounded shadow-md hover:text-red-700 hover:bg-white/10 transition focus:outline-red-500"
        >
          Artistas
        </a>
        <a 
          href="#contato"
          className="text-white font-bold px-3 py-2 rounded shadow-md hover:text-red-700 hover:bg-white/10 transition focus:outline-red-500"
        >
          Contato
        </a>
      </nav>
    </header>
  );
}
