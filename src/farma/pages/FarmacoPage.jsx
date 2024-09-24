import React from 'react'
import { useParams } from 'react-router-dom'

const FarmacoPage = () => {
    const {FarmaName}=useParams()
    console.log(FarmaName)
  return (
    <div>
      <h1>{FarmaName}</h1>
    </div>
  )
}

export default FarmacoPage
