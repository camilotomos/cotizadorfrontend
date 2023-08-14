


const Cotizacion = ({cotizacion}) => {
    return (
        <li className="tarea sombra">
            <p>{cotizacion.nombre}</p>

            <div className="estado">
                {cotizacion.estado
                ? 
                    (
                        <button
                            type="button"
                            className="completo"
                         >Realizada
                        </button>
                    )

                :

                    (
                        <button
                            type="button"
                            className="incompleto"
                        >Pendiente
                        </button>
                    )
                }
            </div>

            <div className="acciones">
                 <button
                    type="button"
                    className="btn btn-primario"
                >Editar
                </button>

                <button
                    type="button"
                    className="btn btn-secundario"
                >Eliminar
                </button>

            </div>
        </li>
     );
}
 
export default Cotizacion;