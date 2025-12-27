"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUser, FaPhone, FaEnvelope, FaPrint } from "react-icons/fa";

const BookingDetailsPage = ({ params }) => {

  const [id, setId] = useState(null);
  useEffect(() => {
    Promise.resolve(params).then((p) => setId(p.id));
  }, [params]);

  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchBookingDetails = async () => {
      if (!id) return;
      try {
        const res = await fetch(`http://localhost:3000/api/booking/details/${id}`);
        const data = await res.json();
        if (data.status) {
          setBooking(data.booking);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookingDetails();
  }, [id]);


  const handlePrint = () => {
    window.print();
  };

  if (loading) return <div className="flex justify-center items-center h-screen"><span className="loading loading-spinner text-rose-600 loading-lg"></span></div>;
  if (!booking) return <div className="text-center mt-20 text-red-500 font-bold text-2xl">Booking Info Not Found</div>;

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
        
    
        <div className="bg-rose-600 p-8 text-white flex justify-between items-center print:hidden">
          <Link href="/my-bookings" className="flex items-center gap-2 hover:text-gray-200 font-medium transition-colors">
            <FaArrowLeft /> Back to List
          </Link>
          <h1 className="text-2xl font-bold">Booking Invoice</h1>
          <button onClick={handlePrint} className="flex items-center gap-2 bg-white text-rose-600 px-4 py-2 rounded-lg font-bold shadow hover:bg-gray-100 transition-colors">
            <FaPrint /> Print
          </button>
        </div>

  
        <div className="bg-gray-50 px-8 py-4 border-b flex justify-between items-center">
            <p className="text-gray-500 text-sm">Booking ID: <span className="font-mono text-gray-700 font-bold">#{booking._id}</span></p>
            <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide
              ${booking.status === 'confirmed' ? 'bg-green-100 text-green-700' : 
                booking.status === 'cancelled' ? 'bg-red-100 text-red-700' :
                'bg-yellow-100 text-yellow-700' 
              }`}>
              {booking.status || "Pending"}
            </span>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          
      
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Service Details</h2>
            
            <div className="flex gap-4 items-start">
                <div className="relative w-24 h-24 rounded-lg overflow-hidden border border-gray-200">
                     <Image src={booking.image || "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"} alt="Service" fill className="object-cover" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-gray-900">{booking.serviceTitle}</h3>
                    <p className="text-rose-600 font-bold text-xl mt-1">{booking.totalCost} BDT</p>
                </div>
            </div>

            <div className="space-y-3 mt-4">
                <div className="flex items-center gap-3 text-gray-600">
                    <FaCalendarAlt className="text-rose-500" />
                    <span className="font-medium">Date: {booking.date}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                    <FaClock className="text-rose-500" />
                    <span className="font-medium">Duration: {booking.duration} Hours</span>
                </div>
            </div>
          </div>

         
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Customer Information</h2>
            
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="bg-gray-100 p-2 rounded-full"><FaUser className="text-gray-500" /></div>
                    <div>
                        <p className="text-xs text-gray-400">Customer Name</p>
                        <p className="font-semibold text-gray-800">{booking.userName}</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="bg-gray-100 p-2 rounded-full"><FaEnvelope className="text-gray-500" /></div>
                    <div>
                        <p className="text-xs text-gray-400">Email Address</p>
                        <p className="font-semibold text-gray-800">{booking.userEmail}</p>
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <div className="bg-gray-100 p-2 rounded-full"><FaMapMarkerAlt className="text-gray-500" /></div>
                    <div>
                        <p className="text-xs text-gray-400">Service Location</p>
                        <p className="font-semibold text-gray-800">
                            {booking.address}, {booking.district}, {booking.division}
                        </p>
                    </div>
                </div>
            </div>
          </div>

        </div>

        {/* Footer Note */}
        <div className="bg-gray-50 p-6 text-center text-gray-500 text-sm border-t border-gray-200">
            <p>Thank you for choosing <span className="font-bold text-rose-600">Care.xyz</span>.</p>
            <p className="mt-1">For any queries, please contact our support team.</p>
        </div>

      </div>
    </div>
  );
};

export default BookingDetailsPage;