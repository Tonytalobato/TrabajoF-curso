import { useEffect, useState } from "react";
import ModalTareas from "../componentes/tareas/modalTareas";
import NuevaTarea from "../componentes/tareas/nuevaTarea";

import FiltrarTareas from "../componentes/tareas/filtrarTareas";
import ListarTareas from "../componentes/tareas/listarTareas";

const Tareas = () => {
  const [modalTareas, setModalTareas] = useState(false);

  const [tarea, setTarea] = useState([]);
  const [filtro, setFiltro] = useState(null);

  const [tareasFiltradas, setTareasFiltradas] = useState([]);
  const [tareaEditable, setTareaEditable] = useState(null);

  useEffect(() => {
    if (filtro) {
      const temporalTarea = tarea.filter((tarea) => {
        return filtro === tarea.categoria;
      });
      setTareasFiltradas(temporalTarea);
    } else {
      setTareasFiltradas(tarea);
    }
  }, [filtro, tarea]);

  const addTarea = (newTarea) => {
    setTarea([...tarea, newTarea]);
  };

  const editTarea = (editableTarea) => {
    console.log(editableTarea);

    const temporalTarea = tarea.map((tarea) => {
      if (tarea.id === editableTarea.id) {
        return editableTarea;
      } else {
        return tarea;
      }
    });

    setTarea(temporalTarea);
  };

  const eliminarTarea = (idTarea) => {
    const temporalTareas = tarea.filter((tarea) => {
      return tarea.id !== idTarea;
    });
    setTarea(temporalTareas);
  };

  const viewModalEditarTarea = (tarea) => {
    setModalTareas(true);
    setTareaEditable(tarea);
  };

  const hadleAdd = () => {
    setModalTareas(true);
    setTareaEditable(null);
  };

  return (
    <>
      <div className="header">
        <h1>Organizador de tareas</h1>
        <NuevaTarea hadleAdd={hadleAdd} />
      </div>

      {tarea.length === 0 && <h2>No hay tareas pendientes en este momento.</h2>}

      {tarea.length > 0 && (
        <div className="gastosMain">
          <FiltrarTareas setFiltro={setFiltro} />

          <div className="listado-gastos contenedor">
            {tareasFiltradas.length > 0 ? (
              <h2>Tareas pendientes</h2>
            ) : (
              <h2 className="noHay">No existen tareas en esta categoría.</h2>
            )}

            <ListarTareas
              tareasFiltradas={tareasFiltradas}
              eliminarTarea={eliminarTarea}
              viewModalEditarTarea={viewModalEditarTarea}
            />
          </div>
        </div>
      )}

      {modalTareas && (
        <ModalTareas
          setModalTareas={setModalTareas}
          addTarea={addTarea}
          tareaEditable={tareaEditable}
          editTarea={editTarea}
        />
      )}
    </>
  );
};

export default Tareas;
