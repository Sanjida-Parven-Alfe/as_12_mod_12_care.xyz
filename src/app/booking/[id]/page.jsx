import BookingForm from "@/components/booking/BookingForm";
import servicesData from "@/data/services.json";
import Image from "next/image";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";

export async function generateMetadata({ params }) {
    const { id } = await params;
    const service = servicesData.find((s) => s.id == id);

    return {
      title: service ? `Book ${service.title} - Care.xyz` : "Booking",
    };
}

const BookingPage = async ({ params }) => {
  const { id } = await params;
  
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect(`/login?callbackUrl=/booking/${id}`);
  }

  const service = servicesData.find((s) => s.id == id);

  if (!service) {
    return <div className="text-center py-20 text-2xl text-red-500">Service Not Found!</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Confirm Your Booking</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left Side: Service Details Card */}
            <div className="card bg-white shadow-xl border border-gray-100 overflow-hidden">
                <figure className="relative h-64 w-full">
                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl text-primary">{service.title}</h2>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    
                    <div className="divider">Features</div>
                    
                    <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                            <span key={idx} className="badge badge-outline badge-primary p-3">{feature}</span>
                        ))}
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 rounded-xl flex justify-between items-center border border-blue-100">
                        <span className="font-semibold text-gray-700">Rate per Hour:</span>
                        <span className="text-xl font-bold text-blue-600">{service.price} BDT</span>
                    </div>
                </div>
            </div>

            {/* Right Side: Booking Form */}
            <div className="card bg-white shadow-2xl border border-gray-200">
                <div className="card-body p-8">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Booking Details</h2>
                    <BookingForm service={service} />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;