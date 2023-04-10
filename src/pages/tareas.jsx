import { useEffect, useState } from "react";
import ModalTareas from "../componentes/tareas/modalTareas";
import NuevaTarea from "../componentes/tareas/nuevaTarea";
import Tarea from "../componentes/tareas/tarea";
import FiltrarTareas from "../componentes/tareas/filtrarTareas";


const Tareas = () => {
  const [modalTareas, setModalTareas] = useState(false);
  const [tareas, setTareas] = useState(0); //----equivale a presupuesto
  const [tarea, setTarea] = useState([]); //-----equivale a gastos
  const [filtro, setFiltro] = useState(null); //----para filtrar por categoría(null porque no hay)
  const [filtrarTareas, setFiltrarTareas] = useState(null);
  const [tareasFiltradas, setTareasFiltradas] = useState([]); //---equivale a gastos filtrados

  // useEffect(() => {//para cada vez que el filtro cambie
  //   const temporalTareas = tareas.filter((tarea) => {
  //     return (
  //           filtro === tarea.categoria
  //     )
  //   })
  //   setTareasFiltradas(temporalTareas)
  // }, [filtro])

  const addTarea = (newTarea) => {
    console.log(newTarea)
    setTarea([...tarea, newTarea]); //lo que habia y lo nuevo
  };

  return (
    <>
      <div className="header">
        <h1>Organizador de tareas</h1>
        <NuevaTarea setModalTareas={setModalTareas} />
      </div>

      {tarea.length > 0 && (
        <div className="gastosMain">

          <FiltrarTareas setFiltro={setFiltro}/>

          <div className="listado-gastos contenedor">
            {tareasFiltradas.map((tarea) => {
              return <Tarea key={tarea.id} tarea={tarea} />;
            })}
          </div>
        </div>
      )}
       
      {tareasFiltradas.length > 0 ? (
        <h2>Tareas</h2>
      ) : (
        <h2>No hay tareas pendientes</h2>
      )}

      <div className="listado-gastos contenedor">
        {tarea.map((tarea) => {
          return <Tarea key={tarea.id} tarea={tarea} />;
        })}
      </div>

     

      {modalTareas && (
        <ModalTareas 
        setModalTareas={setModalTareas} 
        addTarea={addTarea} 
        />
      )}
    </>
  );
};

export default Tareas;

{
  /* <ListarTareas tareasFiltradas={tareasFiltradas} /> */
}
