import { createContext } from "react";

// 1. Creamos el contexto
export const Context = createContext(null);

// 2. Datos iniciales
export const initialStore = () => {
  return {
    favoritos: [] // Nuestra lista empieza vacía
  }
}

// 3. El Reducer (El que procesa las órdenes)
export default function storeReducer(store, action) {
  console.log("Acción recibida:", action); // Esto te ayudará a ver en consola si funciona

  switch (action.type) {
    case "AGREGAR":
      // Si el nombre ya está en favoritos, no lo agregamos (opcional)
      if (store.favoritos.includes(action.nombre)) return store;
      
      return {
        ...store,
        favoritos: [...store.favoritos, action.nombre] 
      };
      
    default:
      return store;
  }
}