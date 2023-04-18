import { useEffect, useState } from "react";
import DatosPresupuesto from "../componentes/datosPresupuesto";
import Modal from "../componentes/modal";
import NuevoGasto from "../componentes/nuevoGasto";
import NuevoPresupuesto from "../componentes/nuevoPresupuesto";
import FiltrarGastos from "../componentes/filtrarGasto";
import ListarGastos from "../componentes/listarGastos/listarGastos";

const Presupuesto = () => {
  const [modal, setModal] = useState(false);
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
    let temporalGastos = 0;
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

    const tempoGasto = gastos.map((gasto) => {
      if (gasto.id === editableGasto.id) {
        return editableGasto;
      } else {
        return gasto;
      }
    });

    setGastos(tempoGasto);
    setModal(false);
  };

  const eliminarGasto = (idGasto) => {
    const temporalGastos = gastos.filter((gasto) => {
      return gasto.id !== idGasto;
    });
    setGastos(temporalGastos);
  };

  const viewModalEditarGasto = (gasto) => {
    setModal(true);
    setGastoEditable(gasto);
  };

  const handleAdd = () => {
    setModal(true);
    setGastoEditable(null);
  };

  return (
    <>
      <div className="header">
        <h1>Presupuesto</h1>

        {presupuesto ? (
          <>
            <DatosPresupuesto
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              totalGastos={totalGastos}
              disponible={disponible}
              setGastos={setGastos}
            />
            <NuevoGasto handleAdd={handleAdd} />
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

      {modal && (
        <Modal
          setModal={setModal}
          addGasto={addGasto}
          gastoEditable={gastoEditable}
          editGasto={editGasto}
        />
      )}
    </>
  );
};

export default Presupuesto;
