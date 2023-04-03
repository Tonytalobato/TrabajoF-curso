const DatosTareas = ({ 
    tareas, 
    setTareas,  
    tareasDisponibles, 
    }) => {
  
  const handleReset = () => {
    setTareas(0)
  }
  
    return (
      <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div className="contenido-presupuesto">
          <p>
            <span>Tareas: </span>{tareas}
          </p>
          <p>
            <span>Tareas disponibles: </span>{tareasDisponibles}
          </p>
          <button onClick={handleReset} className="reset-app">
            Resetear tareas
          </button>
        </div>
      </div>
    );
  };
  export default DatosTareas;