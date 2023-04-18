const FiltrarTareas = ({setFiltro}) => {
    return(
        <div className="filtros sombra contenedor">
          <div className="campo">
          <label>Filtrar tareas</label>
            <select onChange={(e) => setFiltro(e.target.value)} id="categoria">
            <option value="">--Todas las tareas--</option>
            <option value="ocio">Ocio</option>
            <option value="hogar">Hogar</option>        
            <option value="trabajo">Trabajo</option>
            <option value="estudios">Estudios</option>
           </select>
        </div>
      </div>
    )
}
export default FiltrarTareas;