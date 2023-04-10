import { formatearFecha } from "../../helpers/helpers";
// import IconoCasa from "../../img/icono_casa.svg";
import IconoHogar from "../../img/icono_hogar.svg"
import IconoOcio from "../../img/icono_ocio.svg"

const ListaIconos = {
  casa: IconoHogar,
  ocio: IconoOcio,
  //iconos para cambiar (estudios y trabajo)y hogar
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
