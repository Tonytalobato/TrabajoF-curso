import './App.css';
import { Route, Routes } from 'react-router';
import Presupuesto from './pages/presupuesto';
import Tareas from "./pages/tareas"
import NavBar from './componentes/navBar/navBar';

function App() {
  return (

  <> 

    <NavBar/>

    <Routes>
    
      <Route path='/' element={<Presupuesto/>} /> {/* carga el componente presupuesto */}
      <Route path="/tareas" element={<Tareas/>}/> {/* carga el componente tareas */}
    </Routes>
    </> 
  );
}

export default App;
