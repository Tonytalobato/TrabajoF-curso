import { formatearFecha } from "../../helpers/helpers";
import IconoHogar from "../../img/icono_hogar.svg";
import IconoOcio from "../../img/7117783.svg";
import IconoEstudios from "../../img/estudios.svg";
import IconoTrabajo from "../../img/trabajo.svg";

const ListaIconos = {
  hogar: IconoHogar,
  ocio: IconoOcio,
  estudios: IconoEstudios,
  trabajo: IconoTrabajo,
};

const Tarea = ({ tarea, eliminarTarea, viewModalEditarTarea }) => {
  const handleEliminar = () => {
    eliminarTarea(tarea.id);
  };

  const handleEditar = () => {
    viewModalEditarTarea(tarea);
  };

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
      <p className="cantidad-gasto"></p>
      <div className="descripcion-gasto">
        <p>
          <button onClick={handleEliminar} className="delete-edit-button">
            Borrar
          </button>
        </p>
        <p>
          <button onClick={handleEditar} className="delete-edit-button">
            editar
          </button>
        </p>
      </div>
    </div>
  );
};

export default Tarea;
