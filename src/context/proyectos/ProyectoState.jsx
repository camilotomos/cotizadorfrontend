import { useReducer } from "react";
import ProyectoContext from "./ProyectoContext";
import ProyectoReducer from "./ProyectoReducer";
import {v4} from 'uuid';

import { 
        FORMULARIO_PROYECTO, 
        OBTENER_PROYECTOS,
        AGREGAR_PROYECTO,
        VALIDAR_FORMULARIO,
        PROYECTO_ACTUAL,
        ELIMINAR_PROYECTO
    } from "../../types";

const ProyectoState = props => {

    const proyectos = [
        {id:1, nombre: 'WebMakerOP1010'},
        {id:2, nombre: 'NhekOP1011'},
        {id:3, nombre: 'ShadowOP1012'},
        {id:4, nombre: 'nhek Shadow'}
    ]
    
    const initialState = {
        proyectos: [],
        formulario : false,
        errorformulario: false,
        proyectoactual: null
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer (ProyectoReducer, initialState)

    //Funciones relacionadas para el CRUD
    const mostrarFormulario = () =>{
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    //Obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    //Agregar Nuevo Proyecto
    const agregarProyecto = proyecto => {
        proyecto.id = v4();

        //Insertar el proyecto en el state
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
    }

    //Validar si hay errores en el formulario
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    //Seleccionar al proyecto de la lista
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    //Seleccionar al proyecto de la lista
    const eliminarProyecto = proyectoId => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        })
    }
    

    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::
    return (
        <ProyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyectoactual: state.proyectoactual,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )
}
 
export default ProyectoState;