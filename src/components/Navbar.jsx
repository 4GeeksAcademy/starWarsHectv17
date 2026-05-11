import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import startWar from "../assets/img/robot.png"

export const Navbar = () => {
    const { store, dispatch } = useGlobalReducer();

    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <div className="container">
                <Link to="/">
                    <span className="navbar-brand mb-0 h1">
                        <img src={startWar} alt="Star Wars" className="img-fluid" style={{ height: "90px" }} />
                    </span>
                </Link>

                <div className="ml-auto">
                    {/* DROP DOWN DE FAVORITOS */}
                    <div className="dropdown">
                        <button 
                            className="btn btn-primary dropdown-toggle" 
                            type="button" 
                            id="dropdownMenuButton1" 
                            data-bs-toggle="dropdown" 
                            aria-expanded="false"
                        >
                            Favoritos 
                            <span className="badge bg-secondary ms-2">
                                {store.favoritos.length}
                            </span>
                        </button>

                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                            {/* Si la lista está vacía, mostramos un mensaje */}
                            {store.favoritos.length === 0 ? (
                                <li className="dropdown-item text-center">(Vacío)</li>
                            ) : (
                                // Si tiene elementos, los mapeamos
                                store.favoritos.map((fav, index) => {
                                    return (
                                        <li key={index} className="d-flex justify-content-between align-items-center pe-2 ps-2">
                                            <span className="dropdown-item">{fav}</span>
                                            
                                            {/* Botón para eliminar el favorito */}
                                            <button 
                                                className="btn btn-outline-danger btn-sm border-0"
                                                onClick={() => dispatch({ type: "ELIMINAR", nombre: fav })}
                                            >
                                                <i className="fa-solid fa-trash"></i>
                                            </button>
                                        </li>
                                    );
                                })
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};