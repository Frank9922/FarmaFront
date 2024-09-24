import React from 'react'
import { useParams } from 'react-router-dom'
import { FarmaLayout } from '../layout/FarmaLayout'
import { useGetFarmacoQuery } from '../../store/apis/checkApi'

const FarmacoPage = () => {
    const {FarmaName}=useParams()
    console.log(FarmaName)
    const {isFetching, data} =useGetFarmacoQuery(FarmaName)
    
    return (
    <FarmaLayout>
      <div>
      
      <h1>{FarmaName}</h1>
      {
         isFetching ? <div className="spinner"></div> : JSON.stringify(data)
      }
    </div>
    </FarmaLayout>
    
  )
}

export default FarmacoPage
