import { motion } from "framer-motion";

const artists = [
  { name: "Ana Silva", desc: "Especialista em aquarela.", image: "/images/ddd.jpg" },
  { name: "Carlos Tattoo", desc: "Old school e tradicional.", image: "/images/sss.jpg" },
  { name: "Julia Ink", desc: "Minimalismo e fineline.", image: "/images/fff.png" },
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <img
                src={artist.image}
                alt={`Tatuador: ${artist.name}`}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 shadow"
              />
              <h3 className="text-xl font-bold mb-2">{artist.name}</h3>
              <p className="text-gray-700">{artist.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
