// import { useGetFarmacosQuery } from "../../store/apis/checkApi"

import { FarmaLayout } from "../layout/FarmaLayout"

export const MedicamentosPage = () => {

    // const algo = useGetFarmacosQuery()

  return (

    <FarmaLayout>
<div className="top-farmacos">
  <h1>Farmacos</h1>
  <button className="btn-farm">
    <span className="material-symbols-outlined">add</span>
  </button>
</div>
            
            <div className="farmacos">
        <table>
            <thead>
                <tr>
                    <th><h2>Nombre</h2></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>farmaco</td>
                </tr>
                <tr>
                    <td>farmaco</td>
                </tr>
                <tr>
                    <td>farmaco</td>
                </tr>
                <tr>
                    <td>farmaco</td>
                </tr>
                <tr>
                    <td>farmaco</td>
                </tr>
            </tbody>
            </table>
    </div>
          
    </FarmaLayout>
  )
}
