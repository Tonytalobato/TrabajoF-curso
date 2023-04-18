import Tarea from "./tarea";

const ListarTareas = ({
  tareasFiltradas,
  eliminarTarea,
  viewModalEditarTarea,
  editarTarea,
}) => {
  return (
    <>
      {tareasFiltradas.map((tarea) => {
        return (
          <Tarea
            key={tarea.id}
            tarea={tarea}
            eliminarTarea={eliminarTarea}
            editarTarea={editarTarea}
            viewModalEditarTarea={viewModalEditarTarea}
          />
        );
      })}
    </>
  );
};
export default ListarTareas;
