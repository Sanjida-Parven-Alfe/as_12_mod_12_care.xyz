import React from "react";
import servicesData from "@/data/services.json";
import ServiceCard from "@/components/home/ServiceCard"; 

export const metadata = {
  title: "All Services - Care.xyz",
  description: "Explore our range of professional caregiving services.",
};

const ServicesPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Choose the perfect care plan for your loved ones. We provide verified and professional caregivers for every need.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;