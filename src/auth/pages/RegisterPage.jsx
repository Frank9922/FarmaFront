import { Link } from "react-router-dom"
import { AuthLayout } from "../../farma/layout/AuthLayout"
import { motion } from "framer-motion"
import { useState } from "react"
import { useForm } from "../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { startRegister } from "../../store/slices/auth/thunks"
import { PopUpAlert } from "../../farma/components/PopUpAlert"


const initialForm = {
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    re_password: ''
}

const formValidation = {
    nombre: [(value) => value.length > 3, 'El nombre debe ser mayor a tres caracteres'],
    apellido: [(value) => value.length > 3, 'El apellido debe ser mayor a tres caracteres'],
    email: [(value) => value.includes('@'), 'El correo debe tener una @'],
    password: [(value) => value.length > 6, 'La contraseña debe ser mayor a ocho caracteres'],
    re_password: [(value) => value.length > 6, 'La contraseña debe ser mayor a ocho caracteres']

}


export const RegisterPage = () => {
    
    const dispatch = useDispatch();

    const { estado, errorResponse } = useSelector(state => state.auth)

    const [openPopUp, setOpenPopUp] = useState(false)
    
    const { nombre, nombreValid, apellido, apellidoValid, email, emailValid, password, passwordValid, re_password, re_passwordValid, formState, isFormValid, passwordMatch, onInputChange } = useForm(initialForm, formValidation)

    const [formSubmitted, setformSubmitted] = useState(false)

    const onsubmit = async(event) => {

        event.preventDefault();

        setformSubmitted(true);

        if(!isFormValid) return

         await dispatch(startRegister(formState));

         if(Object.keys(errorResponse).length > 0) setOpenPopUp(true);

    }

    const onClosePopUp = () => {
        setOpenPopUp(false);
    }




  return (
    <AuthLayout>
        <>
        
        <motion.div
        initial={{ x: "20%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-20%", opacity: 0, transition: { duration: 0.2 } }}
        transition={{ delay: 0, duration: 0.2 }}
        >
        <form onSubmit={onsubmit}>

                <div className="head-form">
                    <h1>Crear cuenta</h1>
                    <div className="line"></div>
                    <p>Por favor, rellene todos los campos.</p>
                </div>

                <div className="body-form">

                    <div className="datos">

                        <input
                        name="nombre" 
                        type="text"
                        value={nombre}
                        placeholder="Nombre" 
                        onChange={onInputChange}
                        className={` ${!!nombreValid && formSubmitted ? 'error' : ''}`}
                        />

                        <input 
                        name="apellido" 
                        type="text" 
                        value={apellido}
                        placeholder="Apellido" 
                        onChange={onInputChange}
                        className={` ${!!apellidoValid && formSubmitted ? 'error' : ''}`}

                        />

                    </div>

                        <input
                        name="email"
                        type="email"
                        value={email}
                        autoComplete="username"
                        placeholder="E-mail"
                        onChange={onInputChange}
                        className={` ${!!emailValid && formSubmitted  ? 'error' : ''}`}

                        />

                        <input 
                        name="password" 
                        type="password" 
                        value={password}
                        autoComplete="new-password"
                        onChange={onInputChange}
                        placeholder="Contraseña" 
                        className={` ${!!passwordValid && formSubmitted && !passwordMatch ? 'error' : ''}`}

                        />

                        <input 
                        name="re_password" 
                        type="password"
                        autoComplete='new-password'
                        value={re_password}
                        onChange={onInputChange}
                        placeholder="Confirmar Contraseña" 
                        className={` ${!!re_passwordValid && formSubmitted && !passwordMatch ? 'error' : ''}`}

                        />
                            <div className={`error-form-alert ${!isFormValid && formSubmitted ? 'show' : ''}`}>
                            Por favor complete los campos obligatorios
                            </div>

                            <div className={`error-form-alert ${!passwordMatch && formSubmitted ? 'show' : ''}`}>
                            Las contraseñas deben coincidir
                            </div>




                </div>

                <div className="footer-form">
                    <button disabled={ estado === 'checking'} >
                        { estado === 'checking' ? (<div className="spinner"></div>) : 'Crear Cuenta' }
                    </button>
                </div>
                <div className="body-form">
                  <Link to='/login'>¿Ya tienes una cuenta? Inicia Sesion</Link>
                </div>

        </form>
        
        </motion.div>

        <PopUpAlert isOpen={openPopUp} onClose={onClosePopUp} title={errorResponse?.email?.[0]} message="xd"/>
        </>
    </AuthLayout>
  )
}
