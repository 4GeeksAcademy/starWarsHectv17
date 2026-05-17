import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'  // Estilos globales
import AppRoutes from "./routes.jsx";  // <-- IMPORTACIÓN CORRECTA: Sin llaves y llamando al componente por defecto
import { StoreProvider } from './hooks/useGlobalReducer';  // Gestión de estado global

const Main = () => {
    return (
        <React.StrictMode>  
            {/* Proveedor del estado global para toda la app */}
            <StoreProvider> 
                {/* Renderizamos directamente el componente AppRoutes que ya trae el RouterProvider por dentro */}
                <AppRoutes />
            </StoreProvider>
        </React.StrictMode>
    );
}

// Renderizar la aplicación en el HTML
ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
