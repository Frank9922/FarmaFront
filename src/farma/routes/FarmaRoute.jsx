import { Navigate, Route, Routes } from "react-router-dom"
import { CompatibilidadPage } from "../pages/CompatibilidadPage"
import { MedicamentosPage } from "../pages/MedicamentosPage"
import { AcercadePage } from "../pages/AcercadePage"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { toggleMenu } from "../../store/slices/ui/uiSlice"
import FarmacoPage from "../pages/FarmacoPage"

export const FarmaRoute = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(toggleMenu());
}, [dispatch])

  return (
    <Routes>

        <Route path="/" element={<Navigate to='/compatibilidad' /> } />
        <Route path="/compatibilidad" element={<CompatibilidadPage />}/>
        <Route path="/medicamentos" element={<MedicamentosPage />} />
        <Route path="/About" element={<AcercadePage />} />
        <Route path="/medicamento/:FarmaName"element={<FarmacoPage/>}/>
    </Routes>
)
}
