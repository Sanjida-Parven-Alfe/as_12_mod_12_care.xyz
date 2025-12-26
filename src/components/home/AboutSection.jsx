import Image from "next/image";
import React from "react";

const AboutSection = () => {
    // You can use a local image here instead of the link
    const aboutImage = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  return (
    <section className="py-20 px-5 md:px-10 bg-base-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
           <Image 
            src={aboutImage}
            alt="Caregiving mission"
            fill
            className="object-cover"
           />
        </div>
        <div className="space-y-6">
          <h4 className="text-primary font-bold uppercase tracking-widest">Our Mission</h4>
          <h2 className="text-4xl font-bold text-gray-800">We Make Caregiving Simple & Secure</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Care.xyz, we understand the challenges of finding reliable support for your family. Our mission is to bridge the gap between families in need and trusted caregivers.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            We verify every caretaker to ensure safety and peace of mind. Whether it's for your child, aging parents, or a sick loved one, we are here to help you find the right match easily.
          </p>
          <button className="btn btn-outline btn-primary mt-4">Learn More About Us</button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;