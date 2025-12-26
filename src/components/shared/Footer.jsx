import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content mt-20">
      <aside>
        <h2 className="text-3xl font-bold text-primary">Care.xyz</h2>
        <p className="font-medium">Providing reliable care since 2024.<br />Making caregiving accessible for everyone.</p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Baby Care</a>
        <a className="link link-hover">Elderly Care</a>
        <a className="link link-hover">Sick Support</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Terms of use</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;