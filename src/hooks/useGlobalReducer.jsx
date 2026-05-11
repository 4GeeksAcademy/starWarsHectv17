import { useReducer, useContext } from "react";
// Importamos el Context y lo demás desde store.js
import storeReducer, { initialStore, Context } from "../store"; 

export function StoreProvider({ children }) {
    const [store, dispatch] = useReducer(storeReducer, initialStore());
    
    // USAMOS "Context" (el de store.js), no "StoreContext"
    return (
        <Context.Provider value={{ store, dispatch }}>
            {children}
        </Context.Provider>
    );
}

// Este hook es el secreto para que no tengas errores
export default function useGlobalReducer() {
    return useContext(Context);
}