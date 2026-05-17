import fotoStarWa from "../assets/img/starWar.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Card = (props) => {

    const { dispatch } = useGlobalReducer();

        return(
                <div className="card bg-dark text-white me-3" style={{ minWidth: "18rem", maxWidth: "18rem" }}>
                    <img src={fotoStarWa} className="card-img-top" alt="Rigo Baby" />
                    <div className="card-body border-top border-warning">
                        <h5 className="card-title" >{props.nombre}</h5>
                        <p className="card-text small text-secondary">
                            Descripción breve del personaje o carta aquí.
                        </p>
                        <div className="d-flex justify-content-between">
                            <button 
                                className="btn btn-outline-primary"
                                data-bs-toggle="modal" 
                                data-bs-target="#exampleModal"
                                onClick={() => props.setModal({ 
                                    title: props.planet, 
                                    text: "Información detallada sobre el planeta " + props.planet 
                                })}
                            >
                                Learn more!
                            </button>
                            <button className="btn btn-outline-warning btn-sm" onClick={() => dispatch({ type: "AGREGAR", nombre: props.nombre })}>
                                <i className="fa-regular fa-heart"></i>
                            </button>
                        </div>
                    </div>
                </div>

            )

         }