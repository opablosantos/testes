import { produtos } from "./data.js";

function ListaProdutos() {
  const listaItens = produtos.map((produto) => (
    <li key={produto.id}>
      {produto.nome} - R$ {produto.preco}
    </li>
  ));
  return (
    <div>
      <h3>Lista de Produtos</h3>
      <ul>{listaItens}</ul>
    </div>
  );
}

export default ListaProdutos;
