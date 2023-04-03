const FiltrarTareas = ({setFiltro}) => {
    return(
        <div className="filtros sombra contenedor">
          <label>Fil</label>
          <select onChange={(e)=>setFiltro(e.target.value)} id="categoria">
            <option value="">--Todos--</option>
            <option value="ocio">Ocio</option>
            <option value="casa">Hogar</option>
            <option value="salud">Estudios</option>
            <option value="comida">Trabajo</option>
           
          </select>
        </div>
    )
}
export default FiltrarTareas;