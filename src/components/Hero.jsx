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
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {/* Camada escura/gradiente para melhor contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent"></div>

      {/* Conteúdo com animação ao entrar na viewport */}
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

export default Hero;
