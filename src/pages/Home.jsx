import React, { useState } from "react"; // Unificado en una sola línea
import fotoStarWa from "../assets/img/starWar.jpg";
import { Card } from "../components/Card.jsx"; 
import { Planeta } from "../components/planeta.jsx";

export const Home = () => {
    // Estado para la información que mostrará la modal
    const [infoModal, setInfoModal] = useState({ title: "", text: "" });

    const Characters = [
        { nombre: 'Epidosiodo I', id: 0, planet: 'saturno' },
        { nombre: 'Epidosiodo II', id: 1, planet: 'Sentauro' },
        { nombre: 'Epidosiodo III', id: 2, planet: 'Neptuniano' },
        { nombre: 'Epidosiodo IV', id: 3, planet: 'Start Kill' },
        { nombre: 'Epidosiodo V', id: 4, planet: 'Andromeda' },
        { nombre: 'Epidosiodo VI', id: 5, planet: 'Draco' },
    ];

    return ( 
        <>
            <div className="container mt-5">
                <h1 className="mb-5">Characters</h1>
                <div className="d-flex flex-row overflow-scroll pb-3 shadow-sm" style={{ scrollbarWidth: "thin" }}>
                    {Characters.map((item, index) => {
                        // Pasamos setModal como prop a la Card
                        return <Card key={"char-" + index} nombre={item.nombre} setModal={setInfoModal} />;
                    })}
                </div>
            </div>

            <div className="container mt-5">
                <h1 className="mb-5">Planets</h1>
                <div className="d-flex flex-row overflow-scroll pb-3 shadow-sm" style={{ scrollbarWidth: "thin" }}>
                    {Characters.map((item, index) => {
                        // Pasamos setModal como prop al Planeta
                        return <Planeta key={"planet-" + index} planet={item.planet} setModal={setInfoModal} />;
                    })}
                </div>
            </div>

            
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style ={{ height: "80vh"}}>
    
    
    <div className="modal-dialog modal-xl modal-dialog-centered" >
        
        
				<div className="modal-content bg-dark text-white border border-warning shadow-lg">
					
				
					<div className="modal-header border-secondary">
						<h5 className="modal-title text-warning fs-2" id="exampleModalLabel">
							{infoModal.title}
						</h5>
						<button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>

					{/* CUERPO - Aquí puedes meter filas y columnas */}
					<div className="modal-body p-4">
									<div className="row">
										<div className="col-md-6">
											{/* Espacio para una imagen si quieres agregarla al estado después */}
											<img 
												src="https://starwars-visualguide.com/assets/img/placeholder.jpg" 
												className="img-fluid rounded border border-secondary" 
												alt="star wars item" 
											/>
										</div>
										<div className="col-md-6">
											<h3 className="text-info">Description</h3>
											<p className="fs-5">{infoModal.text}</p>
											
											<hr className="text-secondary" />
											
											<div className="d-flex justify-content-around mt-4 text-center">
												<div>
													<p className="text-muted mb-0">Birth Year</p>
													<p className="fw-bold">19BBY</p>
												</div>
												<div>
													<p className="text-muted mb-0">Gender</p>
													<p className="fw-bold">Male</p>
												</div>
												<div>
													<p className="text-muted mb-0">Height</p>
													<p className="fw-bold">172cm</p>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* PIE DE PÁGINA */}
								<div className="modal-footer border-secondary">
									<button type="button" className="btn btn-outline-warning" data-bs-dismiss="modal">Close</button>
								</div>
				</div>
			</div>
		</div>
	</>
    );
};
