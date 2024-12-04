import { Navigate, Route, Routes } from "react-router-dom";
import { CompatibilidadPage } from "../pages/CompatibilidadPage";
import { MedicamentosPage } from "../pages/MedicamentosPage";
import { AcercadePage } from "../pages/AcercadePage";
import FarmacoPage from "../pages/FarmacoPage";
import { DilucionPage } from "../pages/DilucionPage";

export const FarmaRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/compatibilidad" />} />
      <Route path="/compatibilidad" element={<CompatibilidadPage />} />
      <Route path="/dilution" element={<DilucionPage />} />
      <Route path="/medicamentos" element={<MedicamentosPage />} />
      <Route path="/About" element={<AcercadePage />} />
      <Route path="/medicamento/:FarmaName" element={<FarmacoPage />} />
    </Routes>
  );
};
