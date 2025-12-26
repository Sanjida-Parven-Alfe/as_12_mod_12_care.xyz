import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="hero min-h-[80vh]" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
      <div className="hero-overlay bg-opacity-60 bg-black"></div>
      <div className="hero-content text-center text-neutral-content py-20">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl md:text-6xl font-bold leading-tight text-white">Your Loved Ones, Our Priority.</h1>
          <p className="mb-8 text-lg text-gray-200">Find trusted and professional care services for children, elderly, and family members. Making caregiving easy, secure, and accessible for everyone.</p>
          <Link href="/services" className="btn btn-primary btn-lg text-white border-none shadow-lg hover:-translate-y-1 transition-all">Find a Caretaker</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;