import { useState, useEffect } from "react";
import { listaDeProdutos } from "../ProdutoServico";
import "bootstrap/dist/css/bootstrap.min.css";

function ConsultaCatalogo() {
    const [produtos, setProdutos] = useState([]);
    useEffect(() => {
        listaDeProdutos()
        .then((response) => {
            setProdutos(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);
    return (
        <div className="container">
            <h5 className="text-center">Consulta Catalogo </h5>
            <table className="table table-striped table-bordered">
            <thead>
                <tr>
                <th>ID</th>
                <th>Descrição</th>
                <th>Categoria</th>
                <th>Custo</th>
                <th>Quant</th>
                </tr>
            </thead>
            <tbody className="Catalogo">
                {produtos.map((produto) => (
                <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.descricao}</td>
                    <td>{produto.categoria}</td>
                    <td>{produto.custo}</td>
                    <td>{produto.quantidadeNoEstoque}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
}
export default ConsultaCatalogo