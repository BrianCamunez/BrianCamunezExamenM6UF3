import { createContext, useState,useEffect } from "react";
import { comandas as comandasIniciales } from "../datos/comandas"; 

export const ComandasContext = createContext();

export const ComandasProvider = ({ children }) => {
    const [comandas, setComandas] = useState(() => {
        const dadesGuardades = localStorage.getItem("comandas");
        return dadesGuardades ? JSON.parse(dadesGuardades) : comandasIniciales;
    });

    useEffect(() => {
        localStorage.setItem("comandas", JSON.stringify(comandas));
    }, [comandas]);

    const agregarComanda = (nuevaComanda) => {
        setComandas((prevComandas) => [...prevComandas, nuevaComanda]);
    };

    return (
        <ComandasContext.Provider value={{ comandas, setComandas, agregarComanda }}>
            {children}
        </ComandasContext.Provider>
    );
};