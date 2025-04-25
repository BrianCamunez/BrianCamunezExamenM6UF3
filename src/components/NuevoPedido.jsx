import { useState } from "react";
import FichaBirra from "./FichaBirra";
import bd from "../datos/info";

const NuevoPedido = () => {

    const [birra, setBirra] = useState(null);

    const camabiarBirra = (e) => {
        const id = e.target.value;
        const birra = bd.find((birra) => birra.id == id);
        setBirra(birra);
    }

    return (
        <>
            <div className="col-6">
                <h3>Grupo</h3>
                <label for="nombreGrupo" className="label-control">Nombre del grupo:</label>
                <input type="text" className="form-control mt-2" placeholder="Borrachos de DAW2" />
                <label for="numeroMesa" className="label-control">Mesa numero</label>
                <input type="number" className="form-control mt-2" placeholder="0" />

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

                    <input type="number" value="0" className="form-control" />
                </div>
                <button className="btn btn-success mt-4 w-100">¡Enviar pedido!</button>
            </div>
            {birra && <FichaBirra birra={birra} />}
        </>
    );
}

export default NuevoPedido;