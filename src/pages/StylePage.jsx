import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowLeft, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { styles } from '../data/styles';
import { site } from '../config/site';
import NotFound from './NotFound';

export default function StylePage() {
  const { slug } = useParams();
  const style = styles.find((s) => s.slug === slug);
  const [openIndex, setOpenIndex] = useState(null);

  const total = style ? style.gallery.length : 0;
  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(() => setOpenIndex((i) => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setOpenIndex((i) => (i + 1) % total), [total]);

  useEffect(() => {
    if (openIndex === null) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openIndex, close, prev, next]);

  if (!style) return <NotFound />;

  return (
    <section className="bg-black text-white min-h-screen px-6 pt-40 md:pt-32 pb-16">
      <Helmet>
        <title>{`Tatuagem ${style.name} | ${site.name}`}</title>
        <meta name="description" content={style.description} />
      </Helmet>

      <div className="max-w-6xl mx-auto">
        <Link
          to="/#portfolio"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-red-500 transition mb-8"
        >
          <FaArrowLeft /> Voltar ao portfólio
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{style.name}</h1>
        <p className="text-lg text-gray-300 max-w-3xl mb-10">{style.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {style.gallery.map((src, index) => (
            <motion.button
              key={src}
              type="button"
              onClick={() => setOpenIndex(index)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group block overflow-hidden rounded-lg bg-gray-900 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label={`Ampliar foto ${index + 1} do estilo ${style.name}`}
            >
              <img
                src={src}
                alt={`Tatuagem estilo ${style.name} — foto ${index + 1}`}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.button>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl mb-4">Gostou do estilo {style.name}?</p>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-500 transition"
          >
            Faça seu orçamento
          </a>
        </div>
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={`Galeria ${style.name}`}
          >
            <button
              type="button"
              onClick={close}
              className="absolute top-4 right-4 text-3xl p-2 hover:text-red-500 transition"
              aria-label="Fechar"
            >
              <FaTimes />
            </button>

            {total > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-2 md:left-6 text-3xl p-3 hover:text-red-500 transition"
                aria-label="Foto anterior"
              >
                <FaChevronLeft />
              </button>
            )}

            <motion.img
              key={style.gallery[openIndex]}
              src={style.gallery[openIndex]}
              alt={`Tatuagem estilo ${style.name} — foto ${openIndex + 1}`}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-h-[85vh] max-w-full rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {total > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-2 md:right-6 text-3xl p-3 hover:text-red-500 transition"
                aria-label="Próxima foto"
              >
                <FaChevronRight />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
