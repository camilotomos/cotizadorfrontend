import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Proyectos from "./components/proyectos/Proyectos";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Login from "./components/auth/Login";

function App() {
  return (
    <Router>
      <Routes>
          <Route path = "/" element={<Login />} /> {/* Pagina principal Login */}
          <Route path = "/nueva-cuenta" element={<NuevaCuenta />} /> {/* Pagina para crear una cuenta */}
          <Route path = "/proyectos" element={<Proyectos />} /> {/* Proyectos asignados o trabajados */}
      </Routes>
    </Router>
  );
}

export default App;
