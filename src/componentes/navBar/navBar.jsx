import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div>
        <h1 className="nav-links-container">
          <Link title="Vamos a..." to="/">
            💸 Presupuesto
          </Link>
          <br />
          <Link title="Vamos a..." to="/tareas">
            ✏️Tareas
          </Link>
        </h1>
      </div>
    </>
  );
};

export default NavBar;
