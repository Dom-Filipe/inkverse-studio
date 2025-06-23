import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const styles = [
  { name: "Old School", image: "/images/oldschool.png", path: "/oldschool" },
  { name: "Minimalista", image: "/images/minimalista.png", path: "/minimalista" },
  { name: "Realismo", image: "/images/realismo.png", path: "/realismo" },
  { name: "Aquarela", image: "/images/aquarela.png", path: "/aquarela" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="p-10 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Explore Nossos Estilos de Tatuagem
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
          {styles.map((style) => (
            <motion.div
              key={style.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-64 h-80"
            >
              <Link
                to={style.path}
                className="block relative group w-full h-full"
                aria-label={`Veja o portfólio do estilo ${style.name}`}
              >
                <div className="w-full h-full bg-gray-800 overflow-hidden rounded-lg shadow-lg relative">
                  <img
                    src={style.image}
                    alt={`Exemplo de tatuagem estilo ${style.name}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <p className="text-white text-xl font-bold text-center">{style.name}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}



