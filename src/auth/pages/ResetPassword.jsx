import { useState } from "react";
import { AuthLayout } from "../../farma/layout/AuthLayout"
import { motion } from "framer-motion";
import { SendEmailForm } from "../components/SendEmailForm";
import { VerifyTokenForm } from "../components/VerifyTokenForm";
import { ResetPasswordForm } from "../components/ResetPasswordForm";
import { LoadingComponent } from "../../farma/components/LoadingComponent";
import { useSelector } from "react-redux";

export const ResetPassword = () => {

    const [step, setStep] = useState(1);

    const [email, setEmail] = useState();

    const {loaderResetPassword} = useSelector((state) => state.ui);

    const handleNext = () => {
        setStep((prev) => prev + 1);
    };

    const setFormEmail = (email) => {
        setEmail(email);
    }

  return (
    <AuthLayout>
        <motion.div
        key={step}
        initial={{ x: "20%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-20%", opacity: 0, transition: { duration: 0.2 } }}
        transition={{ delay: 0, duration: 0.2 }}
        >
            {
                loaderResetPassword ? (
                    <LoadingComponent />
                ) : (
                    <>
                        {step === 1 && <SendEmailForm onNext={handleNext} setEmail={setFormEmail} />}
                        {step === 2 && <VerifyTokenForm onNext={handleNext} />}
                        {step === 3 && <ResetPasswordForm email={email}/>}
                    </>
                )
            }

              

        </motion.div>

    </AuthLayout>
  )
}
