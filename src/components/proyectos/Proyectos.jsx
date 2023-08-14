import Sidebar from "../layout/Sidebar";
import Navegacion from "../layout/Navegacion";
import FormularioCotizacion from "../cotizaciones/FormularioCotizacion";
import ListadoCotizaciones from "../cotizaciones/ListadoCotizaciones";

const Proyectos = () => {
    return ( 
        <div className="contenedor-app">
            <Sidebar />

            <div className="seccion-principal">

                <Navegacion />
                <main>

                    <FormularioCotizacion />
                    <div className="contenedor-tareas">
                        <ListadoCotizaciones />
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default Proyectos;