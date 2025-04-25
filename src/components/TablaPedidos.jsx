import { ComandasContext } from "../context/ComandasContext";
import { useContext } from "react";

const TablaPedidos = () => {

    const { comandas, setComandas } = useContext(ComandasContext);

    const cambiarEstado = (index) => {
        const newComandas = [...comandas];
        newComandas[index].estado = newComandas[index].estado === "pendiente" ? "servido" : "pendiente";
        setComandas(newComandas);
    }

    const borrarComanda = (index) => {
        const newComandas = [...comandas];
        newComandas.splice(index, 1);
        setComandas(newComandas);
    }

    return (
        <div id="tablaPedidos" class="container mt-5 mb-5 p-5 border shadow-lg ">
            <div class="row">
                <h3>Pedidos</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Grupo</th>
                            <th>Mesa</th>
                            <th>Cerveza</th>
                            <th>Cantidad</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comandas.map((comanda, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{comanda.grupo}</td>
                                <td>{comanda.numeroMesa}</td>
                                <td>{comanda.cerveza}</td>
                                <td>{comanda.cantidad}</td>
                                <td>
                                <div className="d-flex gap-2">
                                        <button
                                            className={`btn w-100 btn-sm ${
                                                comanda.estado === "pendiente"
                                                    ? "btn-outline-warning"
                                                    : "btn-outline-success"
                                            }`}
                                            onClick={() => cambiarEstado(index)}
                                        >
                                            {comanda.estado === "pendiente" ? "Pedido pendiente..." : "¡Pedido servido!"}
                                        </button>
                                        <button className="btn btn-outline-danger w-100 btn-sm" onClick={() => borrarComanda(index)}>🗑 Borrar pedido</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default TablaPedidos