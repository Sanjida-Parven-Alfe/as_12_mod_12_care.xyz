import RegisterForm from "@/components/auth/RegisterForm";
import React from "react";

export const metadata = {
  title: "Register - Care.xyz",
  description: "Create an account to book caregiving services.",
};

const RegisterPage = () => {
  return (
    <div className="w-full">
        <RegisterForm />
    </div>
  );
};

export default RegisterPage;