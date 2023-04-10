import './App.css';
import { Route, Routes } from 'react-router';
import Presupuesto from './pages/presupuesto';
import NavBar from './componentes/navBar/navBar';
import Tareas from './pages/tareas';


function App() {
  return (
  <> 
    <NavBar/>

    <Routes>
      <Route path='/' element={<Presupuesto/>} /> {/* carga el componente presupuesto */}
      <Route path="/tareas" element={<Tareas/>}/> 
    </Routes>
    </> 
  );
}
export default App;
