import RegisterForm from "@/components/auth/RegisterForm";
import React from "react";

export const metadata = {
  title: "Register - Care.xyz",
  description: "Create an account to book caregiving services.",
};

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-10 px-4">
      <div className="w-full max-w-lg">
        {/* Registration Form Component */}
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;