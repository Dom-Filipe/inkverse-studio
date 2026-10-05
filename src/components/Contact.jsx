import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { site } from "../config/site";

export default function Contact() {
  return (
    <section id="contato" className="py-16 px-6 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Contato</h2>

        <div className="flex flex-col items-center space-y-8">

          {/* Redes Sociais */}
          <div className="flex space-x-8 text-4xl">
            <motion.a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar no WhatsApp"
              whileHover={{ scale: 1.2 }}
              className="hover:text-green-400 transition"
            >
              <FaWhatsapp />
            </motion.a>

            <motion.a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram do estúdio"
              whileHover={{ scale: 1.2 }}
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </motion.a>
          </div>

          {/* Endereço */}
          <div className="text-center text-lg leading-relaxed max-w-md">
            <p>📍 {site.address.street}</p>
            <p>{site.address.city}</p>
          </div>

          {/* Call to Action */}
          <motion.a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-green-500 text-black font-bold py-3 px-6 rounded-full shadow-lg hover:bg-green-400 transition"
          >
            Fale Conosco Agora!
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
