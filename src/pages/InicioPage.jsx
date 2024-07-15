import { Link } from "react-router-dom"

export const InicioPage = () => {
  return (
    <>
    
    <div>InicioPage</div>
      <Link to='/compatibilidad'>
      Compatibilidad
      </Link> 
      

      <Link to='/login'>
      Login
      </Link> 


      <Link to='/register'>
      Register
      </Link> 


      <Link to='/inicio'>
      inicio
      </Link> 


      <Link to='/medicamentos'>
      medicamentos
      </Link> 
    </>
  )
}
