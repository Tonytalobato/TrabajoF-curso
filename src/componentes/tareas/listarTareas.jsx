import Tareas from "../gasto";

const ListarTareas = ({ tareasFiltradas, eliminarTarea, viewModalEditarTarea }) => {
  return (
    <>
      {tareasFiltradas.map((tarea) => {
        return (
          <Tareas key={tarea.id} 
          tarea={tarea} 
          eliminarTarea={eliminarTarea} 
          viewModalEditarTarea={viewModalEditarTarea}
    />
        );
      })}
    </>
  );
};
export default ListarTareas;