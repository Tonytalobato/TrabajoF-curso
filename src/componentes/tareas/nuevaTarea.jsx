import iconoNuevoGasto from "../../img/nuevo-gasto.svg";

const NuevaTarea = ({hadleAdd}) => {
    return (
        <div title="Agrega una tarea" className="nuevo-gasto">
            <img onClick={hadleAdd}  data-testid="iconoNuevaTarea"
            src={iconoNuevoGasto} alt="icono(+)" />
        </div>
    )
}
export default NuevaTarea;

