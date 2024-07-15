import { Navigate, Route, Routes } from "react-router-dom"
import { InicioPage } from "../pages/InicioPage"
import { FarmaRoute } from "../farma/routes/FarmaRoute"
import { LoginPage, RegisterPage } from "../auth/pages"
import { useSelector } from "react-redux"
import { estados } from "../store/slices/auth"
import { useCheckAuth } from "../auth/hooks/useCheckAuth"

export const AppRoute = () => {

    useCheckAuth()
    const status = useSelector(state => state.auth.estado);

    return (
    <Routes>

        {/* Rutas Publicas */}
        <Route path="/" element={<InicioPage />} />

        {/* Rutas Protegidas */}
        { 
            status === estados.autenticado ?
            <>
                <Route path="/*" element={<FarmaRoute />} />
                <Route path="/login" element={<Navigate to="/"/>} />
                <Route path="/register" element={<Navigate to='/' />} />

            </>
            : (
                <>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/*" element={<Navigate to="/" />} />
                </>
            )

        }    
    </Routes>
)
}
