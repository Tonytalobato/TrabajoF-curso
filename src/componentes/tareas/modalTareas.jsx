import { useForm } from "react-hook-form";
import iconoCerrar from "../../img/cerrar.svg";
import { useEffect } from "react";

const Modaltareas = ({
  setModalTareas,
  addTarea,
  tareaEditable,
  editTarea,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const handleTareas = (data) => {
    if (tareaEditable) {
      data.id = tareaEditable.id;
      data.fecha = tareaEditable.fecha;
      editTarea(data);
    } else {
      data.fecha = Date.now();
      data.id = `${data.fecha}${data.NombreTarea}`;

      addTarea(data);
    }
    setModalTareas(false);
  };

  useEffect(() => {
    if (tareaEditable) {
      setValue("NombreTarea", tareaEditable.NombreTarea);
      setValue("categoria", tareaEditable.categoria);
    }
  }, []);

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          title="Cerrar ventana"
          onClick={() => setModalTareas(false)}
          src={iconoCerrar}
          alt="iconoCierre"
        />
      </div>

      <form className="formulario" onSubmit={handleSubmit(handleTareas)}>
        <legend>Nueva tarea</legend>
        <div className="campo">
          <label>Nombre de la tarea</label>
          <input
            placeholder="Añadir tarea"
            type="text"
            {...register("NombreTarea", { required: true })}
          />
          {errors.NombreTarea && (
            <p className="alerta error">Tarea requerida</p>
          )}
        </div>

        <div className="campo">
          <label>Nombre de la categoría</label>
          <select id="categoria" {...register("categoria", { required: true })}>
            <option value="">--Seleccione una aquí--</option>
            <option value="ocio">Ocio</option>
            <option value="hogar">Hogar</option>
            <option value="trabajo">Trabajo</option>
            <option value="estudios">Estudios</option>
          </select>
          {errors.categoria && (
            <p className="alerta error">categoría requerida</p>
          )}
        </div>
        <button type="submit">{tareaEditable ? "Editar" : "Añadir"}</button>
      </form>
    </div>
  );
};

export default Modaltareas;
