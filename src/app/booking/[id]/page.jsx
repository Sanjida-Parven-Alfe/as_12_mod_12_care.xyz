"use client";
import BookingForm from "@/components/booking/BookingForm";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const BookingPage = ({ params }) => {

  const [id, setId] = useState(null);
  useEffect(() => {
    Promise.resolve(params).then((p) => setId(p.id));
  }, [params]);

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      if (!id) return;
      try {
        // FIX: localhost সরানো হয়েছে, এখন এটি লাইভ লিংকে কাজ করবে
        const res = await fetch(`/api/services/${id}`);
        const data = await res.json();
        if(data.service){
            setService(data.service);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [id]);

  if (loading) return <div className="text-center mt-20"><span className="loading loading-spinner text-primary loading-lg"></span></div>;
  if (!service) return <div className="text-center mt-20 text-red-500 font-bold">Service Not Found</div>;

  const { title, description, image, price, features, _id } = service;

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          
          <div className="lg:w-5/12">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden sticky top-24">
              <div className="relative h-64 sm:h-80">
                <Image src={image} alt={title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h2 className="absolute bottom-4 left-4 text-white text-3xl font-bold shadow-sm">{title}</h2>
              </div>
              <div className="p-6 space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
                <div className="bg-rose-50 rounded-xl p-4 flex justify-between items-center border border-rose-100">
                  <div>
                    <p className="text-gray-500 text-sm">Rate per Hour</p>
                    <p className="text-3xl font-extrabold text-rose-600">{price} BDT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-7/12">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-extrabold text-gray-900">Booking Details</h2>
                <p className="text-gray-500 mt-2">Fill in the form to book this service.</p>
              </div>
            
              <BookingForm service={{...service, id: _id, title: title}} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookingPage;