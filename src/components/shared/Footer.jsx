import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-neutral text-neutral-content mt-24">
      {/* Main Footer Section with Explicit Grid */}
      <div className="max-w-7xl mx-auto p-10">
        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand Info */}
          <aside>
            <h2 className="text-3xl font-bold text-primary mb-3">Care.xyz</h2>
            <p className="font-medium opacity-80 leading-relaxed">
              Your trusted partner for family care. <br />
              Providing reliable babysitting and elderly care since 2024.
            </p>
          </aside>
          
          {/* Column 2: Services */}
          <nav className="flex flex-col gap-2">
            <h6 className="footer-title text-white opacity-100 mb-2 uppercase font-bold">Services</h6>
            <Link href="/services/baby-care" className="link link-hover opacity-80 hover:opacity-100 hover:text-primary transition-all">Baby Care</Link>
            <Link href="/services/elderly-care" className="link link-hover opacity-80 hover:opacity-100 hover:text-primary transition-all">Elderly Care</Link>
            <Link href="/services/sick-support" className="link link-hover opacity-80 hover:opacity-100 hover:text-primary transition-all">Sick Support</Link>
          </nav>

          {/* Column 3: Company */}
          <nav className="flex flex-col gap-2">
            <h6 className="footer-title text-white opacity-100 mb-2 uppercase font-bold">Company</h6>
            <Link href="/about" className="link link-hover opacity-80 hover:opacity-100 hover:text-primary transition-all">About us</Link>
            <Link href="/contact" className="link link-hover opacity-80 hover:opacity-100 hover:text-primary transition-all">Contact</Link>
            <Link href="/jobs" className="link link-hover opacity-80 hover:opacity-100 hover:text-primary transition-all">Jobs</Link>
          </nav>

          {/* Column 4: Legal */}
          <nav className="flex flex-col gap-2">
            <h6 className="footer-title text-white opacity-100 mb-2 uppercase font-bold">Legal</h6>
            <Link href="/terms" className="link link-hover opacity-80 hover:opacity-100 hover:text-primary transition-all">Terms of use</Link>
            <Link href="/privacy" className="link link-hover opacity-80 hover:opacity-100 hover:text-primary transition-all">Privacy policy</Link>
            <Link href="/cookie" className="link link-hover opacity-80 hover:opacity-100 hover:text-primary transition-all">Cookie policy</Link>
          </nav>

        </footer>
      </div>

      {/* Copyright & Social Media Section */}
      <div className="border-t border-gray-700 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="opacity-70 text-sm text-center md:text-left">
            © {new Date().getFullYear()} <span className="font-bold text-primary">Care.xyz</span>. All rights reserved.
          </p>
          
          {/* Social Media Links */}
          <div className="flex gap-6">
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-primary transition-colors transform hover:scale-110 duration-200"
            >
              <FaTwitter size={24} />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-primary transition-colors transform hover:scale-110 duration-200"
            >
              <FaFacebook size={24} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-primary transition-colors transform hover:scale-110 duration-200"
            >
              <FaInstagram size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-primary transition-colors transform hover:scale-110 duration-200"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;