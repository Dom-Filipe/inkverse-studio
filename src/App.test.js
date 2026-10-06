import { render, screen } from '@testing-library/react';
import App from './App';

function renderAt(path) {
  window.history.pushState({}, '', path);
  return render(<App />);
}

test('renderiza a página inicial', () => {
  renderAt('/');
  expect(screen.getByRole('heading', { level: 1, name: /Arte que transcende a pele/i })).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: /Agende sua sessão/i })[0]).toHaveAttribute('href', '/#contato');
});

test.each([
  ['/oldschool', 'Old School'],
  ['/minimalista', 'Minimalista'],
  ['/realismo', 'Realismo'],
  ['/aquarela', 'Aquarela'],
])('a página %s mostra o estilo %s', (path, name) => {
  renderAt(path);
  expect(screen.getByRole('heading', { level: 1, name })).toBeInTheDocument();
  expect(screen.getAllByRole('button', { name: /Ampliar foto/i }).length).toBeGreaterThan(0);
});

test('rota inexistente mostra a página 404', () => {
  renderAt('/nao-existe');
  expect(screen.getByText(/Página não encontrada/i)).toBeInTheDocument();
});
