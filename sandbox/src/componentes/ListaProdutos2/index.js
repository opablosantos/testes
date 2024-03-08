import { produtos } from "./data.js";

function ListaProdutos2() {
  const consultaPreco = produtos.filter((produto) => produto.preco > 50);
  return (
    <div>
      <h3>Lista de Produtos 2</h3>
      <ul>
        {consultaPreco.map((produto) => (
          <li key={produto.id}>
            {produto.nome} - R$ {produto.preco}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaProdutos2;
