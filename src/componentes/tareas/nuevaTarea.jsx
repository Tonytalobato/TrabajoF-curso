import { useForm } from "react-hook-form";

const NuevaTarea = ({ setTareas }) => {
  const handleTarea = (data) => {
   
    setTareas(data.nuevaTarea);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario" onSubmit={handleSubmit(handleTarea)}>
        <div className="campo">
          <label>Definir tarea</label>
          <input
            type="text"
            className="nuevo-presupuesto"
            {...register("nuevaTarea", { required: true })}
          />
          {errors.nuevaTarea && (
            <p className="alerta error">Tarea requerida.</p>
          )}
        </div>
        <button type="submit">Añadir</button>
      </form>
    </div>
  );
};

export default NuevaTarea;
