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
      <div className="min-h-screen flex flex-col justify-center items-center gap-5">
        <h2 className="text-3xl font-bold text-red-500">Service Not Found</h2>
        <Link href="/services" className="btn btn-primary">Back to Services</Link>
      </div>
    );
  }

  const { _id, title, description, image, price, features } = service;

  return (
    <div className="py-20 px-5 md:px-10 bg-base-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-primary mb-8 font-semibold w-fit">
           <FaArrowLeft /> Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <Image src={image} alt={title} fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
            <p className="text-xl text-primary font-bold bg-primary/10 w-fit px-4 py-2 rounded-lg">
              Price: {price} BDT <span className="text-sm font-normal text-gray-600">/ hour</span>
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">{description}</p>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-gray-800">What's Included?</h3>
              <ul className="space-y-3">
                {features?.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <FaCheckCircle className="text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
            
              <Link href={`/booking/${_id.toString()}`} className="btn btn-primary btn-lg w-full sm:w-auto text-white shadow-lg">
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