import { useState } from "react";
import ModalTareas from "../componentes/tareas/modalTareas";
import FiltrarTareas from "../componentes/tareas/filtrarTareas";
import ListarTareas from "../componentes/tareas/listarTareas";
import NuevaTarea from "../componentes/tareas/nuevaTarea";
import Tarea from "../componentes/tareas/tarea";

const Tareas = () => {
  const [modalTareas, setModalTareas] = useState(false);
  const [tareas, setTareas] = useState(0);//equivale a presupuesto
  const [tarea, setTarea] = useState([]);//equivale a gastos
  const [filtro, setFiltro] = useState(null);
  const [tareasFiltradas, setTareasFiltradas] = useState([]);

  const addTarea = (newTarea)=> {
    setTarea([...tarea, newTarea])//lo que habia y lo nuevo
  }

  return (
    <>
    <div className="header">
      <h1>Organizador de tareas</h1>

      <FiltrarTareas setFiltro={setFiltro} />
      <div className="listado-gastos contenedor">
        {tareasFiltradas.length > 0 ? (
          <h2>Tareas</h2>
        ) : (
          <h2>No hay tareas pendientes</h2>
        )}

        <NuevaTarea setModalTareas={setModalTareas}/>

        <ListarTareas tareasFiltradas={tareasFiltradas} />
      </div>
    </div>

    <div className="gastosMain">
      <div className="listado-gastos contenedor">
        {
          tarea.map((tarea) =>{
            return(
              <Tarea key={tarea.id} tarea={tarea} />
            )
          })
        }
        
      </div>
    </div>

    {
      modalTareas && <ModalTareas 
      setModalTareas={setModalTareas}
      addTarea={addTarea} 
      />
    }

    </>
  );
};



export default Tareas;
