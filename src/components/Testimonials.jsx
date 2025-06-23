import { motion } from "framer-motion";

export default function Testimonials() {
  const imageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
      },
    }),
  };

  return (
    <section id="sobre-estudio" className="p-10 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Sobre o Estúdio</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Galeria de fotos */}
          <div className="grid grid-cols-2 gap-4">
            {["studio1.jpg", "studio2.jpg", "studio3.jpg", "studio4.jpg"].map((img, index) => (
              <motion.img
                key={img}
                src={`/images/${img}`}
                alt={`Foto do Estúdio ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg shadow-lg"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true }}
              />
            ))}
          </div>

          {/* Texto sobre o estúdio */}
          <div className="flex flex-col justify-center">
            <p className="text-lg mb-4 leading-relaxed">
              O <strong>Inkverse Studio</strong> é um espaço criativo dedicado à arte da tatuagem. Nosso ambiente é
              <span className="text-red-500 font-semibold"> acolhedor, seguro e profissional</span>.
            </p>
            <p className="text-lg leading-relaxed">
              Contamos com uma equipe de artistas <span className="font-semibold">especializados</span> em diversos estilos,
              sempre prontos para transformar sua ideia em uma obra de arte única na pele.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
