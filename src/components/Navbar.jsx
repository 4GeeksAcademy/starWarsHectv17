import { Link } from "react-router-dom";
import arturitologo from "../assets/img/robot.png";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img className ="text-start" src={arturitologo} alt="robot" style={{ width: "70px"}} />
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<div class="btn-group">
							<button type="button" class="btn btn-success">favorito  
								<span className ='bg-warning ms-2 pe-1 ps-1'>0</span>
							</button>
							<button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
								<span class="visually-hidden">Toggle Dropdown</span>
							</button>
	
							</div>
					</Link>
				</div>
			</div>
		</nav>
	);
};