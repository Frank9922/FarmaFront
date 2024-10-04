import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "../../farma/layout/AuthLayout";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useForm } from "../hooks/useForm";
import { startLoginWithEmalAndPassword } from "../../store/slices/auth/thunks";
import { estados } from "../../store/slices/auth/estados";

const initialForm = {
  email: "",
};
const formValidation = {
  email: [(value) => value.includes("@"), "El correo debe tener una @"],
};
export const RecoverPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const dispatch = useDispatch();

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const { estado, errorResponse } = useSelector((state) => state.auth);

  const { email, emailValid, onInputChange } = useForm(
    initialForm,
    formValidation
  );

  const [formSubmitted, setformSubmitted] = useState(false);

  return (
    <AuthLayout>
      <motion.div
        initial={{ x: "20%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-20%", opacity: 0, transition: { duration: 0.2 } }}
        transition={{ delay: 0, duration: 0.2 }}
      >
        <form>
          <div className="head-form">
            <h1>Recupera tu cuenta</h1>
            <div className="line"></div>
            <p>
              Por favor, ingresa tu correo regristrado para buscar tu cuenta.
            </p>
          </div>
          <div className="body-form">
            <div className="datos">
              <input
                name="email"
                type="email"
                value={email}
                autoComplete="username"
                placeholder="E-mail"
                onChange={onInputChange}
                className={` ${!!emailValid && formSubmitted ? "error" : ""}`}
              />

              <div
                className={`error-form-alert ${errorResponse ? "show" : ""}`}
              >
                {errorResponse?.email && `${errorResponse.email}`}
              </div>
            </div>
            <div className="footer-form">
              <button className="btn" disabled={estado === "checking"}>
                {estado === "checking" ? (
                  <div className="spinner"></div>
                ) : (
                  "Recuperar"
                )}
              </button>
              <Link className="farmaLink" to="/login">
                Regresar
              </Link>
            </div>
          </div>
        </form>
        <div className="alerta">
          <div className="message">
            <h5>Usuario o contraseña icorrectos</h5>
          </div>
        </div>
      </motion.div>
    </AuthLayout>
  );
};
