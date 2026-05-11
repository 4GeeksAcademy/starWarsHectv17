import { createContext } from "react";


export const Context = createContext(null);


export const initialStore = () => {
  return {
    favoritos: [] // Nuestra lista empieza vacía
  }
}


export default function storeReducer(store, action) {
  console.log("Acción recibida:", action); // Esto te ayudará a ver en consola si funciona

  switch (action.type) {
    case "AGREGAR":
      
      if (store.favoritos.includes(action.nombre)) return store;
      
      return {
        ...store,
        favoritos: [...store.favoritos, action.nombre] 
      };
      
      case "ELIMINAR":
      return {
        ...store,
        favoritos: store.favoritos.filter((item) => item !== action.nombre)
      };

    default:
      return store;
  }
}