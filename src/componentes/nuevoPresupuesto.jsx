import { useForm } from "react-hook-form";

const NuevoPresupuesto = ({ setPresupuesto }) => {
  const handlerPresupuesto = (data) => {
    setPresupuesto(data.nuevoPresupuesto);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario" onSubmit={handleSubmit(handlerPresupuesto)}>
        <div className="campo">
          <label>Definir presupuesto</label>
          <input
            placeholder="¿Cual es su presuesto?"
            className="nuevo-presupuesto"
            type="number"
            {...register("nuevoPresupuesto", { required: true })}
          />
          {errors.nuevoPresupuesto && (
            <p className="alerta error">Presupuesto requerido</p>
          )}
        </div>
        <button type="submit">Añadir</button>
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
