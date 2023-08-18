import { Fragment, useContext } from "react";
import Cotizacion from "./Cotizacion";
import ProyectoContext from "../../context/proyectos/ProyectoContext";

const ListadoCotizaciones = () => {


    //Obtener proyectos desde stateproyectos
    const proyectosContext = useContext(ProyectoContext);
    const {proyectoactual, eliminarProyecto} = proyectosContext;

    //Si no hay proyecto Seleccionado
    if(!proyectoactual) return <h2>Selecciona un Proyecto</h2>;

    //Destructuring de proyecto actual seleccionado
    const [proyectoSelec] = proyectoactual;
    
    const cotizacionesProyecto = [
        {nombre: 'Cotizacion 100 Licencias Business a 24 meses', estado: true},
        {nombre: 'Cotizacion 80 Licencias Business a 36 meses', estado: true},
        {nombre: 'Cotizacion 80 Licencias Starter a 24 meses', estado: false}
    ];

    //Eliminar un proyecto Seleccionado
    const onClickEliminarProyecto = () => {
        eliminarProyecto(proyectoSelec.id);
    }
    
    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoSelec.nombre}</h2>

            <ul className="listado-tareas">
                {cotizacionesProyecto.length === 0
                
                    ? (<li className="tarea"><p>No Hay Cotizaciones</p></li>)

                    :cotizacionesProyecto.map(
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