"use client";
import { registerUser } from "@/actions/auth";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner, FaUser, FaEnvelope, FaIdCard, FaPhone, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false); 

  const onSubmit = async (data) => {
    setErrorMsg("");
    setLoading(true);

    // Password Validation Logic
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(data.password)) {
      setErrorMsg("Password must be at least 6 characters long and contain at least one uppercase and one lowercase letter.");
      setLoading(false);
      return;
    }

    try {
      const response = await registerUser(data);
      if (response.success) {
        router.push("/login"); 
      } else {
        setErrorMsg(response.message);
      }
    } catch (err) {
      setErrorMsg("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full h-full bg-white">
      
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-black min-h-[800px] lg:min-h-auto order-2 lg:order-1">
        <Image 
          src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1468&auto=format&fit=crop"
          alt="Register Background"
          fill
          className="object-cover opacity-70"
        />
        <div className="relative z-10 flex flex-col justify-center px-12 text-white h-full">
          <h1 className="text-5xl font-bold mb-4 leading-tight">Join Our Family</h1>
          <p className="text-lg text-gray-200">
            "Create an account today and find the perfect care for your loved ones."
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12 bg-white order-1 lg:order-2 overflow-y-auto">
        <div className="w-full max-w-lg space-y-6">
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
            <p className="mt-2 text-gray-500">Fill in your details to get started</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            
        
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FaUser />
                  </div>
                  <input type="text" {...register("name", { required: true })} placeholder="John Doe" 
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all bg-gray-50 text-gray-900" />
                </div>
                {errors.name && <span className="text-red-500 text-xs mt-1">Name required</span>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FaEnvelope />
                  </div>
                  <input type="email" {...register("email", { required: true })} placeholder="john@example.com" 
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all bg-gray-50 text-gray-900" />
                </div>
                {errors.email && <span className="text-red-500 text-xs mt-1">Email required</span>}
              </div>

              {/* NID */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">NID Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FaIdCard />
                  </div>
                  <input type="text" {...register("nid", { required: true })} placeholder="National ID" 
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all bg-gray-50 text-gray-900" />
                </div>
                {errors.nid && <span className="text-red-500 text-xs mt-1">NID required</span>}
              </div>

              {/* Contact */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact No</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FaPhone />
                  </div>
                  <input type="text" {...register("contactNo", { required: true })} placeholder="017xxxxxxxx" 
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all bg-gray-50 text-gray-900" />
                </div>
                {errors.contactNo && <span className="text-red-500 text-xs mt-1">Contact required</span>}
              </div>
            </div>

            {/* Password Field (Full Width) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <FaLock />
                </div>
                <input 
                  type={showPassword ? "text" : "password"} 
                  {...register("password", { required: true })} 
                  placeholder="••••••••" 
                  className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all bg-gray-50 text-gray-900" 
                />
                {/* Toggle Icon */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">Must be 6+ chars, 1 Uppercase, 1 Lowercase</p>
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="p-3 rounded-lg bg-red-100 border border-red-200 text-red-600 text-sm text-center">
                {errorMsg}
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-2">
                <button disabled={loading} className="w-full py-3 px-4 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all flex justify-center items-center gap-2">
                {loading ? <FaSpinner className="animate-spin" /> : "Register"}
                </button>
            </div>
          </form>
          
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account? 
            <Link href="/login" className="font-bold text-rose-600 hover:text-rose-700 ml-1 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;