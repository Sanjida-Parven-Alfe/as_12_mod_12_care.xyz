"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaMoneyBillWave, FaTrashAlt, FaEye } from "react-icons/fa";

const MyBookings = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  const fetchBookings = async () => {
    if (session?.user?.email) {
      try {
        // FIX: localhost সরানো হয়েছে
        const res = await fetch(`/api/my-bookings/${session.user.email}`);
        const data = await res.json();
        setBookings(data.bookings);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [session]);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to cancel this booking?");
    if (confirm) {
      try {
        // FIX: localhost সরানো হয়েছে
        const res = await fetch(`/api/booking/delete/${id}`, {
          method: "DELETE",
        });
        const data = await res.json();
        if (data.status) {
          const remaining = bookings.filter((booking) => booking._id !== id);
          setBookings(remaining);
          alert("Booking Cancelled Successfully!");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg text-rose-600"></span>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">My Bookings</h2>
            <p className="text-gray-500 mt-1">Manage your service requests and track status.</p>
          </div>
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
            <span className="text-gray-600 font-medium">Total Bookings: </span>
            <span className="text-rose-600 font-bold text-lg">{bookings.length}</span>
          </div>
        </div>

        {bookings.length > 0 ? (
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* Table Head */}
                <thead className="bg-gray-100 text-gray-700 uppercase text-sm font-bold">
                  <tr>
                    <th className="py-4 pl-6">Service Name</th>
                    <th>Date & Time</th>
                    <th>Total Cost</th>
                    <th>Status</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                {/* Table Body */}
                <tbody className="text-gray-600 text-sm font-medium">
                  {bookings.map((item) => (
                    <tr key={item._id} className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-none">
                      
                      <td className="py-4 pl-6">
                        <div className="flex flex-col">
                          <span className="text-gray-900 font-bold text-base">
                            {item.serviceTitle || item.serviceName || "Service Name Unavailable"}
                          </span>
                          <span className="flex items-center gap-1 text-gray-400 text-xs mt-1">
                            <FaMapMarkerAlt /> {item.address?.substring(0, 25)}...
                          </span>
                        </div>
                      </td>

                      {/* Date & Duration */}
                      <td>
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2">
                            <FaCalendarAlt className="text-rose-500" />
                            <span>{item.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <FaClock />
                            <span>{item.duration} Hours</span>
                          </div>
                        </div>
                      </td>

                      {/* Cost */}
                      <td>
                        <div className="flex items-center gap-2 text-gray-900 font-bold">
                          <FaMoneyBillWave className="text-green-600" />
                          {item.totalCost} BDT
                        </div>
                      </td>

                      {/* Status Badge */}
                      <td>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide
                          ${item.status === 'confirmed' ? 'bg-green-100 text-green-600' : 
                            item.status === 'completed' ? 'bg-blue-100 text-blue-600' :
                            item.status === 'cancelled' ? 'bg-red-100 text-red-600' :
                            'bg-yellow-100 text-yellow-600' 
                          }`}>
                          {item.status || "Pending"}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="text-center">
                        <div className="flex items-center justify-center gap-3">
                          
                          {/* View Details Button */}
                          <Link href={`/booking/details/${item._id}`}>
                            <button className="btn btn-sm btn-circle btn-ghost text-blue-500 hover:bg-blue-50 tooltip" data-tip="View Details">
                              <FaEye size={16} />
                            </button>
                          </Link>

                          {/* Cancel Button */}
                          <button 
                            onClick={() => handleDelete(item._id)}
                            className="btn btn-sm btn-circle btn-ghost text-red-500 hover:bg-red-50 tooltip" 
                            data-tip="Cancel Booking"
                          >
                            <FaTrashAlt size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCalendarAlt className="text-gray-300 text-4xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">No Bookings Found!</h3>
            <p className="text-gray-500 mt-2 max-w-sm mx-auto">Looks like you haven't booked any services yet. Explore our services to get started.</p>
            <Link href="/services" className="btn btn-primary mt-6 text-white px-8">
              Book a Service
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;