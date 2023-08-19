
import { useReducer } from 'react';
import CotizacionContext from './CotizacionContext';
import CotizacionReducer from './CotizacionReducer';

import { 
    COTIZACIONES_PROYECTO 
} from '../../types';

const CotizacionState = props => {
    const initialState = {
        cotizaciones: [
            {nombre: 'Cotizacion 100 Licencias Business a 24 meses', estado: true, proyectoId: 1},
            {nombre: 'Cotizacion 80 Licencias Business a 36 meses', estado: true, proyectoId: 2},
            {nombre: 'Cotizacion 80 Licencias Starter a 24 meses', estado: false, proyectoId: 3},
            {nombre: 'Cotizacion 100 Licencias Business a 24 meses', estado: true, proyectoId: 4},
            {nombre: 'Cotizacion 80 Licencias Business a 36 meses', estado: true, proyectoId: 3},
            {nombre: 'Cotizacion 80 Licencias Starter a 24 meses', estado: false, proyectoId: 2},
            {nombre: 'Cotizacion 100 Licencias Business a 24 meses', estado: true, proyectoId: 1},
            {nombre: 'Cotizacion 80 Licencias Business a 36 meses', estado: true, proyectoId: 2},
            {nombre: 'Cotizacion 80 Licencias Starter a 24 meses', estado: false, proyectoId: 3}
        ],
        cotizacionesproyecto: null
    }

    //Creando el State y el Dispatch
    const [state, dispatch] = useReducer(CotizacionReducer, initialState);


    //Creando las Funciones relacionadas a las Cotizaciones


    //Obtener las cotizaciones de los proyectos
    const obtenerCotizaciones = proyectoId => {
        dispatch({
            type: COTIZACIONES_PROYECTO,
            payload: proyectoId
        })
    }

    //::::::::::::::::::::::::::::::::::::::::::

    return (
        <CotizacionContext.Provider
            value = {{
                cotizaciones: state.cotizaciones,
                cotizacionesproyecto: state.cotizacionesproyecto,
                obtenerCotizaciones
            }}
        >
            {props.children}
        </CotizacionContext.Provider>
    )
}

export default CotizacionState;