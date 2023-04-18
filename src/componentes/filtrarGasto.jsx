const FiltrarGastos = ({ setFiltro }) => {
  return (
    <div className="filtros sombra contenedor">
      <label>Filtrar gastos</label>
      <select onChange={(e) => setFiltro(e.target.value)} id="categoria">
        <option value="">--Todos--</option>
        <option value="casa">Casa</option>
        <option value="ocio">Ocio</option>
        <option value="salud">Salud</option>
        <option value="comida">Comida</option>
        <option value="ahorro">Ahorros</option>
        <option value="gastos">Gastos varios</option>
        <option value="suscripciones">Suscripciones</option>
      </select>
    </div>
  );
};
export default FiltrarGastos;
