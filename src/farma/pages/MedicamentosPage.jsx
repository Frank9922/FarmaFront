// import { useGetFarmacosQuery } from "../../store/apis/checkApi"

import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../../auth/hooks/useForm"
import { FarmaLayout } from "../layout/FarmaLayout"
import { insertFarmaco } from "../../store/slices/auth/thunks"
import { useState } from "react"
import { useGetFarmacosQuery } from "../../store/apis/checkApi"




const initialForm = {
    name: 'algo'
  }


export const MedicamentosPage = () => {

    const{name,onInputChange}= useForm(
        
        initialForm
    )

    
    const dispatch=useDispatch();
    const [algo,setAlgo]=useState(false);
    const {insertResponse}= useSelector(state => state.auth)
    const { data } = useGetFarmacosQuery();

    const onSumbit =async()=>{

        await dispatch(insertFarmaco(name))
        
    }
    // const algo = useGetFarmacosQuery()

  return (

    <FarmaLayout>

<div className="top-farmacos">
  <h1>Farmacos</h1>
  
  <button className="btn-farm" onClick={onSumbit}>
    <span className="material-symbols-outlined">add</span>
  </button>
</div>

    <label htmlFor="name">ingresa farmaco</label>
    <br />
    <input type="text" name="name" value={name} onChange={onInputChange} />
    <p>{name}</p>
<p>{ insertResponse === null ? 'no existe' : JSON.stringify(insertResponse)}</p>
    

            <div className="farmacos">
            <table>
                <thead>
                    <tr>
                        <th><h2>Nombre</h2></th>
                    </tr>
                </thead>
                <tbody>
                    { 
                    data.farmacos.map(
                        
                        (farmaco)=><tr>
                        <td>{farmaco.name}</td>
                    </tr>
                            
                )
                    
                    }
                   
                
                </tbody>
            </table>
    </div>
          
    </FarmaLayout>
  )
}
