import { render, screen } from "@testing-library/react";
import ListarGastos from "./listarGastos/listarGastos";

const gastosFiltrado = [
  {
    NombreGasto: "Ahorro",
    Cantidad: 123,
    categoria: "ahorro",
    fecha: 1680122437727,
    id: "1680122437727Ahorro",
  },
  {
    NombreGasto: "Netflix",
    Cantidad: 123,
    categoria: "suscripciones",
    fecha: 1680122445340,
    id: "1680122445340Netflix",
  },
  {
    NombreGasto: "Luz",
    Cantidad: 123,
    categoria: "casa",
    fecha: 1680122451313,
    id: "1680122451313Luz",
  },
];
describe("Mostrar listado de gastos", () => {
  beforeEach(() => {
    render(<ListarGastos gastosFiltrados={gastosFiltrado} />);
  });

  test("¿Se muestran 3 gastos?", async () => {
    const cantidadText = await screen.findAllByText("€123");
    expect(cantidadText).toHaveLength(3);
  });
});
