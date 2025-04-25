import { useState } from "react";
import FichaBirra from "./FichaBirra";
import bd from "../datos/info";
import comandas from "../datos/comandas";

const NuevoPedido = () => {

    const [birra, setBirra] = useState(null);
    const [grupo, setGrupo] = useState("");
    const [mesa, setMesa] = useState("");
    const [cantidad, setCantidad] = useState(0);

    const camabiarBirra = (e) => {
        const id = e.target.value;
        const birra = bd.find((birra) => birra.id == id);
        setBirra(birra);
    }

    const enviarPedido = () => {
        if (!grupo || !mesa || !birra || cantidad <= 0) {
            alert("Por favor, completa todos los campos antes de enviar el pedido.");
            return;
        }

        const nuevaComanda = {
            numeroMesa: mesa,
            grupo,
            cerveza: birra.nombre,
            cantidad,
            estado: "pendiente",
        };

        comandas.push(nuevaComanda);

        alert("¡Pedido añadido correctamente!");

        setGrupo("");
        setMesa("");
        setCantidad(0);
    };

    return (
        <>
            <div className="col-6">
                <h3>Grupo</h3>
                <label for="nombreGrupo" className="label-control">Nombre del grupo:</label>
                <input type="text" className="form-control mt-2" placeholder="Borrachos de DAW2" onChange={(e) => setGrupo(e.target.value)}/>
                <label for="numeroMesa" className="label-control">Mesa numero</label>
                <input type="number" className="form-control mt-2" placeholder="0" onChange={(e) => setMesa(e.target.value)}/>

                <h3 className="mt-5">Haz tu pedido</h3>
                <div className="d-flex gap-3 ">
                    <select name="cervezas" id="cervezas" className="form-control" onChange={camabiarBirra}>
                        <option value="">Selecciona qué birra quieres</option>
                        {bd.map((birra) => (
                            <option key={birra.id} value={birra.id}>
                                {birra.nombre}
                            </option>
                        ))}
                    </select>

                    <input type="number" className="form-control" onChange={(e) => setCantidad(e.target.value)}/>
                </div>
                <button className="btn btn-success mt-4 w-100" onClick={enviarPedido}>¡Enviar pedido!</button>
            </div>
            {birra && <FichaBirra birra={birra} />}
        </>
    );
}

export default NuevoPedido;