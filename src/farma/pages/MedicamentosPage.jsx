import { FarmaLayout } from "../layout/FarmaLayout"
import { useGetFarmacosQuery } from "../../store/apis/checkApi"
import { NavLink } from "react-router-dom"

export const MedicamentosPage = () => {

    const { data, isFetching } = useGetFarmacosQuery();

  return (

    <FarmaLayout>

      <>
      

    <div className="top-farmacos">
      <h1>Farmacos</h1>
    </div>

        {isFetching ? <div className="spinner"></div> : 
                  <div className="farmacos">

                  <table>
                      <thead>
                          <tr>
                              <th><h2>Nombre</h2></th>
                          </tr>
                      </thead>
                      <tbody>

                          { 
                          
                          
                          data.farmacos && data.farmacos.map(
                              
                              (farmaco)=>
                              <tr key={farmaco.id}>
                                <td><NavLink className="farmaLink" to={`/medicamento/${farmaco.name}`}>{farmaco.name} </NavLink></td>
                              </tr>)
                          
                          }
                        
                      </tbody>
                  </table>
          </div>
      }
    </>
    </FarmaLayout>
  )
}
