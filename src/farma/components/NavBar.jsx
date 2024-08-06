import { useDispatch } from "react-redux"
import { startLogout } from "../../store/slices/auth/thunks"
import { Link } from "react-router-dom"

export const NavBar = () => {

    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(startLogout());
    }

  return (
    <aside>
    <div className="top">
      <div className="logo">
        <img src="log3-removebg-preview.png" alt="" />
        <h2 className=""><span className="danger">LOGO</span></h2>
      </div>
      <div className="close" id="close-btn">
        <span className="material-symbols-outlined">close</span>
      </div>
    </div>
      <div className="sidebar">
        <Link to='/compatibilidad' className="active">
          <span className="material-symbols-outlined">compare</span>
          <h3>Compatibilidad</h3>
        </Link>
        <Link to='/medicamentos'>
          <span className="material-symbols-outlined">syringe</span>
           {/* vaccines  */}
          <h3>Farmacos</h3>
        </Link>
        <a onClick={onLogout}>
          <span className="material-symbols-outlined">logout</span>
          <h3>Salir</h3>
        </a>
      </div>
  </aside>

)
}
