import { Fragment, useContext, useState } from "react";
import ProyectoContext from "../../context/proyectos/ProyectoContext";

const NuevoProyecto = () => {

 
    //Obterner state del formulario desde el contexto
    const proyectosContext = useContext (ProyectoContext);
    const {
        formulario, 
        errorformulario, 
        mostrarFormulario, 
        agregarProyecto, 
        mostrarError} = proyectosContext;


    //state para la creacion de proyectos
    const [proyecto, guardarProyecto] = useState ({
        nombre: ''
    });
    
    //Destructutando proyecto
    const {nombre} = proyecto;

    //Lee la informacion digitada en el input
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        });
    }

    //Disparador cuando el usuario preciona el boton agregar proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();

        //Validar el proyecto
        if(nombre === ''){
            mostrarError();
            return;
        }
        //agrgar el state
        agregarProyecto(proyecto)
        //Reiniciar el form
        guardarProyecto({
            nombre: ''
        })
    }


    //Mostrar el Formulario
    const onClickFormulario = () => {
        mostrarFormulario();
    }

    return ( 
        <Fragment>
            <button
            type="button"
            className="btn btn-block btn-primario"
            onClick={onClickFormulario}
            >
                Nuevo Proyecto
            </button>

            {
                formulario 
                ?
                    (
                        <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProyecto}
                    >
                        <input 
                            type="text" 
                            className="input-text"
                            placeholder="Nombre Cliente + OP"
                            name="nombre"
                            value={nombre}
                            onChange={onChangeProyecto}
                        />
        
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Agregar Proyecto"
                        />
                    </form>
                    )

                : 
                
                    (
                        null
                    )
            }

            {
            errorformulario
            ?
                (
                    <p className="mensaje error">El nombre del Proyecto + la OP son Obligatorios</p>
                )   
            :
                (
                    null
                )
            }

        </Fragment>
     );
}
 
export default NuevoProyecto;