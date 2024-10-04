import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { FarmaRoute } from "../farma/routes/FarmaRoute"
import { LoginPage, RegisterPage } from "../auth/pages"
import { useSelector } from "react-redux"
import { estados } from "../store/slices/auth"
import { useCheckAuth } from "../auth/hooks/useCheckAuth"
import { AnimatePresence } from "framer-motion"
import { LoadingComponent } from "../farma/components/LoadingComponent"
import { motion } from "framer-motion"


export const AppRoute = () => {

    useCheckAuth()
    
    const status = useSelector(state => state.auth.estado);
    const { loaderGeneral } = useSelector(state => state.ui);
    const location = useLocation();

    if(loaderGeneral) {
        
        return (<AnimatePresence>
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    >
                        <LoadingComponent />
                    </motion.div>
                    
                </AnimatePresence>)
    }

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                
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
                                <Route path="/*" element={<Navigate to="/login" />} />
                                <Route path="/login" element={<LoginPage />} />
                                <Route path="/register" element={<RegisterPage />} />
                                
                            </>
                        )

                    }    
                    </Routes>
        </AnimatePresence>

)
}
