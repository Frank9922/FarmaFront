import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../hooks/useForm"
import { changeResetPassword } from "../../store/slices/auth/thunks"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"



const formValidation = {
    password: [(value) => value.length > 6,"La contraseña debe tener al menos 6 caracteres"],
    re_password: [(value) => value.length > 6,"La contraseña debe tener al menos 6 caracteres"]
}

const initialForm = {
    email: '',
    password: '',
    re_password: ''
}


export const ResetPasswordForm = ({email}) => {

    useEffect(() => {

      initialForm.email = email;

    }, [email])
    


    const { password, passwordValid, re_password, re_passwordValid, passwordMatch, formState, onInputChange} = useForm(initialForm, formValidation)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { resetPassword } = useSelector((state) => state.ui)


    const onSubmit = async(e) => {

        e.preventDefault()

        await dispatch(changeResetPassword(formState));

        if(resetPassword){
            navigate("/login");
        }
    }

    useEffect(() => {
        if (resetPassword) {
            navigate("/login");
        }
    }, [resetPassword, navigate]); 



  return (
    <form onSubmit={onSubmit}>

    <div className="head-form">
        <h1>Recuperar Contraseña</h1>
        <div className="line"></div>
        <p>Introduzca su nueva contraseña</p>
    </div>

    <div className="body-form">

        <div className="datos">

            <input
            name="email" 
            type="hidden"
            value={email}
            onChange={onInputChange}            
            />

        </div>

        <div className="datos">

            <input
            name="password" 
            type="password"
            placeholder="contraseña"
            value={password}
            onChange={onInputChange}
            />

        </div>

        <div className="datos">

            <input
            name="re_password" 
            type="password"
            placeholder="repita su contraseña"
            value={re_password}
            onChange={onInputChange}
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
