import { Link } from "react-router-dom"
import { AuthLayout } from "../../farma/layout/AuthLayout"
import { motion } from "framer-motion"

export const RegisterPage = () => {
  return (
    <AuthLayout>
        <motion.div
        initial={{ x: "20%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-20%", opacity: 0, transition: { duration: 0.2 } }}
        transition={{ delay: 0, duration: 0.2 }}
        >
        <form>
                <div className="head-form">
                    <h1>Crear cuenta</h1>
                    <div className="line"></div>
                    <p>Por favor, rellene todos los campos.</p>
                </div>
                <div className="body-form">
                    <div className="datos">
                        <input type="text" name="nombre" id="" placeholder="Nombre" />
                        <input type="text" name="apellido" id="" placeholder="Apellido" />
                    </div>
                    <input type="text" name="user" id="user" placeholder="Usuario"/>
                    <input type="mail" name="mail" id="mail" placeholder="E-mail"/>
                    <input type="password" name="pass" id="pass" placeholder="Contraseña" />
                    <input type="password" name="pass" id="pass" placeholder="Confirmar Contraseña" />

                </div>
                <div className="footer-form">
                    <button>Enviar</button>
                </div>
                <div className="body-form">
                  <Link to='/login'>¿Ya tienes una cuenta? Inicia Sesion</Link>
                </div>

        </form>
            <div className="alerta">
                <div className="message">
                    <h5>Usuario o contraseña icorrectos</h5>
                </div>
            </div>
        </motion.div>

    </AuthLayout>
  )
}
