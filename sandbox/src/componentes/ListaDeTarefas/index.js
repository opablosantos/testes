function ListaDeTarefas(props) {
  return (
    <div>
      <h3>Lista de Tarefas</h3>
      <p>Nome = {props.nome}</p>
      <ul>
        <li>Documentar os requisitos funcionais</li>
        <li>Escrever a função que obtém imagens da câmera</li>
        <li>Documentar o algoritmo</li>
      </ul>
    </div>
  );
}

export default ListaDeTarefas;
