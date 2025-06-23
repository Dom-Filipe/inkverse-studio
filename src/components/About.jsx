import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="p-10 bg-gray-100 text-black">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Sobre o Inkverse Studio</h2>

        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-center">
          No <strong>Inkverse Studio</strong>, oferecemos tatuagens de todos os estilos: 
          <span className="font-semibold"> Old School, Minimalista, Realismo, Aquarela</span> e muito mais.
          Nossa missão é eternizar a sua arte na pele com <span className="font-semibold">qualidade</span> e <span className="font-semibold">segurança</span>.
        </p>
      </motion.div>
    </section>
  );
}

  