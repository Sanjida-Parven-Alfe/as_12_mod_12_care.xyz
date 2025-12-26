import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-neutral text-neutral-content mt-24">
      <footer className="footer p-10 max-w-7xl mx-auto">
        <aside>
   
          <h2 className="text-3xl font-bold text-primary mb-2">Care.xyz</h2>
          <p className="font-medium opacity-80 leading-relaxed">
            Your trusted partner for family care. <br />
            Providing reliable babysitting and elderly care since 2024.
          </p>
        </aside>
        

        <nav>
          <h6 className="footer-title text-white opacity-100">Services</h6>
          <Link href="/services/baby-care" className="link link-hover opacity-80 hover:opacity-100 hover:text-primary transition-all">Baby Care</Link>
          <Link href="/services/elderly-care" className="link link-hover opacity-80 hover:opacity-100 hover:text-primary transition-all">Elderly Care</Link>
          <Link href="/services/sick-support" className="link link-hover opacity-80 hover:opacity-100 hover:text-primary transition-all">Sick Support</Link>
        </nav>
        <nav>
          <h6 className="footer-title text-white opacity-100">Company</h6>
          <Link href="/about" className="link link-hover opacity-80 hover:opacity-100 hover:text-primary transition-all">About us</Link>
          <Link href="/contact" className="link link-hover opacity-80 hover:opacity-100 hover:text-primary transition-all">Contact</Link>
          <Link href="/jobs" className="link link-hover opacity-80 hover:opacity-100 hover:text-primary transition-all">Jobs</Link>
        </nav>
        <nav>
          <h6 className="footer-title text-white opacity-100">Legal</h6>
          <Link href="/terms" className="link link-hover opacity-80 hover:opacity-100 hover:text-primary transition-all">Terms of use</Link>
          <Link href="/privacy" className="link link-hover opacity-80 hover:opacity-100 hover:text-primary transition-all">Privacy policy</Link>
          <Link href="/cookie" className="link link-hover opacity-80 hover:opacity-100 hover:text-primary transition-all">Cookie policy</Link>
        </nav>
      </footer>

      <div className="border-t border-gray-700">
        <footer className="footer px-10 py-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <aside className="items-center grid-flow-col">
            <p className="opacity-70 text-sm">
              © {new Date().getFullYear()} <span className="font-bold text-primary">Care.xyz</span>. All rights reserved.
            </p>
          </aside>
          <nav className="md:place-self-center md:justify-self-end mt-4 md:mt-0">
            <div className="grid grid-flow-col gap-6">
              <a className="cursor-pointer hover:text-primary transition-colors transform hover:scale-110 duration-200">
                <FaTwitter size={24} />
              </a>
              <a className="cursor-pointer hover:text-primary transition-colors transform hover:scale-110 duration-200">
                <FaFacebook size={24} />
              </a>
              <a className="cursor-pointer hover:text-primary transition-colors transform hover:scale-110 duration-200">
                <FaInstagram size={24} />
              </a>
              <a className="cursor-pointer hover:text-primary transition-colors transform hover:scale-110 duration-200">
                <FaLinkedin size={24} />
              </a>
            </div>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;