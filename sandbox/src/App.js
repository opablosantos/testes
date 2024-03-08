import "./styles.css";
import ListaDeTarefas from "./componentes/ListaDeTarefas";
import Soma from "./componentes/Soma";
import ListaProdutos from "./componentes/ListaProdutos";
import ListaProdutos2 from "./componentes/ListaProdutos2";

export default function App() {
  return (
    <div className="App">
      <ListaDeTarefas nome="Pablo" />
      <Soma parcela1="10" parcela2="20" />
      <ListaProdutos />
      <ListaProdutos2 />
    </div>
  );
}
