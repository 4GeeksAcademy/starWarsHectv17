import React from "react";
import rigoImage from "../assets/img/rigo-baby.jpg" ; // Ajusta la ruta según el archivo

export const Home = () => {
    
    const items = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className="container mt-5">
            <h2 className="text-white mb-4">Mis Cartas de Star Wars</h2>
            
            
				<div className="d-flex flex-row overflow-scroll pb-3 shadow-sm" style={{ scrollbarWidth: "thin" }}>
					{items.map((item, index) => (
						<div key={index} className="card bg-dark text-white me-3" style={{ minWidth: "18rem", maxWidth: "18rem" }}>
							<img src={rigoImage} className="card-img-top" alt="Rigo Baby" />
							<div className="card-body border-top border-warning">
								<h5 className="card-title">Personaje {item}</h5>
								<p className="card-text small text-secondary">
									Descripción breve del personaje o carta aquí.
								</p>
								<div className="d-flex justify-content-between">
									<button className="btn btn-outline-primary btn-sm">Learn more!</button>
									<button className="btn btn-outline-warning btn-sm">
										<i className="fa-regular fa-heart"></i>
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
};

export default Home;