import React, { useState } from "react"; // Unificado en una sola línea
import fotoStarWa from "../assets/img/starWar.jpg";
import { Card } from "../components/Card.jsx"; 
import { Planeta } from "../components/planeta.jsx";

export const Home = () => {
    
    const [infoModal, setInfoModal] = useState({ title: "", text: "" });

    const Characters = [
        { nombre: 'Luke Skywalker', id: 1, planet: 'Tatooine' }, // Cambiado a 1
        { nombre: 'C-3PO', id: 2, planet: 'Alderaan'},         // Cambiado a 2
        { nombre: 'R2-D2', id: 3, planet: 'Yavin IV' },             // Cambiado a 3
        { nombre: 'Darth Vader', id: 4, planet: 'Hoth' },    // Cambiado a 4
        { nombre: 'Leia Organa', id: 5, planet: 'Dagobah' },    // Cambiado a 5
        { nombre: 'Owen Lars', id: 6, planet: 'Bespin' },
    ];

    return ( 
        <>
            <div className="container mt-5">
                <h1 className="mb-5">Characters</h1>
                <div className="d-flex flex-row overflow-scroll pb-3 shadow-sm" style={{ scrollbarWidth: "thin" }}>
                   	{Characters.map((item, index) => (
                    <Card 
                        key={"char-" + index} 
                        nombre={item.nombre} 
                        id={item.id} 
                        type="people" // Definimos el tipo
						setModal={setInfoModal}
                    />
                	))}
                </div>
            </div>

            <div className="container mt-5">
                <h1 className="mb-5">Planets</h1>
                <div className="d-flex flex-row overflow-scroll pb-3 shadow-sm" style={{ scrollbarWidth: "thin" }}>
                    {Characters.map((item, index) => (
                    <Planeta 
                        key={"planet-" + index} 
                        planet={item.planet} 
                        id={item.id} 
                        type="planets" // Definimos el tipo
                    />
                	))}
                </div>
            </div>
	</>
    );
};
