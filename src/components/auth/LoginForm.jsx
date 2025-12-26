"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"; 

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (res.error) {
        setErrorMsg("Invalid email or password");
        setLoading(false);
      } else {
        router.push(callbackUrl);
      }
    } catch (err) {
      setErrorMsg("Something went wrong");
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl });
  };

  return (
    <div className="flex flex-col lg:flex-row w-full h-full bg-white">
      
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-black min-h-[600px] lg:min-h-auto order-2 lg:order-1">
        <Image 
          src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1470&auto=format&fit=crop"
          alt="Login Background"
          fill

          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          className="object-cover opacity-70"
        />
        <div className="relative z-10 flex flex-col justify-center px-12 text-white h-full">
          <h1 className="text-5xl font-bold mb-4 leading-tight">Welcome Back!</h1>
          <p className="text-lg text-gray-200">
            "We are here to ensure your loved ones get the best care possible."
          </p>
        </div>
      </div>

  
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 bg-white order-1 lg:order-2">
        <div className="w-full max-w-md space-y-6">
          
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Sign in</h2>
            <p className="mt-2 text-gray-500">Access your account to manage services</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
            
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input 
                  type="email" 
                  {...register("email", { required: true })} 
                  placeholder="name@example.com" 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all bg-gray-50 text-gray-900" 
                />
              </div>
              {errors.email && <span className="text-red-500 text-xs mt-1">Email is required</span>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                
                <input 
                  type={showPassword ? "text" : "password"} 
                  {...register("password", { required: true })} 
                  placeholder="••••••••" 
                  className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all bg-gray-50 text-gray-900" 
                />

                {/* Eye Icon Button */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </button>
              </div>
              {errors.password && <span className="text-red-500 text-xs mt-1">Password is required</span>}
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="p-3 rounded-lg bg-red-100 border border-red-200 text-red-600 text-sm text-center">
                {errorMsg}
              </div>
            )}

            {/* Submit Button */}
            <button 
              disabled={loading} 
              className="w-full py-3 px-4 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all flex justify-center items-center gap-2"
            >
              {loading ? <FaSpinner className="animate-spin" /> : "Sign In"}
            </button>
          </form>

          {/* Social Login */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <button 
            onClick={handleGoogleLogin} 
            className="w-full py-3 px-4 border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-all text-gray-700 font-medium"
          >
             {/* Real Google Icon Updated */}
             <FcGoogle size={24} /> 
             Sign in with Google
          </button>

          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account? 
            <Link href="/register" className="font-bold text-rose-600 hover:text-rose-700 ml-1 hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;