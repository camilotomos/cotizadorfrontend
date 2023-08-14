


const FormularioCotizacion = () => {
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