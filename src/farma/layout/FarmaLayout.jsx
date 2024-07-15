
export const FarmaLayout = () => {
  return (
    <div className="container-farma">
       {/* MENU  */}
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
            <a href="#" className="active">
              <span className="material-symbols-outlined">compare</span>
              <h3>Compatibilidad</h3>
            </a>
            <a href="#">
              <span className="material-symbols-outlined">syringe</span>
               {/* vaccines  */}
              <h3>Farmacos</h3>
            </a>
            <a href="#">
              <span className="material-symbols-outlined"></span>
              <h3>Pefil</h3>
            </a>
          </div>
      </aside>
 {/* FIN MENU 
 DASHBOARD  */}

<main>
  <div className="search">
    <h1>Dhasboard</h1>
    <div className="buscador">
      <label ><span className="material-symbols-outlined">search</span></label>
      <input type="search" name="search" id="search" placeholder="Busca un farmaco ..." />
    </div>
  </div>
  <div className="prueba">
    <div className="insights">
      <div className="sales">
        <span className="material-symbols-outlined">mixture_med</span>
        <div className="middle">
          <div className="left">
            <h3>Farmaco A</h3>
            <h1>Farmaco A</h1>
          </div>
          <div className="progreso">
            Informacion del Farmaco A
            <div className="number">
              <p>70c</p>
            </div>
          </div>
        </div>
        <small className="text-muted">eliminar</small>
      </div>
       {/* FIN DE SALES  */}
      <div className="expenses">
        <span className="material-symbols-outlined">mixture_med</span>
        <div className="middle">
          <div className="left">
            <h3>Farmaco B</h3>
            <h1>Farmaco B</h1>
          </div>
          <div className="progreso">
             <svg>
              <circle cx="38" cy="38" r="36"></circle>
            </svg> 
            Informacion del Farmaco B
            <div className="number">
              <p>50%</p>
            </div>
          </div>
        </div>
        <small className="text-muted">?</small>
      </div>
       {/* FIN DE EXPENSES  */}
    </div>
    <div className="recent-orders">
      <h2>Resultado</h2>
        <span className="material-symbols-outlined">monitoring</span>
        <div className="middle">
          <div className="left">
            <h3>Compatible</h3>
            <h1>Compatible</h1>
          </div>
          <div className="progreso">
           informacion
             <div className="number">
              <p>50%</p>
            </div> 
          </div>
        </div>
         <small className="text-muted">Last 24 hours</small> 
    </div>
  </div>
 
</main>


{/* FIN DE DMAIN */}
<div className="right">
  <div className="top">
    <button id="menu-btn">
      <span className="material-symbols-outlined">menu</span>
    </button>
    <div className="theme-toggler">
      <span className="material-symbols-outlined active">light_mode</span>
      <span className="material-symbols-outlined">dark_mode</span>
    </div>
    <div className="profile">
      <div className="info">
        <b>Nombre</b> -
        <small className="text-muted">admin</small>
      </div>
      <div className="profile-photo">
        <img src="https://th.bing.com/th/id/OIP.RCPuxRTVUoCU9r6jmV2h3QAAAA?rs=1&pid=ImgDetMain" alt=""/>
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
     </div>

)
}
