import { Fragment } from "react";
import Cotizacion from "./Cotizacion";


const ListadoCotizaciones = () => {

    const cotizacionesProyecto = [
        {nombre: 'Cotizacion 100 Licencias Business a 24 meses', estado: true},
        {nombre: 'Cotizacion 80 Licencias Business a 36 meses', estado: true},
        {nombre: 'Cotizacion 80 Licencias Starter a 24 meses', estado: false}
    ];
    
    return ( 
        <Fragment>
            <h2>Proyecto: WebMakerOP1010</h2>

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
                >Eliminar Proyecto &times;
            </button>  
        </Fragment>
     );
}
 
export default ListadoCotizaciones;