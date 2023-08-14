import Proyecto from "./Proyecto";


const Listado = () => {

    const proyectos = [
        {nombre: 'WebMakerOP1010'},
        {nombre: 'NhekOP1011'},
        {nombre: 'ShadowOP1012'}
    ]

    return ( 

        <ul className="listado-proyectos">
            {proyectos.map(
              proyecto => (
                <Proyecto 
                    proyecto={proyecto}
                />
              )  
            )}
        </ul>

     );
}
 
export default Listado;