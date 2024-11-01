import { useDispatch } from "react-redux"
import { verifyTokenPassword } from "../../store/slices/auth/thunks"
import { useForm } from "../hooks/useForm"

const initialForm = {
    token: ""
}

const formValidation = {
    token: [(value) => value.length > 3, "El token debe ser mayor a tres caracteres."],
}



export const VerifyTokenForm = ({onNext}) => {

    const dispatch = useDispatch()

    const {token, tokenVlid, isFormValid, onInputChange} = useForm(initialForm, formValidation)


    const onClick = (e) => {
        e.preventDefault()

        if(!isFormValid) return

        dispatch(verifyTokenPassword(token))

        onNext();
    }


  return (
    <form onSubmit={onClick}>
    <div className="head-form">
        <h1>Recuperar Contraseña</h1>
        <div className="line"></div>
        <p>Por favor, introduzca el codigo que se envio por correo.</p>
        <p>Ten en cuenta que el envio puede demorar algunos minutos.</p>
    </div>

    <div className="body-form">

        <div className="datos">

            <input
            name="token" 
            type="text"
            value={token}
            onChange={onInputChange}
            />

        </div>
        
    </div>

    <div className="footer-form">
        <button >
            Verificar
        </button>
     </div>

</form>  
)
}
