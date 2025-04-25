const TablaPedidos = ({ comandas }) => {
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
                                        {comanda.estado === "pendiente" ? (
                                            <button className="btn btn-outline-warning w-100 btn-sm">Pedido pendiente...</button>
                                        ) : (
                                            <button className="btn btn-outline-success w-100 btn-sm">¡Pedido servido!</button>
                                        )}
                                        <button className="btn btn-outline-danger w-100 btn-sm">🗑 Borrar pedido</button>
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