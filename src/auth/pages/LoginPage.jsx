import { Link } from "react-router-dom"
import { AuthLayout } from "../../farma/layout/AuthLayout"
import { motion } from "framer-motion"



export const LoginPage = () => {
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
                    <h1>Inicio de Sesion</h1>
                    <div className="line"></div>
                </div>
                <div className="body-form">
                    <input type="text" name="user" id="user" placeholder="Usuario" />
                    <input type="password" name="pass" id="pass" placeholder="Contraseña" />
                </div>
                <div className="footer-form">
                    <button>Iniciar</button>
                </div>
                <div className="body-form">
                  <Link to='/register'>¿No tienes cuenta? Create una</Link>
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
