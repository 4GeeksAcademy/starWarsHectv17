import React from "react";
import fotoStarWa from "../assets/img/starWar.jpg"
import {Card} from "../components/Card.jsx" ;

export const Home = () => {
    
    const items = [1, 2, 3, 4, 5, 6, 7, 8];

    return ( 
		<>
		<div className="container mt-5">
            <h1 className= "mb-5">Characters</h1>
				<div className="d-flex flex-row overflow-scroll pb-3 shadow-sm" style={{ scrollbarWidth: "thin" }}>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
				</div>
		</div>
		<div className="container mt-5">
            <h1 className= "mb-5">Planets</h1>
				<div className="d-flex flex-row overflow-scroll pb-3 shadow-sm" style={{ scrollbarWidth: "thin" }}>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
				</div>
		</div>
		</>
		);	
	
};

