import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


export const MedicamentComponent = ( {medicament, openPopup, handleDelete, updateSkip, } ) => {

  const onDelete = (id) => {

    handleDelete(id);
    updateSkip(true);
  } 

  return (

    

    <div>
    {/* Verifica si medicament está vacío o no */}
    {medicament && Object.keys(medicament).length > 0 ? (
      // Renderiza esto si medicament tiene datos
      <div className="sales">

        <span className="material-symbols-outlined">mixture_med</span>
        <div className="middle">
          <div className="left">
            <h1>{medicament.name}</h1>
          </div>
          <div className="progreso">
            {medicament.accion_teraupetica}

          </div>
          <div>
            <NavLink to={`/medicamento/${medicament.name}`}>Mas info...</NavLink>
          </div>
        </div>
        <div className="close-farm" id="close-farm-btn">
          <span onClick={ () => onDelete(medicament.id) } className="material-symbols-outlined">close</span>
        </div>
      </div>
    ) : (
      // Renderiza esto si medicament está vacío
      <div className="nada">
      <h3>Click aqui para buscar un Farmaco</h3>
      <span onClick={openPopup} className="material-symbols-outlined pulse"></span>
    </div>
    )}

  </div>
    
  )
}

MedicamentComponent.propTypes = {
  medicament: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    accion_teraupetica: PropTypes.string
  }),
  updateSkip: PropTypes.func,
  openPopup: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,


}



