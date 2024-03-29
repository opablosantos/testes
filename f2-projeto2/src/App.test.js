import { render, screen } from '@testing-library/react';
import App from './App';

test('ct01 - verificar a integração na consulta', () => {
  render(<App />);
  const textElement = screen.getByText(/consulta catalogo/i);
  expect(textElement).toBeInTheDocument();
});
test("ct02 - verificar a integracao no resultado da consulta", async () => {
  render(<App />);
  await waitFor(
    () => {
      const txtLabel = screen.getByText(/eletrobomba/i);
     expect(txtLabel).toBeInTheDocument();
    },
    { timeout: 5000 }
  );
 });