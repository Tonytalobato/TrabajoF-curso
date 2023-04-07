import { formatearFecha } from "../../helpers/helpers";
import IconoAhorro from "../../img/icono_ahorro.svg";
import IconoCasa from "../../img/icono_casa.svg";
import IconoComida from "../../img/icono_comida.svg";
import IconoGastos from "../../img/icono_gastos.svg";

const ListaIconos = {
  ahorro: IconoAhorro,
  comida: IconoComida,
  casa: IconoCasa,
  gastos: IconoGastos,
  //iconos provisionales
};

const Tarea = ({ tarea }) => {
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <img src={ListaIconos[tarea.categoria]} alt="icono" />
        <div className="descripcion-gasto">
          <p className="categoria">{tarea.categoria}</p>
          <p className="nombre-gasto">{tarea.NombreTarea}</p>
          <p className="fecha-gasto">
            <span>{formatearFecha(tarea.fecha)}</span>
            </p>
        </div>
      </div>
      <p className="cantidad-gasto">ooo</p>
      <div className="descripcion-gasto">
        <p>
          <button className="delete-edit-button">
            eliminar
          </button>
        </p>
      </div>
    </div>
  );
};

export default Tarea;
