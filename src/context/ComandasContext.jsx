import { createContext, useState } from "react";
import { comandas as comandasIniciales } from "../datos/comandas"; 

export const ComandasContext = createContext();

export const ComandasProvider = ({ children }) => {
    const [comandas, setComandas] = useState(comandasIniciales); 

    const agregarComanda = (nuevaComanda) => {
        setComandas((prevComandas) => [...prevComandas, nuevaComanda]);
    };

    return (
        <ComandasContext.Provider value={{ comandas, agregarComanda }}>
            {children}
        </ComandasContext.Provider>
    );
};