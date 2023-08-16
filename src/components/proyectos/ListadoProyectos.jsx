import Proyecto from "./Proyecto";
import ProyectoContext from "../../context/proyectos/ProyectoContext";
import { useContext } from "react";


const Listado = () => {

  //Obterner los proyectos desde el proyectostate inicial
  const proyectosContext = useContext(ProyectoContext);
  const {proyectos} = proyectosContext;

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