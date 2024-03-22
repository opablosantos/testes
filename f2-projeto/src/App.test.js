import { render, screen } from '@testing-library/react';
import App from './App';

test('ct01 - verifica o comportamento na chamada do componente temp', () => {
  render(<App />);
  const linkElement = screen.getByText(/controle de temperatura/i);
  expect(linkElement).toBeInTheDocument();
});
