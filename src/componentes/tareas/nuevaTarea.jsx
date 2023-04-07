import iconoNuevoGasto from "../../img/nuevo-gasto.svg";

const NuevaTarea = ({setModalTareas}) => {
    return (
        <div className="nuevo-gasto">
            <img onClick={() => setModalTareas(true)} 
            src={iconoNuevoGasto} alt="icono(+)" />
        </div>
    )
}
export default NuevaTarea;