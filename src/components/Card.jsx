import fotoStarWa from "../assets/img/starWar.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom"; // 1. Asegúrate de tener esta importación

export const Card = (props) => {
    const { dispatch } = useGlobalReducer();

    return (
        <div className="card bg-dark text-white me-3" style={{ minWidth: "18rem", maxWidth: "18rem" }}>
            <img src={fotoStarWa} className="card-img-top" alt="Star Wars" />
            <div className="card-body border-top border-warning">
                <h5 className="card-title">{props.nombre}</h5>
                <p className="card-text small text-secondary">
                    Descripción breve del personaje o carta aquí.
                </p>
                <div className="d-flex justify-content-between">
                    
                    {/* 2. Sustituimos el botón del modal por un componente Link */}
                    <Link 
                        to={`/details/${props.type}/${props.id}`} 
                        className="btn btn-outline-primary"
                    >
                        Learn more!
                    </Link>

                    <button 
                        className="btn btn-outline-warning btn-sm" 
                        onClick={() => dispatch({ type: "AGREGAR", nombre: props.nombre })}
                    >
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};