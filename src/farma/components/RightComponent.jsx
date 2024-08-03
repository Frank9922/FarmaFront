import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/slices/ui/uiSlice";

export const RightComponent = () => {

    const theme = useSelector(state => state.ui.theme)
    const user = useSelector(state => state.auth)
    const dispatch = useDispatch(); 

    const abbreviateName = (fullName) => {
        const names = fullName.split(' ');
        return `${names[0]} ${names[names.length - 1]}`;
      }
    
    

    useEffect(() => {


       document.body.classList.toggle('dark-theme-variables', theme === 'dark');
      


    }, [theme])

const onThemeToggler = () => {

  dispatch(toggleTheme());

} 



  return (
<div className="right">
  <div className="top">
    <button id="menu-btn">
      <span className="material-symbols-outlined">menu</span>
    </button>
    <div onClick={onThemeToggler} className="theme-toggler">
      <span className={`material-symbols-outlined ${theme === 'light' ? 'active' : ''}`}>light_mode</span>
      <span className={`material-symbols-outlined ${theme === 'dark' ? 'active' : ''}`}>dark_mode</span>
    </div>
    <div className="profile">
      <div className="info">
        <b>{ abbreviateName(user.displayName)} </b> -
        <small className="text-muted">admin</small>
      </div>
      <div className="profile-photo">
        <img src={user.photoUrl} alt=""/>
      </div>
    </div>
  </div>
   {/* FINT TOP  */}
  <div className="recent-updates">
    <h2>Busquedas Recientes</h2>
      <div className="updates">
        <div className="update">
          <div className="profile-photo"><img src="perfil.jpg" alt=""/></div>
          <div className="message">
            <p><b>TuVieja</b>Lorem ipsum dolor, sit amet. Temporibus impedit eius
               nulla ut quod cupiditate est,</p>
              <small className="text-muted">2 hace 2 min</small>
          </div>
        </div>
        <div className="update">
          <div className="profile-photo"><img src="perfil.jpg" alt=""/></div>
          <div className="message">
            <p><b>TuVieja</b>Lorem ipsum dolor, sit amet. Temporibus impedit eius
               nulla ut quod cupiditate est,</p>
              <small className="text-muted">2 hace 2 min</small>
          </div>
        </div>
        <div className="update">
          <div className="profile-photo"><img src="perfil.jpg" alt=""/></div>
          <div className="message">
            <p><b>TuVieja</b>Lorem ipsum dolor, sit amet. Temporibus impedit eius
               nulla ut quod cupiditate est,</p>
              <small className="text-muted">2 hace 2 min</small>
          </div>
        </div>
     
      </div>
    
  </div>
</div>


)
}
