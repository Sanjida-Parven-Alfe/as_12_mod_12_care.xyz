"use client";
import { registerUser } from "@/actions/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (data) => {
    setErrorMsg("");
    setLoading(true);

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
    <div className="card w-full max-w-lg shadow-2xl bg-base-100 mx-auto my-10 border border-gray-200">
      <div className="card-body">
        <h2 className="text-3xl font-bold text-center text-primary mb-4">Register</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label"><span className="label-text font-semibold">Name</span></label>
              <input type="text" {...register("name", { required: true })} placeholder="Full Name" className="input input-bordered" />
              {errors.name && <span className="text-red-500 text-xs mt-1">Name is required</span>}
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text font-semibold">Email</span></label>
              <input type="email" {...register("email", { required: true })} placeholder="email@example.com" className="input input-bordered" />
              {errors.email && <span className="text-red-500 text-xs mt-1">Email is required</span>}
            </div>
          </div>

          {/* NID & Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label"><span className="label-text font-semibold">NID No</span></label>
              <input type="text" {...register("nid", { required: true })} placeholder="National ID" className="input input-bordered" />
              {errors.nid && <span className="text-red-500 text-xs mt-1">NID is required</span>}
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text font-semibold">Contact No</span></label>
              <input type="text" {...register("contactNo", { required: true })} placeholder="Phone Number" className="input input-bordered" />
              {errors.contactNo && <span className="text-red-500 text-xs mt-1">Contact is required</span>}
            </div>
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label"><span className="label-text font-semibold">Password</span></label>
            <input type="password" {...register("password", { required: true })} placeholder="********" className="input input-bordered" />
            <label className="label">
              <span className="label-text-alt text-gray-500">Must be 6+ chars, 1 Uppercase, 1 Lowercase</span>
            </label>
          </div>

          {errorMsg && <p className="text-red-500 text-sm text-center">{errorMsg}</p>}

          <div className="form-control mt-6">
            <button disabled={loading} className="btn btn-primary text-white">
              {loading ? <FaSpinner className="animate-spin" /> : "Register"}
            </button>
          </div>
        </form>
        
        <p className="text-center mt-2">
          Already have an account? <Link href="/login" className="text-primary font-bold link">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;