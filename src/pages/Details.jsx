import React from "react";
import { useParams, Link } from "react-router-dom";

export const Details = () => {
    // useParams extrae los datos de la URL (ej: /details/character/Luke)
    const { type, id } = useParams();

    return (
        <div className="container mt-5">
            <div className="row bg-dark text-white p-4 rounded shadow-lg">
                {/* COLUMNA IZQUIERDA: IMAGEN */}
                <div className="col-md-6 d-flex align-items-center">
                    <img 
                        src="https://starwars-visualguide.com/assets/img/placeholder.jpg" 
                        className="img-fluid rounded border border-secondary w-100" 
                        alt={id} 
                    />
                </div>

                {/* COLUMNA DERECHA: TEXTO */}
                <div className="col-md-6 text-center pt-3">
                    <h1 className="display-4 fw-bold text-warning">{id}</h1>
                    <p className="fs-5 mt-3 text-light">
                        {id} es una parte fundamental de la saga de Star Wars. 
                        En esta vista de detalles puedes expandir toda la información 
                        específica relacionada con este {type}.
                    </p>
                </div>
            </div>

            {/* FILA DE DATOS TÉCNICOS (Estilo Star Wars) */}
            <div className="row mt-4 py-3 border-top border-warning text-center text-warning fw-bold">
                <div className="col border-end border-secondary">
                    <p className="text-muted small mb-1">Nombre</p>
                    <p>{id}</p>
                </div>
                <div className="col border-end border-secondary">
                    <p className="text-muted small mb-1">Tipo</p>
                    <p>{type}</p>
                </div>
                <div className="col border-end border-secondary">
                    <p className="text-muted small mb-1">Dato A</p>
                    <p>Valor</p>
                </div>
                <div className="col">
                    <p className="text-muted small mb-1">Dato B</p>
                    <p>Valor</p>
                </div>
            </div>

            {/* BOTÓN REGRESAR */}
            <div className="mt-5 text-center">
                <Link to="/" className="btn btn-outline-warning btn-lg px-5">
                    Volver al Inicio
                </Link>
            </div>
        </div>
    );
};