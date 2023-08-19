import { Fragment, useContext } from "react";
import Cotizacion from "./Cotizacion";
import ProyectoContext from "../../context/proyectos/ProyectoContext";
import CotizadorContext from "../../context/cotizaciones/CotizacionContext";

const ListadoCotizaciones = () => {


    //Obtener proyectos desde stateproyectos
    const proyectosContext = useContext(ProyectoContext);
    const {proyectoactual, eliminarProyecto} = proyectosContext;

    //obterner las cotizaciones del proyecto
    const cotizacionesContext = useContext(CotizadorContext);
    const {cotizacionesproyecto} = cotizacionesContext;

    //Si no hay proyecto Seleccionado
    if(!proyectoactual) return <h2>Selecciona un Proyecto</h2>;

    //Destructuring de proyecto actual seleccionado
    const [proyectoSelec] = proyectoactual;

    //Eliminar un proyecto Seleccionado
    const onClickEliminarProyecto = () => {
        eliminarProyecto(proyectoSelec.id);
    }
    
    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoSelec.nombre}</h2>

            <ul className="listado-tareas">
                {cotizacionesproyecto.length === 0
                
                    ? (<li className="tarea"><p>No Hay Cotizaciones</p></li>)

                    :cotizacionesproyecto.map(
                        cotizacion => (
                            <Cotizacion 
                                cotizacion = {cotizacion}
                            />
                        )
                    )
                
                }
 
            </ul>

            <button
                type="button"
                className="btn btn-eliminar sombra"
                onClick={onClickEliminarProyecto}
                >Eliminar Proyecto &times;
            </button>  
        </Fragment>
     );
}
 
export default ListadoCotizaciones;