import { useReducer } from "react";
import ProyectoContext from "./ProyectoContext";
import ProyectoReducer from "./ProyectoReducer";

import { FORMULARIO_PROYECTO } from "../../types";

const ProyectoState = props => {
    const initialState = {

        proyectos: [
            {id:1, nombre: 'WebMakerOP1010'},
            {id:2, nombre: 'NhekOP1011'},
            {id:3, nombre: 'ShadowOP1012'},
            {id:4, nombre: 'nhek Shadow'}
        ],
        formulario : false
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer (ProyectoReducer, initialState)

    //Funciones relacionadas para el CRUD
    const mostrarFormulario = () =>{
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    return (
        <ProyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )
}
 
export default ProyectoState;