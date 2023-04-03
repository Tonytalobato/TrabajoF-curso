import { useForm } from "react-hook-form";
import iconoCerrar from "../../img/cerrar.svg";
import { useEffect } from "react";

const ModalTareas = ({ setModal, addTarea, tareaEditable, editTarea }) => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const handleTarea = (data) => {
    
    if (tareaEditable) {
      //editar
      data.id = tareaEditable.id;
      data.fecha = tareaEditable.fecha;
      editTarea(data);
    } else {
      //añadir
      data.fecha = Date.now(); //pone la fecha
      data.id = `${data.fecha}${data.NombreTarea}`;
      addTarea(data);
      setModal(false);
    }
    setModal(false); //cierra el modal
  };

  useEffect(() => {
    if (tareaEditable) {
      setValue("NombreTarea", tareaEditable.NombreTarea);
      setValue("categoria", tareaEditable.categoria);
    }
  }, []); //un solo uso

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          onClick={() => setModal(false)}
          src={iconoCerrar}
          alt="iconoCerrar"
        />
      </div>

      <form className="formulario" onSubmit={handleSubmit(handleTarea)}>
        <legend>{tareaEditable ? "Editar Tarea" : "Nueva Tarea"}</legend>
        <div className="campo">
          <label htmlFor="Nombre">Nombre de la tarea</label>
          <input 
            id="Nombre"
            type="text"
            placeholder="Nombre de la tarea"
            {...register("NombreTarea", { required: true })}
          />
          {errors.NombreTarea && (
            <p className="alerta error">Tarea requerida</p>
          )}
        </div>
        <div className="campo">
          <label>Categoría</label>
          <select id="categoria" {...register("categoria", { required: true })}>
          <option value="">--Seleccione--</option>
            <option value="ocio">Ocio</option>
            <option value="casa">Hogar</option>
            <option value="salud">Estudios</option>
            <option value="comida">Trabajo</option>
          </select>
          {errors.categoria && <p className="alerta error">Categoría requerida</p>}
        </div>
        <button type="submit">{tareaEditable ? "Editar" : "Añadir"}</button>
      </form>
    </div>
  );
};

export default ModalTareas;
