import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Rola até a seção indicada no hash (ex.: /#contato) ao trocar de rota,
// ou volta ao topo quando não há hash.
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    // Aguarda a página renderizar antes de procurar a seção.
    const id = requestAnimationFrame(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    });
    return () => cancelAnimationFrame(id);
  }, [pathname, hash]);

  return null;
}
