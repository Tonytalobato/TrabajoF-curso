import { useEffect } from "react";
import { useForm } from "react-hook-form";
import iconoCerrar from "../img/cerrar.svg";

const Modal = ({ setModal, addGasto, gastoEditable, editGasto }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();

  const handleGasto = (data) => {
    
    if(gastoEditable) {
        //edita
        data.id = gastoEditable.id
        data.fecha = gastoEditable.fecha
        editGasto(data)
    }else {
        //añade
      data.fecha = Date.now()//pone la fecha exacta
      data.id = `${data.fecha}${data.NombreGasto}`
      addGasto(data)
      setModal(false)

    }  
      setModal(false)//cierra el modal
  }

  useEffect(() => {
    if (gastoEditable)  {
        setValue("NombreGasto", gastoEditable.NombreGasto);
        setValue("Cantidad", gastoEditable.Cantidad);
        setValue("categoria", gastoEditable.categoria);
      }

  }, [])//vacío para una sola vez
  

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          onClick={() => setModal(false)}
          src={iconoCerrar}
          alt="iconoCerrar"
        />
      </div>

      <form className="formulario" onSubmit={handleSubmit(handleGasto)}>
        <legend>{gastoEditable ? "Editar Gasto" : "Nuevo Gasto"}</legend>
        <div className="campo">
          <label htmlFor="Nombre" >Nombre gasto</label> 
          <input id="Nombre"
            type="text"
            placeholder="Nombre o razón del gasto"
            {...register("NombreGasto", { required: true })}
          />
          {errors.NombreGasto && 
            <p className="alerta error">Nombre requerido</p>}
        </div>
        <div className="campo">
          <label>Cantidad</label>
          <input type="number" placeholder="Añadir cantidad"
            {...register("Cantidad", { required: true })}
          />
          {errors.Cantidad && 
            <p className="alerta error">Cantidad requerida</p>}
        </div>
        <div className="campo">
          <label>Categoría</label>
          <select id="categoria" {...register("categoria", { required: true })}>
            <option value="">-- Seleccione --</option>
            <option value="casa">Casa</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="comida">Comida</option>
            <option value="ahorro">Ahorros</option>
            <option value="gastos">Gastos varios</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
          {errors.categoria && 
            <p className="alerta error">Categoría requerida</p>}
        </div>
        <button type="submit">{gastoEditable ? "Editar" : "Añadir"}</button>
      </form>
    </div>
  );
};

export default Modal;
