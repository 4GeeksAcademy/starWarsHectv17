import React from "react";
import fotoStarWa from "../assets/img/starWar.jpg"
import { Card } from "../components/Card.jsx"; 
import { Planeta } from "../components/planeta.jsx"


export const Home = () => {
    
    const Characters = [
		{nombre : 'Epidosiodo I', id : 0, planet : 'saturno' },
		{nombre : 'Epidosiodo II', id : 1, planet : 'Sentauro' },
		{nombre : 'Epidosiodo III', id : 2, planet : 'Neptuniano' },
		{nombre : 'Epidosiodo IV', id : 3, planet : 'Start Kill'},
		{nombre : 'Epidosiodo V', id : 4, planet : 'Andromeda'},
		{nombre : 'Epidosiodo VI', id : 5, planet : 'Draco' },

]
    return ( 
		<>
		<div className="container mt-5">
            <h1 className= "mb-5">Characters</h1>
				<div className="d-flex flex-row overflow-scroll pb-3 shadow-sm" style={{ scrollbarWidth: "thin" }}>
					{Characters.map((item, index) => {
						return <Card key = {"char-" + index} nombre = {item.nombre}/>;
					})}
				</div>
		</div>
		<div className="container mt-5">
            <h1 className= "mb-5">Planets</h1>
				<div className="d-flex flex-row overflow-scroll pb-3 shadow-sm" style={{ scrollbarWidth: "thin" }}>
					{Characters.map((item, index) => {
						return <Planeta key = {"planet-" + index} planet = {item.planet}/>;
					})}
				</div>

		</div>
		</>
		);	
	
};

