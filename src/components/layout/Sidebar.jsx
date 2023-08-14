import NuevoProyecto from "../proyectos/NuevoProyecto";
import ListadoProyectos from "../proyectos/ListadoProyectos";

const Sidebar = () => {
    return ( 
        <aside>
            <h1>COTIZADOR</h1>
                <NuevoProyecto/>
            <div className="proyectos">
                <h2>Proyectos Cotizados</h2>

                <ListadoProyectos/>
            </div>
        </aside>
     );
}
 
export default Sidebar;