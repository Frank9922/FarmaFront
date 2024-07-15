import { Link } from "react-router-dom"
import { AuthLayout } from "../../farma/layout/AuthLayout"

export const LoginPage = () => {
  return (
    <AuthLayout>
      <>
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
      </>
    </AuthLayout>
  )
}
