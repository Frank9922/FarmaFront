import { Navigate, Route, Routes } from "react-router-dom"
import { CompatibilidadPage } from "../pages/CompatibilidadPage"
import { MedicamentosPage } from "../pages/MedicamentosPage"

export const FarmaRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to='/compatibilidad' /> } />
        {/* <Route path="/inicio" element={<InicioFarmaPage />} /> */}
        <Route path="/compatibilidad" element={<CompatibilidadPage />}/>
        <Route path="/medicamentos" element={<MedicamentosPage />} />
    </Routes>
)
}
