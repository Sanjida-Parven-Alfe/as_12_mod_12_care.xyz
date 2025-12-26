"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaCheckCircle, FaMoneyBillWave } from "react-icons/fa";

const dummyService = {
  title: "Elderly Care & Companionship",
  description:
    "Dedicated support for seniors, assisting with daily activities, medication reminders, and providing joyful companionship. We treat them with the dignity and respect they deserve.",
  image:
    "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1468&auto=format&fit=crop",
  rate: 800,
  features: [
    "Medication Reminders",
    "Assistance with Walking/Mobility",
    "Light Housekeeping",
    "Friendly Companionship",
  ],
};

const BookingPage = ({ params }) => {
  const serviceData = dummyService;

  const [date, setDate] = useState("");
  const [duration, setDuration] = useState(2); 
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [address, setAddress] = useState("");
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const cost = duration * serviceData.rate;
    setTotalCost(cost);
  }, [duration, serviceData.rate]);

  const handleDurationChange = (e) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val > 0) {
      setDuration(val);
    } else {
      setDuration(1);
    }
  };

  const handleBooking = (e) => {
      e.preventDefault();

      console.log({ date, duration, division, district, address, totalCost });
      alert("Booking Confirmed!");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          
          <div className="lg:w-5/12">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden sticky top-24">
              <div className="relative h-64 sm:h-80">
                <Image
                  src={serviceData.image}
                  alt={serviceData.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h2 className="absolute bottom-4 left-4 text-white text-3xl font-bold shadow-sm">
                  {serviceData.title}
                </h2>
              </div>
              <div className="p-6 space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  {serviceData.description}
                </p>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <FaCheckCircle className="text-rose-500" />
                    Key Features
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {serviceData.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-700 bg-gray-100 rounded-lg px-3 py-2 text-sm font-medium"
                      >
                        <span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-rose-50 rounded-xl p-4 flex justify-between items-center border border-rose-100">
                  <div>
                    <p className="text-gray-500 text-sm">Rate per Hour</p>
                    <p className="text-3xl font-extrabold text-rose-600">
                      {serviceData.rate} BDT
                    </p>
                  </div>
                  <FaMoneyBillWave className="text-4xl text-rose-300" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-7/12">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-extrabold text-gray-900">
                  Booking Details
                </h2>
                <p className="text-gray-500 mt-2">
                  Fill in the form to book this service.
                </p>
              </div>

              <form onSubmit={handleBooking} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Service Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                      <FaCalendarAlt className="text-rose-500" />
                      Service Date
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors bg-gray-50"
                    />
                  </div>

                  {/* Duration */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                      <FaClock className="text-rose-500" />
                      Duration (Hours)
                    </label>
                    <input
                      type="number"
                      min="1"
                      required
                      value={duration}
                      onChange={handleDurationChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors bg-gray-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Division */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                      <FaMapMarkerAlt className="text-rose-500" />
                      Division
                    </label>
                    <select
                      required
                      value={division}
                      onChange={(e) => setDivision(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors bg-gray-50"
                    >
                      <option value="">Select Division</option>
                      <option value="Dhaka">Dhaka</option>
                      <option value="Chattogram">Chattogram</option>
                    </select>
                  </div>

                  {/* District */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                      <FaMapMarkerAlt className="text-rose-500" />
                      District
                    </label>
                    <select
                      required
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors bg-gray-50"
                    >
                      <option value="">Select District</option>
                      <option value="Dhaka">Dhaka</option>
                      <option value="Gazipur">Gazipur</option>
                    </select>
                  </div>
                </div>

                {/* Full Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                    <FaMapMarkerAlt className="text-rose-500" />
                    Full Address
                  </label>
                  <textarea
                    rows="3"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="House No, Road No, Area details..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors bg-gray-50 resize-none"
                  ></textarea>
                </div>

                {/* Total Cost & Book Button */}
                <div className="bg-gray-900 p-6 rounded-xl shadow-inner flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-gray-400 text-sm">Estimated Total Cost</p>
                    <p className="text-4xl font-extrabold text-white">
                      {totalCost} BDT
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white text-lg font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;