import comandas  from "../datos/comandas";
import TablaPedidos from "../components/TablaPedidos";

const Camareros = () => {
    return (
        <TablaPedidos comandas ={comandas} />
    )
}

export default Camareros