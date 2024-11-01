import { useDispatch } from "react-redux"
import { sendEmailResetPassword } from "../../store/slices/auth/thunks";
import { useForm } from "../hooks/useForm";


const initialForm = {
    email: ""
}

const formValidation = {
    email: [(value) => value.includes("@"), "El correo debe tener una @"],
}



export const SendEmailForm = ({onNext, setEmail}) => {

    const dispatch = useDispatch();

    const { email, emailValid, isFormValid, onInputChange} = useForm(initialForm, formValidation)


    const onSubmit = (e) => {
        e.preventDefault();

        if(!isFormValid) return

        dispatch(sendEmailResetPassword(email));

        setEmail(email)

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
        
    </div>

    <div className="footer-form">
        <button >
            Restablecer contraseña
        </button>
     </div>

</form>
  )
}
