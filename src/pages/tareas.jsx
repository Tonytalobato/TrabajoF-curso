import { useEffect, useState } from "react";
import NuevaTarea from "../componentes/tareas/nuevaTarea";
import DatosTareas from "../componentes/tareas/datosTareas";
import FiltrarTareas from "../componentes/tareas/filtrarTareas";
import Modal from "../componentes/modal";
import ListarTareas from "../componentes/tareas/filtrarTareas";


const Tareas = () => {
  const [tareas, setTareas] = useState(0); //variables de estado
  const [modal, setModal] = useState(false);
  const [totalTareas, setTotalTareas] = useState(0);
  const [tareaEditable, setTareaEditable] = useState(0);
  const [filtro, setFiltro] = useState(null);
  const [tareasFiltradas, setTareasFiltradas] = useState([]);

  useEffect(() => {
    if (filtro) {
      const tempoTarea = tareas.filter((tarea) => {
        return filtro === tarea.categoria;
      });
      setTareasFiltradas(tempoTarea);
    } else {
      setTareasFiltradas(tareas);
    }
  }, [filtro, tareas]);

  const addTarea = (newTarea) => {
    setTareas([...tareas, newTarea]);
  };
  const editTarea = (tareaEditable) => {
    // console.log(tareaEditable);
    //------se hace map de gastos y se sustituye con el mismo id------
    const tempoTarea = tareas.map((tarea) => {
      if (tarea.id === tareaEditable.id) {
        return tareaEditable;
      } else {
        return tarea;
      }
    });
    //----cambia el array por el nuevo ya editado-------
    setTareas(tempoTarea);
    setModal(false); //----cierra el modal------
  };

  const eliminarTarea = (idTarea) => {
    const tempoTarea = tareas.filter((tarea) => {
      return tarea.id !== idTarea;
    });
    setTareas(tempoTarea);
  };

  const viewModalEditarTarea = (tarea) => {
    //------muestra el modal y lo llena-------
    setModal(true);
    tareaEditable(tarea);
  };

  const handleAdd = () => {
    setModal(true);
    setTareaEditable(null);
  };

  return (
    <>
      <div className="header">
        <h1>Tareas</h1>
        {tareas ? (
          <>
            <DatosTareas tareas={tareas} setTareas={setTareas} totalTareas={totalTareas}/>
            <NuevaTarea handleAdd={handleAdd} />
          </>
        ) : (
          <NuevaTarea setTareas={setTareas} />
        )}
      </div>


      {tareas.length > 0 && (
        <div className="gastosMain">
          <FiltrarTareas setFiltro={setFiltro} />
          <div className="listado-gastos contenedor">
            {tareasFiltradas.length > 0 ? (
              <h2>Tareas</h2>
            ) : (
              <h2>No hay tareas en esta categoría</h2>
            )}

            <ListarTareas
              tareasFiltradas={tareasFiltradas}
              eliminarTarea={eliminarTarea}
              viewModalEditarTarea={viewModalEditarTarea}
            />
          </div>
        </div>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          addTarea={addTarea}
          tareaEditable={tareaEditable}
          editTarea={editTarea}
        />
      )}
    </>
  );
};
export default Tareas;
