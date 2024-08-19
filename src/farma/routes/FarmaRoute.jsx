import { Navigate, Route, Routes } from "react-router-dom"
import { CompatibilidadPage } from "../pages/CompatibilidadPage"
import { MedicamentosPage } from "../pages/MedicamentosPage"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { toggleMenu } from "../../store/slices/ui/uiSlice"

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
        
    </Routes>
)
}
