import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-5 md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItems.map((item) => (
              <li key={item.path}><Link href={item.path}>{item.name}</Link></li>
            ))}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl font-bold text-primary">Care.xyz</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          {navItems.map((item) => (
            <li key={item.path}><Link href={item.path}>{item.name}</Link></li>
          ))}
        </ul>
      </div>
      <div className="navbar-end space-x-3">
        <Link href="/login" className="btn btn-outline btn-primary px-5">Login</Link>
        <Link href="/register" className="btn btn-primary px-5 text-white">Register</Link>
      </div>
    </div>
  );
};

export default Navbar;