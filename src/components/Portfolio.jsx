import { Link } from 'react-router-dom';

const styles = [
  { name: "Old School", image: "/images/oldschool.png", path: "/oldschool" },
  { name: "Minimalista", image: "/images/minimalista.png", path: "/minimalista" },
  { name: "Realismo", image: "/images/realismo.png", path: "/realismo" },
  { name: "Aquarela", image: "/images/aquarela.png", path: "/aquarela" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="p-10 bg-black text-white">
      <h3 className="text-3xl font-bold mb-6 text-center">Portfólio</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
        {styles.map((style) => (
          <Link
            key={style.name}
            to={style.path}
            className="block relative group w-64 h-80"
            aria-label={`Estilo ${style.name}`}
          >
            <div className="w-full h-full bg-gray-800 overflow-hidden rounded-lg shadow-lg relative">
              <img
                src={style.image}
                alt={style.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <p className="text-white text-xl font-bold text-center">{style.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}


