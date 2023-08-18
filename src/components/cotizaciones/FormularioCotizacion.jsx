import { useContext } from "react";
import ProyectoContext from "../../context/proyectos/ProyectoContext";


const FormularioCotizacion = () => {

    //Extraer los datos del state inicial
    const proyectosContext = useContext (ProyectoContext);
    const {proyectoactual} = proyectosContext;

    //Si no hay proyecto seleccionado
    if(!proyectoactual) return null;

    //Destructurando los datos del proyecto
    const [proyectoSeleccionado] = proyectoactual;

    return (  
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre de la Cotizacion"
                        name="nombre"
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar Cotizacion"
                    />
                </div>
            </form>
        </div>
    );
}
 
export default FormularioCotizacion;