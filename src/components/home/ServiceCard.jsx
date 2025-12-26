import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ service }) => {
  const { title, description, image, slug } = service;
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
      <figure className="relative h-56 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600">{description.slice(0, 100)}...</p>
        <div className="card-actions justify-end mt-4">
          <Link href={`/services/${slug}`} className="btn btn-primary w-full text-white font-bold">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;