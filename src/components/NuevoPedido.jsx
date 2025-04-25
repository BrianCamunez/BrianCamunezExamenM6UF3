import { useContext, useState } from "react";
import FichaBirra from "./FichaBirra";
import bd from "../datos/info";
import { ComandasContext } from "../context/ComandasContext";

const NuevoPedido = () => {

    const { agregarComanda } = useContext(ComandasContext);
    const [birra, setBirra] = useState(null);
    const [grupo, setGrupo] = useState("");
    const [mesa, setMesa] = useState("");
    const [cantidad, setCantidad] = useState(0);

    const camabiarBirra = (e) => {
        const id = e.target.value;
        const birra = bd.find((birra) => birra.id == id);
        setBirra(birra);
    }

    const enviarPedido = (e) => {

        e.preventDefault()

        const formulario = e.currentTarget.form;
        if (!formulario.checkValidity()) {
            formulario.classList.add("was-validated");
            return
        }


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

        agregarComanda(nuevaComanda);
        alert("¡Pedido añadido correctamente!");

        setGrupo("");
        setMesa("");
        setCantidad(0);
        formulario.classList.remove("was-validated");

    };

    return (
        <>
            <div className="col-6">
                <h3>Grupo</h3>
                <form className="needs-validation" novalidate>
                <div>
                <label for="nombreGrupo" className="label-control">Nombre del grupo:</label>
                <input type="text" className="form-control mt-2" placeholder="Borrachos de DAW2" onChange={(e) => setGrupo(e.target.value)} minLength="4" maxLength="10" required/>
                <div className="invalid-feedback">
                    Por favor, introduce un nombre de grupo entre 4 y 10 caracteres.
                </div>
                </div>
                <div>
                <label for="numeroMesa" className="label-control">Mesa numero</label>
                <input type="number" className="form-control mt-2" placeholder="0" onChange={(e) => setMesa(e.target.value)} min="1" max="15" required/>
                <div className="invalid-feedback">
                    Por favor, introduce un numero entre 1 y 15.
                </div>
                </div>
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

                    <input type="number" className="form-control" onChange={(e) => setCantidad(e.target.value)} min="1" required/>
                    <div className="invalid-feedback">
                    Por favor, pida 1 o más cervezas.
                </div>
                </div>
                <button className="btn btn-success mt-4 w-100" onClick={enviarPedido}>¡Enviar pedido!</button>
                </form>
            </div>
            {birra && <FichaBirra birra={birra} />}
        </>
    );
}

export default NuevoPedido;