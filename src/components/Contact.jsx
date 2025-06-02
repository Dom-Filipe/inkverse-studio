import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contato" className="py-12 px-4 bg-black text-white">
      <h3 className="text-3xl font-bold mb-8 text-center">Contato</h3>

      <div className="flex flex-col items-center space-y-6">
        
        {/* Ícones de redes sociais */}
        <div className="flex space-x-6 text-3xl">
          <a href="https://wa.me/SEUNUMERO" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
            <FaWhatsapp />
          </a>

          <a href="https://instagram.com/SEUINSTAGRAM" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <FaInstagram />
          </a>
        </div>

        {/* Endereço */}
        <div className="text-center text-lg leading-relaxed">
          <p>Localizado na Rua Hebert Silva, n° 29</p>
          <p>Praia Grande - SP</p>
        </div>
      </div>
    </section>
  );
}