// import { useGetFarmacosQuery } from "../../store/apis/checkApi"

import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../../auth/hooks/useForm"
import { FarmaLayout } from "../layout/FarmaLayout"
import { insertFarmaco } from "../../store/slices/auth/thunks"
import { useState } from "react"
import { useGetFarmacosQuery } from "../../store/apis/checkApi"
import { PopUpAbm } from "../components/PopUpAbm"

const initialForm = {
    name: ''
  }

export const MedicamentosPage = () => {

    const dispatch = useDispatch();

    const [modal, setModal]=useState(null);

    const { modalAbm }= useSelector(state => state.ui)

    const { data, isFetching } = useGetFarmacosQuery();

    const { name, onInputChange } = useForm(initialForm)
    
    const onSumbit = async() => {

        await dispatch(insertFarmaco(name))
        
    }
    

  return (

    <FarmaLayout>

<div className="top-farmacos">
  <h1>Farmacos</h1>
  
  {/* <button className="btn-farm" onClick={setModal}>
    <span className="material-symbols-outlined">add</span>
  </button> */}
</div>

    {/* <label htmlFor="name">ingresa farmaco</label>
    <br />
    <input type="text" name="name" value={name} onChange={onInputChange} /> */}
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
                        
                        (farmaco)=><tr key={farmaco.id}><td>{farmaco.name}</td></tr>)
                    
                    }
                   
                
                </tbody>
            </table>
          
            {/* <PopUpAbm />  PopupAbm*/}
    </div>
}
          
    </FarmaLayout>
  )
}
