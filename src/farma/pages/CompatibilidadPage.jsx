import { useState } from "react";
import { useGetCompaQuery, useGetFarmacosQuery } from "../../store/apis/checkApi"
import { FarmaLayout } from "../layout/FarmaLayout"
import Select from 'react-select/async'
import { ChipComponent } from "../components/ChipComponent";
import { MedicamentComponent } from "../components/MedicamentComponent";

export const CompatibilidadPage = () => {

  const [farmacos, setFarmacos] = useState([])

  const [skip, setskip] = useState(true)

  const { data } = useGetFarmacosQuery();

  const { data: Compa } = useGetCompaQuery(farmacos, { skip: skip});
  
  const [inputValue, setinputValue] = useState(null)


  const loadOptions = async(searchValue, callback) => {


    const filterOptions = data.farmacos.filter(farmaco => farmaco.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))

    callback(filterOptions)

  }

  const onSelect = (value) => {

    if(farmacos.length <= 1) {
      setFarmacos([...farmacos, value])

    }


  }

  const handleDelete = (id) => {

      setFarmacos(farmacos.filter(farmaco => farmaco.id !== id))

  }

  const handleCompa = () => {

      setskip(false);
      setTimeout(() => {
        
        setskip(true);
      }, 500);


  }
 
  return (
    <FarmaLayout>
          <div className="search">

            <h1>Dhasboard</h1>

              {/* <div className="buscador">

                <Select
                isDisabled={farmacos.length >= 2}
                loadOptions={loadOptions}
                className="select-options"
                value={inputValue}
                defaultOptions
                onChange={onSelect}
                />

              </div>
              <div className="contenedor-chips">
                {
                  farmacos.map((farmaco) => 
                    <ChipComponent 
                      key={farmaco.id} 
                      name={farmaco.label} 
                      id={farmaco.id}
                      onDelete={handleDelete}
                  />
                  )

                }
              </div> */}

          </div>
    <div className="prueba">
      <div className="insights">
        
        <MedicamentComponent />


        <MedicamentComponent />

      </div>
      <div className="buscar">
        <button onClick={handleCompa}>Comparar</button>
      </div>
      <div className="recent-orders compatible">
        <div className="head-result">
          <span className="material-symbols-outlined">monitoring</span>
          <h2>Resultado</h2>
        </div>
          <div className="middle">
            <div className="left">
              <h1>Compatible</h1>
            </div>
            <div className="progreso">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti consectetur exercitationem illo porro nihil alias aperiam. Id laboriosam deleniti nostrum quas fugit, ea incidunt, recusandae necessitatibus neque porro perferendis itaque?
            </div>
          </div>
      </div>
    </div>
    </FarmaLayout>
  )
}
