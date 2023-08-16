import { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import ProyectoContext from "../../context/proyectos/ProyectoContext";



const Listado = () => {

    //Obterner los proyectos desde el proyectostate inicial
    const proyectosContext = useContext(ProyectoContext);
    const {proyectos, obtenerProyectos} = proyectosContext;

    //useEffect se ejecuta una vez para cargar los arreglos
    useEffect(() => {
      obtenerProyectos();
    }, []);

    //revisar si existe contenido en proyectos para mostrar
    if(proyectos.length === 0) return null;




    return ( 

        <ul className="listado-proyectos">
            {proyectos.map(
              proyecto => (
                <Proyecto 
                    key={proyecto.id}
                    proyecto={proyecto}
                />
              )  
            )}
        </ul>

     );
}
 
export default Listado;