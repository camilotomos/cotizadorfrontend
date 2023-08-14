import { useState } from "react";
import { Link } from "react-router-dom";



const Login = () => {


    //State para iniciar logueo
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });


    //extraer los datos de usuario
    const {email, password} = usuario;

    const onChangeIniciarSesion = e =>{
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        });
    }

    //Se ejecuta al inicar el boton cotizador
    const onSubmit = e => {
        e.preventDefault();

        //Validar que no existan campos vacios


        //ejecutar la accion 
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">

               <h1>Iniciar Cotizador</h1> 

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                       <label htmlFor="email">Email</label>
                       <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Digita tu Correo"
                            onChange={onChangeIniciarSesion}
                       
                       /> 
                    </div>

                    <div className="campo-form">
                       <label htmlFor="password">Password</label>
                       <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Digita tu Contraseña"
                            onChange={onChangeIniciarSesion}
                       
                       /> 
                    </div>

                    <div className="campo-form">
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Cotizador"
                        />
                    </div>
                </form>

                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Click aquí para Registrate...
                </Link>

            </div>
        </div>
     );
}
 
export default Login;