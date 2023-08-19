import { useContext } from "react";
import ProyectoContext from "../../context/proyectos/ProyectoContext";
import CotizadorContext from "../../context/cotizaciones/CotizacionContext";


const Proyecto = ({proyecto}) => {


    //Obtener proyectos desde stateproyectos
    const proyectosContext = useContext (ProyectoContext);
    const {proyectoActual} = proyectosContext;

    //Obtener las funciones desde el contexte de cotizaciones
    const cotizacionesContext = useContext(CotizadorContext);
    const {obtenerCotizaciones} = cotizacionesContext;

    //Funcion para agregar el proyecto
    const seleccionarProyecto = id => {
        proyectoActual(id);//Filtra el proyecto
        obtenerCotizaciones(id);//Filtra la tarea
    }

    return ( 

        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={
                    () => seleccionarProyecto(proyecto.id)
                }
            >
                {proyecto.nombre}
            </button>
        </li>

     );
}
 
export default Proyecto;