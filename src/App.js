import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Proyectos from "./components/proyectos/Proyectos";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Login from "./components/auth/Login";

import ProyectoState from "./context/proyectos/ProyectoState";


function App() {
  return (
   <ProyectoState>
      <Router>
        <Routes>
            <Route path = "/" element={<Login />} /> {/* Pagina principal Login */}
            <Route path = "/nueva-cuenta" element={<NuevaCuenta />} /> {/* Pagina para crear una cuenta */}
            <Route path = "/proyectos" element={<Proyectos />} /> {/* Proyectos asignados o trabajados */}
        </Routes>
      </Router>
  </ProyectoState>
  );
}

export default App;
