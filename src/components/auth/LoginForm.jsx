"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner, FaGoogle } from "react-icons/fa";

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

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
    <div className="card w-full max-w-sm shadow-2xl bg-base-100 mx-auto my-10 border border-gray-200">
      <div className="card-body">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">Login</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="form-control">
            <label className="label"><span className="label-text font-semibold">Email</span></label>
            <input type="email" {...register("email", { required: true })} placeholder="email@example.com" className="input input-bordered" />
            {errors.email && <span className="text-red-500 text-xs">Email is required</span>}
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text font-semibold">Password</span></label>
            <input type="password" {...register("password", { required: true })} placeholder="********" className="input input-bordered" />
            {errors.password && <span className="text-red-500 text-xs">Password is required</span>}
          </div>

          {errorMsg && <p className="text-red-500 text-sm text-center">{errorMsg}</p>}

          <div className="form-control mt-6">
            <button disabled={loading} className="btn btn-primary text-white">
              {loading ? <FaSpinner className="animate-spin" /> : "Login"}
            </button>
          </div>
        </form>

        <div className="divider">OR</div>

        <button onClick={handleGoogleLogin} className="btn btn-outline w-full flex items-center gap-2">
           <FaGoogle className="text-red-500" /> Login with Google
        </button>

        <p className="text-center mt-4">
          New here? <Link href="/register" className="text-primary font-bold link">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;