import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      className="hero relative flex items-center justify-center px-4 py-16 text-white bg-black"
      style={{
        backgroundImage: "url('/assets/111.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "70vh",
        width: "100%",
      }}
    >
      {/* Camada escura para melhorar contraste */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Conteúdo com animação */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-3xl"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Bem-vindo ao Inkverse Studio
        </h1>
        <p className="text-lg md:text-2xl">
          Transformando ideias em arte. Tatuagem, design e criatividade para você se expressar.
        </p>
      </motion.div>
    </section>
  );
}

export default Hero;
