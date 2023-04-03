import { useEffect, useState } from "react";
import DatosPresupuesto from "../componentes/datosPresupuesto";
// import Gasto from "../componentes/gasto";
import Modal from "../componentes/modal";
import NuevoGasto from "../componentes/nuevoGasto";
import NuevoPresupuesto from "../componentes/nuevoPresupuesto";
import FiltrarGastos from "../componentes/filtrarGasto";
import ListarGastos from "../componentes/listarGastos/listarGastos";

const Presupuesto = () => { //variables de estado
  const [modal, setModal] = useState(false); //---en principio no se muestra----
  const [presupuesto, setPresupuesto] = useState(0);
  const [gastos, setGastos] = useState([]);
  const [gastosFiltrados, setGastosFiltrados] = useState([]);
  const [filtro, setFiltro] = useState(null);
  const [totalGastos, setTotalgastos] = useState(0);
  const [disponible, setDisponible] = useState(0);
  const [gastoEditable, setGastoEditable] = useState(null);



  useEffect(() => {
    setDisponible(presupuesto);
  }, [presupuesto]);

  useEffect(() => {
    let temporalGastos = 0; //-----variable auxiliar-------
    gastos.forEach((element) => {
      temporalGastos = Number(element.Cantidad) + temporalGastos;
    });
    setTotalgastos(temporalGastos);
    setDisponible(presupuesto - temporalGastos);
  }, [gastos]);

  useEffect(() => {
    if (filtro) {
      const temporalGastos = gastos.filter((gasto) => {
        return filtro === gasto.categoria;
      });
      setGastosFiltrados(temporalGastos);
    } else {
      setGastosFiltrados(gastos);
    }
  }, [filtro, gastos]);

  const addGasto = (newGasto) => {
    setGastos([...gastos, newGasto]);
  };
  const editGasto = (editableGasto) => {
    console.log(editableGasto);
    //------se hace map de gastos y se sustituye con el mismo id------
    const tempoGasto = gastos.map((gasto) => {
      if(gasto.id === editableGasto.id){
        return editableGasto;
      } else {
        return gasto;
      }      
    }) 
    //----cambia el array por el nuevo ya editado-------
    setGastos(tempoGasto)
    setModal(false)//----cierra el modal------

  };

  const eliminarGasto = (idGasto) => {
    const temporalGastos = gastos.filter((gasto) => {
      return gasto.id !== idGasto;
    });
    setGastos(temporalGastos);
  };

  const viewModalEditarGasto = (gasto) => {//------muestra el modal y lo llena-------
    setModal(true);
    setGastoEditable(gasto)
  }

  const handleAdd = () => {
    setModal(true)
    setGastoEditable(null)
  }



  return (
    <>
      <div className="header">
        <h1>Planificador</h1>

        {presupuesto ? (
          <>
            <DatosPresupuesto
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              totalGastos={totalGastos}
              disponible={disponible}
              setGastos={setGastos}
            />
            <NuevoGasto handleAdd={handleAdd }/>
          </>
        ) : (
          <NuevoPresupuesto setPresupuesto={setPresupuesto} />
        )}
      </div>
      {gastos.length > 0 && (
        <div className="gastosMain">
          
          <FiltrarGastos setFiltro={setFiltro} />
          <div className="listado-gastos contenedor">
            {gastosFiltrados.length > 0 ? (
              <h2>Gastos</h2>
            ) : (
              <h2>No hay gastos en esta categoría</h2>
            )}

            <ListarGastos
              gastosFiltrados={gastosFiltrados}
              eliminarGasto={eliminarGasto}
              viewModalEditarGasto={viewModalEditarGasto}
            />
          </div>
        </div>
      )}

      {modal && <Modal 
      setModal={setModal} 
      addGasto={addGasto} 
      gastoEditable={gastoEditable}
      editGasto={editGasto}
       
      />}
    </>
  );
};

export default Presupuesto;

//Al adicionar un gasto se debe actualizar la lista de gastos,
//que se guardará en el componente Presupuesto, y será un array.


// const gastosFiltrado = [
//   //crear y metert un json aquí === Mokeado
//   {
//     NombreGasto: "Ahorro",
//     Cantidad: 123,
//     categoria: "ahorro",
//     fecha: 1680122437727,
//     id: "1680122437727Ahorro",
//   },
//   {
//     NombreGasto: "Netflix",
//     Cantidad: 123,
//     categoria: "suscripciones",
//     fecha: 1680122445340,
//     id: "1680122445340Netflix",
//   },
//   {
//     NombreGasto: "Luz",
//     Cantidad: 123,
//     categoria: "casa",
//     fecha: 1680122451313,
//     id: "1680122451313Luz",
//   },
// ];


