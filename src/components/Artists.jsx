import { motion } from "framer-motion";

// `position` ajusta o enquadramento da foto no card (CSS object-position).
const artists = [
  { name: "Julia Ink", desc: "Minimalismo e fineline.", image: "/images/artista-julia.webp", position: "50% 30%" },
  { name: "Rafael Costa", desc: "Especialista em aquarela.", image: "/images/artista-rafael.webp", position: "50% 45%" },
  { name: "Carlos Tattoo", desc: "Old school e tradicional.", image: "/images/artista-carlos.webp", position: "30% 60%" },
];

export default function Artists() {
  return (
    <section id="artists" className="p-10 bg-gray-100 text-black">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Nossos Artistas</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={artist.image}
                alt={`Tatuador: ${artist.name}`}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover"
                style={{ objectPosition: artist.position }}
              />
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{artist.name}</h3>
                <p className="text-gray-700">{artist.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
