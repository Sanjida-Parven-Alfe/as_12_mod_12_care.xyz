import LoginForm from "@/components/auth/LoginForm";
import React, { Suspense } from "react";

export const metadata = {
  title: "Login - Care.xyz",
  description: "Login to your account.",
};

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-10 px-4">
      <div className="w-full max-w-sm">
        <Suspense fallback={<div className="text-center">Loading Login Form...</div>}>
           {/* Login Form Component */}
           <LoginForm />
        </Suspense>
      </div>
    </div>
  );
};

export default LoginPage;