import { Route, Routes } from "react-router-dom"
import { InicioFarmaPage } from "../pages/InicioFarmaPage"
import { CompatibilidadPage } from "../pages/CompatibilidadPage"
import { MedicamentosPage } from "../pages/MedicamentosPage"

export const FarmaRoute = () => {
  return (
    <Routes>
        <Route path="/inicio" element={<InicioFarmaPage />} />
        <Route path="/compatibilidad" element={<CompatibilidadPage />}/>
        <Route path="/medicamentos" element={<MedicamentosPage />} />
    </Routes>
)
}
