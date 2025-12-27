import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ service }) => {

  const { title, description, image, slug, price } = service;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
      <figure className="relative h-56 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600">
          {description ? description.slice(0, 100) : "No description available"}...
        </p>
        <div className="flex justify-between items-center mt-4">
            <p className="text-rose-600 font-bold text-lg">{price} BDT</p>
            <div className="card-actions justify-end">
             
                <Link href={`/services/${slug}`} className="btn btn-primary text-white font-bold">
                    View Details
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;