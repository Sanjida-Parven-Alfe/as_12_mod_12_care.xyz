import React from "react";
import servicesData from "@/data/services.json"; // Import dummy data
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <section className="py-20 px-5 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <h4 className="text-primary font-bold uppercase tracking-widest">What We Offer</h4>
          <h2 className="text-4xl font-bold text-gray-800">Our Premium Care Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We provide a range of professional services tailored to meet the unique needs of your family members.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map(service => (
                <ServiceCard key={service.id} service={service} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;