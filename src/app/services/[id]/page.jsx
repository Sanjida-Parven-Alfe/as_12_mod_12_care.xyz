import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaArrowLeft } from "react-icons/fa";
import { dbConnect } from "@/lib/dbConnect";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const db = await dbConnect("services");
  const service = await db.findOne({ slug: id });
  
  return {
    title: service ? `${service.title} - Care.xyz` : "Service Not Found",
    description: service?.description,
  };
}

const ServiceDetails = async ({ params }) => {
  const { id } = await params;
  const db = await dbConnect("services");
  
  const service = await db.findOne({ slug: id });

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center gap-5 bg-gray-50">
        <h2 className="text-3xl font-bold text-red-500">Service Not Found</h2>
        <p className="text-gray-500">The service you are looking for does not exist.</p>
        <Link href="/services" className="btn btn-primary px-8">Back to Services</Link>
      </div>
    );
  }

  const { _id, title, description, image, price, features } = service;

  return (
    <div className="py-20 px-5 md:px-10 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-rose-600 mb-8 font-semibold w-fit transition-colors duration-200">
           <FaArrowLeft /> Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <Image 
              src={image} 
              alt={title} 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="space-y-8">
            <div>
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">{title}</h1>

                <div className="inline-block bg-rose-50 border border-rose-100 rounded-full px-6 py-2">
                    <p className="text-xl text-rose-600 font-bold">
                      Price: {price} BDT <span className="text-sm font-normal text-gray-500">/ hour</span>
                    </p>
                </div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              {description}
            </p>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-3">
                Included Features
              </h3>
              <ul className="space-y-4">
                {features?.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                    <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link 
                href={`/booking/${_id.toString()}`} 
                className="btn bg-rose-600 hover:bg-rose-700 text-white border-none btn-lg w-full sm:w-auto shadow-lg shadow-rose-200 hover:shadow-xl transition-all"
              >
                Book This Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;