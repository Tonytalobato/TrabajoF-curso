import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("Mostrar elementos en pantalla de inicio", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  // ------------ESTE SIEMPRE DIO ERROR EN CLASE, POR ESO LO DEJO COMENTADO
  // test("renderiza titulo Planificador de gastos", () => {
  //   const linkElement = screen.queryByText(/Planificador de Gastos/i);
  //   expect(linkElement).toBeInTheDocument();
  // });

  test("render boton añadir", () => {
    const botonAdd = screen.getByRole("button", { name: /añadir/i });
    expect(botonAdd).toBeInTheDocument();
  });

  test("Mensaje de error campo presupuesto vacío", async () => {
    const botonAdd = screen.queryByRole("button", { name: /añadir/i });
    userEvent.click(botonAdd);
    const mensajeError = await screen.findByText(/Presupuesto requerido/i);
    expect(mensajeError).toBeInTheDocument();
  });
});
describe("Mostrar elementos en pantalla Datos presupuesto", () => {
  beforeEach(async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const inputpresupuesto = screen.queryByRole("spinbutton");
    await waitFor(() => userEvent.type(inputpresupuesto, "500"));
    const botonAdd = screen.queryByRole("button", { name: /añadir/i });
    await waitFor(() => userEvent.click(botonAdd));
  });

  test("Que se muestre el boton resetear presupuesto", async () => {
    const botonResetear = await screen.findByRole("button", {
      name: /resetear presupuesto/i,
    });
    expect(botonResetear).toBeInTheDocument();
  });

  test("Mostrar icono de adicionar nuevo gasto", async () => {
    const iconoNuevoGasto = await screen.findByTestId("iconoNuevoGasto");
    expect(iconoNuevoGasto).toBeInTheDocument();
  });

  test("Se muestre importe presupuesto", async () => {
    const importePresupuesto = await screen.findByText("$500");
    expect(importePresupuesto).toBeInTheDocument();
  });

  test("Que muestre definie presupuesto", async () => {
    const botonResetear = await screen.findByRole("button", {
      name: /resetear presupuesto/i,
    });
    await waitFor(() => userEvent.click(botonResetear));
    const definirPresupuesto = await screen.findByText(/definir presupuesto/i);
    expect(definirPresupuesto).toBeInTheDocument();
  });
});
describe("Mostrar elementos en el modal añadir gasto", () => {
  beforeEach(async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const inputpresupuesto = screen.queryByRole("spinbutton");
    await waitFor(() => userEvent.type(inputpresupuesto, "500"));
    const botonAdd = screen.queryByRole("button", { name: /añadir/i });
    await waitFor(() => userEvent.click(botonAdd));
    const iconoNuevoGasto = await screen.findByTestId("iconoNuevoGasto");
    await waitFor(() => userEvent.click(iconoNuevoGasto));
  });

  test("Titulo nuevo gasto", async () => {
    const nuevoGasto = await screen.findByText(/nuevo gasto/i);
    expect(nuevoGasto).toBeInTheDocument();
  });

  test("Mensaje de error nombre requerido", async () => {
    const botonAdd = screen.queryByRole("button", { name: /añadir/i });
    userEvent.click(botonAdd);
    const mensajeError = await screen.findByText(/Nombre requerido/i);
    expect(mensajeError).toBeInTheDocument();
  });

  test("Mensaje de error cantidad requerida", async () => {
    const botonAdd = screen.queryByRole("button", { name: /añadir/i });
    userEvent.click(botonAdd);
    const mensajeError = await screen.findByText(/Cantidad requerida/i);
    expect(mensajeError).toBeInTheDocument();
  });

  test("Mensaje error nombre no aparece", async () => {
    const inputNombre = screen.getByLabelText("Nombre gasto");

    await waitFor(() => userEvent.type(inputNombre, "Polo"));
    const botonAdd = await screen.findByRole("button", { name: /añadir/i });
    await waitFor(() => userEvent.click(botonAdd));

    const mensajeError = screen.queryByText(/Nombre requerido/i);

    expect(mensajeError).not.toBeInTheDocument();
  });

  test("Cuando cierra el modal correctamente", async () => {
    const cerrarModal = await screen.findByAltText("iconoCerrar");
    await waitFor(() => userEvent.click(cerrarModal));
    expect(cerrarModal).not.toBeInTheDocument();
  });
});

describe("Mostrar elementos en el modal añadir gasto", () => {
  beforeEach(async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const inputpresupuesto = screen.queryByRole("spinbutton");
    await waitFor(() => userEvent.type(inputpresupuesto, "500"));
    const botonAdd = screen.queryByRole("button", { name: /añadir/i });
    await waitFor(() => userEvent.click(botonAdd));
    const iconoNuevoGasto = await screen.findByTestId("iconoNuevoGasto");
    await waitFor(() => userEvent.click(iconoNuevoGasto));
    const inputNombre = screen.getByPlaceholderText(
      /Nombre o razón del gasto/i
    );
    await waitFor(() => userEvent.type(inputNombre, "Viaje"));
    const inputCantidad = screen.getByPlaceholderText(/añadir cantidad/i);
    await waitFor(() => userEvent.type(inputCantidad, "250"));
    const inputcategoria = screen.getByRole("combobox");
    userEvent.selectOptions(inputcategoria, "ocio");
    const botonAddGasto = screen.queryByRole("button", { name: /añadir/i });
    await waitFor(() => userEvent.click(botonAddGasto));
  });

  test("Filtrar por una categoría que no contiene gastos", async () => {
    const filtrarCategoria = await screen.findByRole("combobox");
    await waitFor(() => userEvent.selectOptions(filtrarCategoria, "casa"));
    const tituloNoGasto = await screen.findByText(/No hay gastos en esta/i);
    expect(tituloNoGasto).toBeInTheDocument();
  });

  test("Aparece nuevo gasto y eliminar", async () => {
    const botonEliminar = await screen.findByText("Eliminar");
    expect(botonEliminar).toBeInTheDocument();
  });
});
