import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/slices/ui/uiSlice";
import { HistorialResultados } from "./HistorialResultados";

export const RightComponent = () => {

    const dispatch = useDispatch(); 

    const theme = useSelector(state => state.ui.theme)

    const user = useSelector(state => state.auth)
    

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
      <div className="theme-toggler" onClick={onThemeToggler}>
        <span className={`material-symbols-outlined ${theme === 'light' ? 'active' : ''}`}>light_mode</span>
        <span className={`material-symbols-outlined ${theme === 'dark' ? 'active' : ''}`}>dark_mode</span>
      </div>
      <div className="profile">
        <div className="info">
          <b>{abbreviateName(user.displayName)}</b>
        </div>
          
            {
              user.photoUrl == '' ? <div className="profile-photo"> <img src={user.photoUrl} alt=""/> </div> : null
            }
          
        
      </div>
    </div>
          <HistorialResultados />
  </div>


)
}
