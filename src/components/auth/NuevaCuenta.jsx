import { useState } from "react";
import { Link } from "react-router-dom";



const NuevaCuenta = () => {


    //State para iniciar logueo
    const [usuario, guardarUsuario] = useState({
        nombre:'',
        email: '',
        password: '',
        confirmar: ''
    });


    //extraer los datos de usuario
    const {nombre, email, password, confirmar} = usuario;

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

        //password minimo de 6 caracteres


        //comprobar que los dos password sean iguales

        //ejecutar la accion 
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">

               <h1>Obtener Una Cuenta</h1> 

                <form
                    onSubmit={onSubmit}
                >

                    <div className="campo-form">
                       <label htmlFor="nombre">Nombre</label>
                       <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={nombre}
                            placeholder="Digita Tu Nombre"
                            onChange={onChangeIniciarSesion}
                       
                       /> 
                    </div>

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
                       <label htmlFor="confirmar">Confirmar Password</label>
                       <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            value={confirmar}
                            placeholder="Repite tu Contraseña"
                            onChange={onChangeIniciarSesion}
                       
                       /> 
                    </div>

                    <div className="campo-form">
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Click para Registarme"
                        />
                    </div>
                </form>

                <Link to={'/'} className="enlace-cuenta">
                    Click aquí para ir al Login...
                </Link>

            </div>
        </div>
     );
}
 
export default NuevaCuenta;