import React from "react";
import ServiceCard from "./ServiceCard";
import { dbConnect } from "@/lib/dbConnect";


const ServicesSection = async () => {
  const db = await dbConnect("services");
  const services = await db.find().toArray();

  return (
    <section className="py-20 px-5 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <h4 className="text-primary font-bold uppercase tracking-widest">What We Offer</h4>
          <h2 className="text-4xl font-bold text-gray-800">Our Premium Care Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We provide a range of professional services tailored to meet the unique needs of your family members.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
            {services.map(service => (
                <ServiceCard key={service._id.toString()} service={service} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;