import { Link } from 'react-router-dom';

const links = [
  { label: 'Sobre', hash: 'about' },
  { label: 'Portfólio', hash: 'portfolio' },
  { label: 'Artistas', hash: 'artists' },
  { label: 'Contato', hash: 'contato' },
];

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full flex flex-col md:flex-row justify-between items-center p-6 text-white z-50">
      <Link to="/" className="text-2xl font-bold underline mb-4 md:mb-0">
        Inkverse Studio
      </Link>
      <nav aria-label="Menu principal" className="flex flex-wrap justify-center gap-2 md:gap-4">
        {links.map((link) => (
          <Link
            key={link.hash}
            to={`/#${link.hash}`}
            className="text-white font-bold px-3 py-2 rounded shadow-md hover:text-red-700 hover:bg-white/10 transition focus:outline-red-500"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
