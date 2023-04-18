import "./App.css";
import { Route, Routes } from "react-router";
import Presupuesto from "./pages/presupuesto";
import NavBar from "./componentes/navBar/navBar";
import Tareas from "./pages/tareas";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Presupuesto />} />
        <Route path="/tareas" element={<Tareas />} />
      </Routes>
    </>
  );
}
export default App;
