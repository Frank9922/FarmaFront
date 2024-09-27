import { useEffect, useState } from "react";
import { useGetCompaQuery, useGetFarmacosQuery } from "../../store/apis/checkApi"
import { FarmaLayout } from "../layout/FarmaLayout"
import { MedicamentComponent } from "../components/MedicamentComponent";
import { PopUp } from "../components/PopUp";
import { ResultadoComparacion } from "../components/ResultadoComparacion";
import { useDispatch } from "react-redux";
import { setHistorial } from "../../store/slices/ui/thunks";

export const CompatibilidadPage = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const dispatch = useDispatch();

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };


  const [farmacos, setFarmacos] = useState([])


  const updateSkip = (shouldSkip) => {
    setskip(shouldSkip);
  }
 
  const { data } = useGetFarmacosQuery();


  
  const [inputValue] = useState(null)


  const loadOptions = async(searchValue, callback) => {


    const filterOptions = data.farmacos.filter(farmaco => farmaco.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))

    callback(filterOptions)


  }

  const onSelect = (value) => {

    if(farmacos.length <= 1) {
      setFarmacos([...farmacos, value])
      closePopup();

    }


  }

  const handleDelete = (id) => {

      setFarmacos(farmacos.filter(farmaco => farmaco.id !== id))

  }


  const [skip, setskip] = useState(true)

  const { data: compa, isFetching } = useGetCompaQuery(farmacos, { skip: skip});

  const handleCompa = () => {

    if(farmacos.length < 2) return 
    
    setskip(false);


  }

  useEffect(() => {

      if(!skip && !isFetching) {
        dispatch(setHistorial(compa));
      }

  }, [isFetching, compa, skip, dispatch])

  const firstMedicament = farmacos.length > 0 ? farmacos[0] : null;
  const secondMedicament = farmacos.length > 1 ? farmacos[1] : null;

 
  return (
    <FarmaLayout>
      <>
      
          <div className="search">

            <h1>Compatibilidad</h1>
          </div>
          
          <div className="prueba">

            <div className="insights">

              <MedicamentComponent 
              openPopup={openPopup}
              medicament={firstMedicament}
              handleDelete={handleDelete}
              updateSkip={updateSkip}
              
              />

              <MedicamentComponent 
              openPopup={openPopup}
              medicament={secondMedicament}
              handleDelete={handleDelete}
              updateSkip={updateSkip}

              />

            </div>


            <div className="buscar">
            <button onClick={handleCompa}>
              {
                isFetching ? <div className="spinner"></div> : <span className="btn-text">Comparar</span>
              }
            </button>
          </div>
          {
            isFetching ? '' : compa ? <ResultadoComparacion compa={compa.compatibilidad} /> : null
          }
          </div>

          {isPopupOpen && <PopUp farmacos={farmacos} inputValue={inputValue} loadOptions={loadOptions} onClose={closePopup} onSelect={onSelect} />}
      </>
    </FarmaLayout>
  )
}
