import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Tareas from "../../pages/tareas";
import { BrowserRouter } from "react-router-dom";

describe("elementos de pantalla de inicio", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Tareas />
      </BrowserRouter>
    );
  });

  test("Renderiza el titulo de la página de Tareas", () => {
    const linkElement = screen.getByText(/Organizador de tareas/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("Se abre el modal", async () => {
    const abrirModal = await screen.findByAltText("icono(+)");
    await waitFor(() => userEvent.click(abrirModal));
    expect(abrirModal).toBeInTheDocument();
  });
});

describe("elementos de pantalla de inicio", () => {
  beforeEach(async () => {
    render(
      <BrowserRouter>
        <Tareas />
      </BrowserRouter>
    );
  });

  test("Mensaje de error cuando tarea requerida", async () => {
    const abrirModal = await screen.findByAltText("icono(+)");
    await waitFor(() => userEvent.click(abrirModal));
    const botonAñadir = screen.queryByRole("button", { name: /añadir/i });
    userEvent.click(botonAñadir);
    const mensajeError = await screen.findByText(/Tarea requerida/i);
    expect(mensajeError).toBeInTheDocument();
  });

  test("Mensaje de error cuando tarea requerida", async () => {
    const abrirModal = await screen.findByAltText("icono(+)");
    await waitFor(() => userEvent.click(abrirModal));
    const botonAñadir = screen.queryByRole("button", { name: /añadir/i });
    userEvent.click(botonAñadir);
    const mensajeError = await screen.findByText(/Categoría requerida/i);
    expect(mensajeError).toBeInTheDocument();
  });
});

describe("se crean correctamente las tareas", () => {
  beforeEach(async () => {
    render(
      <BrowserRouter>
        <Tareas />
      </BrowserRouter>
    );
    const abrirModal = await screen.findByAltText("icono(+)");
    await waitFor(() => userEvent.click(abrirModal));
    const inputAddTarea = await screen.findByPlaceholderText(/añadir tarea/i);
    await waitFor(() => userEvent.type(inputAddTarea, "comprar"));
    const selectCategory = screen.queryByRole("combobox");
    userEvent.selectOptions(selectCategory, "hogar");
    const botonAñadir = screen.queryByRole("button", { name: /añadir/i });
    await waitFor(() => userEvent.click(botonAñadir));
  });

  test("Se elimina correctamente una tarea", async () => {
    const botonBorrar = await screen.findByRole("button", { name: /borrar/i });
    await waitFor(() => userEvent.click(botonBorrar));
    expect(botonBorrar).not.toBeInTheDocument();
  });
});

// 1 Comprobar que se muestra el título de la página Tarea.
// 2 Comprobar que al presionar el botón de Añadir tareas icono(+) se abre el modal.
// 3 En el modal, mostrar mensaje de error cuando los campos del formulario de Añadir estén vacíos,(tarea y categoría requerida).
// 4 Comprobar que se crea una tarea.
// 5 Comprobar que se elimina una tarea.
