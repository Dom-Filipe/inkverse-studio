import { Link } from 'react-router-dom';
import { FaInstagram, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { site } from '../config/site';
import { styles } from '../data/styles';

export default function Footer() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${site.address.street}, ${site.address.city}`
  )}`;

  return (
    <footer className="relative overflow-hidden text-white">
      {/* Vídeo de fundo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/VideoFooter.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />

      {/* Overlay escurecido */}
      <div className="absolute inset-0 bg-black/85" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para a sua próxima tattoo?</h2>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-500 transition"
          >
            <FaWhatsapp className="text-xl" /> Agende sua sessão
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold mb-3">{site.name}</h3>
            <p className="text-gray-300">
              Tatuagens autorais em todos os estilos, com qualidade e biossegurança.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Estilos</h3>
            <ul className="space-y-2 text-gray-300">
              {styles.map((style) => (
                <li key={style.slug}>
                  <Link to={`/${style.slug}`} className="hover:text-red-500 transition">
                    {style.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Visite-nos</h3>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-2 text-gray-300 hover:text-red-500 transition"
            >
              <FaMapMarkerAlt className="mt-1 shrink-0" />
              <span>
                {site.address.street}
                <br />
                {site.address.city}
              </span>
            </a>
            {site.hours.length > 0 && (
              <ul className="mt-3 space-y-1 text-gray-300">
                {site.hours.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            )}
            <div className="flex justify-center md:justify-start gap-5 text-2xl mt-4">
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-green-400 transition"
              >
                <FaWhatsapp />
              </a>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
