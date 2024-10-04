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
  password: "",
};

const formValidation = {
  email: [(value) => value.includes("@"), "El correo debe tener una @"],
  password: [
    (value) => value.length > 3,
    "La contraseña debe tener al menos 6 caracteres",
  ],
};

export const LoginPage = () => {
  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth);

  const [errorLogin, setErrorLogin] = useState(auth?.errorResponse || false)

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    email,
    emailValid,
    password,
    passwordValid,
    formState,
    isFormValid,
    onInputChange,
  } = useForm(initialForm, formValidation);

  const onSumbit = async (event) => {
    event.preventDefault();

    setFormSubmitted(true);

    if (!isFormValid) return;

    await dispatch(startLoginWithEmalAndPassword(formState));
    
    if (auth.estado === estados.autenticado) navigate("/compatibilidad");

    setErrorLogin(auth?.errorResponse)
  };

  return (
    <AuthLayout>
      <motion.div
        initial={{ x: "20%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-20%", opacity: 0, transition: { duration: 0.2 } }}
        transition={{ delay: 0, duration: 0.2 }}
      >
        {" "}
        <form onSubmit={onSumbit}>
          <div className="head-form">
            <h1>Inicio de Sesion</h1>
            <div className="line"></div>
          </div>

          <div className="body-form">
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              disabled={auth.estado === "checking"}
              onChange={onInputChange}
              className={` ${!!emailValid && formSubmitted ? "error" : ""}`}
              placeholder="Email"
            />

            <input
              type="password"
              name="password"
              autoComplete="password"
              disabled={auth.estado === "checking"}
              value={password}
              onChange={onInputChange}
              className={` ${!!passwordValid && formSubmitted ? "error" : ""}`}
              placeholder="Contraseña"
            />

            <div
              className={`error-form-alert ${
                !isFormValid && formSubmitted ? "show" : ""
              }`}
            >
              Por favor complete los campos obligatorios
            </div>

                <div className={`error-form-alert ${errorLogin ? 'show' : ''}`}>

                    {auth?.errorResponse}
                    
                </div>
          </div>



          <div className="footer-form">
            <button disabled={auth.estado === "checking"}>
              {auth.estado === "checking" ? (
                <div className="spinner"></div>
              ) : (
                "Iniciar Sesion"
              )}
            </button>
          </div>

          <div className="body-form">
            <Link className="farmaLink" to="/register">
              ¿No tienes cuenta? Create una
            </Link>
          </div>
        </form>

      </motion.div>
    </AuthLayout>
  );
};
