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

export const AcercadePage = () => {

   
    

  return (

    <FarmaLayout>

<h1>algo</h1>
  
    </FarmaLayout>
  )
}
