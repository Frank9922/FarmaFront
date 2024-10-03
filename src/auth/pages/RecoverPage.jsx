import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "../../farma/layout/AuthLayout";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useForm } from "../hooks/useForm";
import { startLoginWithEmalAndPassword } from "../../store/slices/auth/thunks";
import { estados } from "../../store/slices/auth/estados";

export const RecoverPage = () => {
  return (
    <AuthLayout>
      <h1>Algo</h1>
    </AuthLayout>
  );
};
