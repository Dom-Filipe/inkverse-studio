import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const highlights = ["Artistas especializados", "Material 100% descartável", "Projetos autorais"];

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center px-4 pt-52 pb-16 md:pt-24 min-h-screen overflow-hidden text-white">
      {/* Vídeo de fundo */}
      <video
        src="/assets/001.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-top md:object-center"
      />

      {/* Camada escura para contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

      {/* Conteúdo com animação */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-3xl"
      >
        <p className="uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs sm:text-sm md:text-base text-red-500 font-semibold mb-4">
          Estúdio de tatuagem em Praia Grande
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Arte que transcende a pele
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Do fineline ao realismo, criamos tatuagens únicas a partir da sua ideia —
          com técnica, segurança e muito cuidado em cada traço.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/#contato"
            className="bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-8 rounded-full shadow-lg transition"
          >
            Agende sua sessão
          </Link>
          <Link
            to="/#portfolio"
            className="border-2 border-white/80 hover:bg-white hover:text-black font-bold py-4 px-8 rounded-full transition"
          >
            Ver portfólio
          </Link>
        </div>

        <ul className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm md:text-base text-gray-300">
          {highlights.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Indicador de rolagem */}
      <Link
        to="/#about"
        aria-label="Rolar para a próxima seção"
        className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-2xl text-white/70 hover:text-white animate-bounce"
      >
        <FaChevronDown />
      </Link>
    </section>
  );
}
