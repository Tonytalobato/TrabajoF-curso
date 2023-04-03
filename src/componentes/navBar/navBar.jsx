import { Link } from "react-router-dom";


const NavBar = () => {
    return(
        <>
        <div>
            <h1 className="nav-links-container">
                <Link to="/">Presupuesto</Link>
                <br/>
                <Link to="/tareas">Tareas</Link>
            </h1>
        </div>
        </>    
    )
}

export default NavBar;