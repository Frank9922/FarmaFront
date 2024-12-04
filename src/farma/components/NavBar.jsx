import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/slices/auth/thunks";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { closeNavbar } from "../../store/slices/ui/uiSlice";
import { useEffect, useState } from "react";
import { PopUpAlert } from "./PopUpAlert";

export const NavBar = () => {
  const dispatch = useDispatch();

  const { menuOpen } = useSelector((state) => state.ui);
  const [openPopUp, setOpenPopUp] = useState(false);

  const onLogout = () => {
    dispatch(startLogout());
  };

  const onOpen = () => {
    setOpenPopUp(true);
  }

  const onClose = () => {
    setOpenPopUp(false);
  }

  const closeMenu = () => {
    dispatch(closeNavbar());
  };

  useEffect(() => {
    dispatch(closeNavbar());
  }, [dispatch]);

  useEffect(() => {

    const handleEscape = (event) => {
      if(event.key === 'Escape' ) {
        onClose();
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
        window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <>
    <aside style={{ display: menuOpen === "true" ? "block" : "" }}>
      <div className="top">
        <div className="logo">
          {/* <img src="" alt="" /> */}
          <h2 className="">
            <span className="danger">Enfar-MedGuide</span>
          </h2>
        </div>
        <div className="close" id="close-btn" onClick={closeMenu}>
          <span className="material-symbols-outlined">close</span>
        </div>
      </div>
      <div className="sidebar">
        <NavLink
          to="/compatibilidad"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <span className="material-symbols-outlined">compare</span>
          <h3>Compatibilidad</h3>
        </NavLink>
        <NavLink
          to="/medicamentos"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <span className="material-symbols-outlined">syringe</span>
          {/* vaccines  */}
          <h3>Farmacos</h3>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <span className="material-symbols-outlined">info</span>
          <h3>Acerca de</h3>
        </NavLink>
        <a onClick={onOpen}>
          <span className="material-symbols-outlined">logout</span>
          <h3>Salir</h3>
        </a>
      </div>
      <PopUpAlert 
      onClose={onClose} 
      isOpen={openPopUp} 
      title="¿Quiere cerrar sesion?" 
      footer 
      onEsquinaQuit={false} 
      textFirstButton="Cerrar Sesion" 
      textSecondButton="No"
      firstOnClick={onClose}
      secondOnClick={onLogout}
      />
    </aside>
    </>
  );
};
NavBar.propTypes = {
  isActiveMenu: PropTypes.bool,
};
