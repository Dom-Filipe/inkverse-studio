import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function NotFound() {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32">
      <Helmet>
        <title>Página não encontrada | Inkverse Studio</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <p className="text-red-500 font-bold text-6xl mb-4">404</p>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Página não encontrada</h1>
      <p className="text-gray-300 mb-8">O endereço que você acessou não existe ou foi removido.</p>
      <Link
        to="/"
        className="bg-red-600 text-white font-bold py-3 px-8 rounded-full hover:bg-red-500 transition"
      >
        Voltar para o início
      </Link>
    </section>
  );
}
