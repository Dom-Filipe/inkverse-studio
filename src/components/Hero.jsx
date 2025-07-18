import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center px-4 py-16 pt-24 min-h-screen overflow-hidden text-red">
      <img
        src="/assets/555.png"
        alt="Inkverse Studio Background"
        className="absolute inset-0 w-full h-full object-cover object-top md:object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-3xl"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          
        </h1>
        <p className="text-lg md:text-2xl">
          
        </p>
      </motion.div>
    </section>
  );
}
