
import { 
    COTIZACIONES_PROYECTO 
} from '../../types';


export default (state, action) => {
    switch(action.type){

        case COTIZACIONES_PROYECTO:
            return {
                ...state,
                cotizacionesproyecto: state.cotizaciones.filter(
                    cotizacion => cotizacion.proyectoId === action.payload
                )
            }
        default:
            return state;
    }
}