import { useDispatch, useSelector } from "react-redux"
import { sendEmailResetPassword } from "../../store/slices/auth/thunks";
import { useForm } from "../hooks/useForm";
import { useEffect, useState } from "react";


const initialForm = {
    email: ""
}

const formValidation = {
    email: [(value) => value.includes("@"), "El correo debe tener una @"],
}



export const SendEmailForm = ({onNext, setEmail}) => {

    const dispatch = useDispatch();

    const { errorResponse } = useSelector(state => state.auth)

    const { email, emailValid, isFormValid, onInputChange} = useForm(initialForm, formValidation)


    const onSubmit = async(e) => {

        e.preventDefault();

        if(!isFormValid) return

        const result = await dispatch(sendEmailResetPassword(email));

        if(!result.success) return;

        setEmail(email);

        onNext();

    }

  return (
    <form onSubmit={onSubmit}>

    <div className="head-form">
        <h1>Recuperar Contraseña</h1>
        <div className="line"></div>
        <p>Por favor, introduzca el correo.</p>
    </div>

    <div className="body-form">

        <div className="datos">

            <input
            name="email" 
            type="email"
            value={email}
            onChange={onInputChange}
            placeholder="email"
            />

        </div>

        <div className={`error-form-alert ${errorResponse ? 'show' : ''}`}>
                  {
                    JSON.stringify(errorResponse)
                  }

        </div>
        
    </div>

    <div className="footer-form">
        <button >
            Restablecer contraseña
        </button>
     </div>

</form>
  )
}
