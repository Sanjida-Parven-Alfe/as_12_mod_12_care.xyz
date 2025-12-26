import LoginForm from "@/components/auth/LoginForm";
import React, { Suspense } from "react";

export const metadata = {
  title: "Login - Care.xyz",
  description: "Login to your account.",
};

const LoginPage = () => {
  return (
    <div className="w-full">
        <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
           <LoginForm />
        </Suspense>
    </div>
  );
};

export default LoginPage;