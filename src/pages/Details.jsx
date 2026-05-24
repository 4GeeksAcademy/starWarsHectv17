import React, { useState, useEffect } from "react"; // 1. Añadimos useState y useEffect
import { useParams, Link } from "react-router-dom";

export const Details = () => {
    const { type, id } = useParams();
    const [data, setData] = useState(null); // 2. Estado para guardar los datos de la API

    // 3. Traemos los datos de la API cuando el componente carga
    useEffect(() => {
        fetch(`https://www.swapi.tech/api/${type}/${id}`)
            .then(res => res.json())
            .then(data => setData(data.result.properties))
            .catch(err => console.error(err));
    }, [type, id]);

    return (
        <div className="container mt-5">
            {/* Si no hay datos, mostramos un mensaje de carga, si los hay, mostramos tu diseño */}
            {!data ? (
                <div className="text-white text-center">Cargando detalles...</div>
            ) : (
                <div className="row bg-dark text-white p-4 rounded shadow-lg">
                    {/* COLUMNA IZQUIERDA: IMAGEN */}
                    <div className="col-md-6 d-flex align-items-center">
                        <img 
                            src="https://starwars-visualguide.com/assets/img/placeholder.jpg" 
                            className="img-fluid rounded border border-secondary w-100" 
                            alt={data.name} 
                        />
                    </div>

                    {/* COLUMNA DERECHA: TEXTO */}
                    <div className="col-md-6 text-center pt-3">
                        <h1 className="display-4 fw-bold text-warning">{data.name}</h1>
                        <p className="fs-5 mt-3 text-light">
                            {data.name} es una parte fundamental de la saga. 
                            {/* Aquí usamos datos reales de la API */}
                        </p>
                    </div>

                    {/* FILA DE DATOS TÉCNICOS */}
                    <div className="row mt-4 py-3 border-top border-warning text-center text-warning fw-bold">
                        <div className="col border-end border-secondary">
                            <p className="text-muted small mb-1">Birth Year</p>
                            <p>{data.birth_year || data.created}</p>
                        </div>
                        <div className="col border-end border-secondary">
                            <p className="text-muted small mb-1">Gender</p>
                            <p>{data.gender || "N/A"}</p>
                        </div>
                        <div className="col border-end border-secondary">
                            <p className="text-muted small mb-1">Height</p>
                            <p>{data.height}</p>
                        </div>
                    </div>
                </div>
            )}

            <div className="mt-5 text-center">
                <Link to="/" className="btn btn-outline-warning btn-lg px-5">Volver al Inicio</Link>
            </div>
        </div>
    );
};