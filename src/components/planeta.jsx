import fotoStarWa from "../assets/img/starWar.jpg"; // Asegúrate de tener la imagen
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export const Planeta = (props) => {
    const { dispatch } = useGlobalReducer();

    return (
        <div className="card bg-dark text-white me-3" style={{ minWidth: "18rem", maxWidth: "18rem" }}>
            <img src={fotoStarWa} className="card-img-top" alt="Planeta" />
            <div className="card-body border-top border-warning">
                <h5 className="card-title">{props.planet}</h5>
                <p className="card-text small text-secondary">
                    Descripción breve del planeta aquí.
                </p>
                <div className="d-flex justify-content-between">
                    {/* El Link apunta a /details/planets/id */}
                    <Link 
                        to={`/details/planets/${props.id}`} 
                        className="btn btn-outline-primary"
                    >
                        Learn more!
                    </Link>
                    
                    <button 
                        className="btn btn-outline-warning btn-sm" 
                        onClick={() => dispatch({ type: "AGREGAR", nombre: props.planet })}
                    >
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};