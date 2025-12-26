"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { createBooking } from "@/actions/booking";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaMapMarkerAlt, FaClock, FaCalendarAlt, FaSpinner } from "react-icons/fa";
import Swal from "sweetalert2"; 

const divisions = ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi", "Barisal", "Rangpur", "Mymensingh"];
const districts = {
  Dhaka: ["Dhaka", "Gazipur", "Narayanganj", "Tangail"],
  Chittagong: ["Chittagong", "Cox's Bazar", "Comilla"],
  Sylhet: ["Sylhet", "Moulovibazar"],
};

const BookingForm = ({ service }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const [loading, setLoading] = useState(false);
  const [totalCost, setTotalCost] = useState(0);
  const [selectedDivision, setSelectedDivision] = useState("");

  const duration = watch("duration");

  useEffect(() => {
    if (duration) {
      const cost = parseFloat(duration) * service.price;
      setTotalCost(cost);
    } else {
      setTotalCost(0);
    }
  }, [duration, service.price]);

  const onSubmit = async (data) => {
    setLoading(true);

    const bookingData = {
      serviceId: service.id,
      serviceName: service.title,
      image: service.image,
      userEmail: session?.user?.email,
      userName: session?.user?.name,
      ...data,
      totalCost: totalCost,
    };

    const response = await createBooking(bookingData);

    if (response.success) {
      Swal.fire({
        title: "Success!",
        text: "Booking placed successfully!",
        icon: "success",
        timer: 2000,
        showConfirmButton: false
      });
      router.push("/"); 
    } else {
      Swal.fire("Error", response.message, "error");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        
        {/* Date & Duration Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="form-control">
                <label className="label font-semibold text-gray-700">Service Date</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <FaCalendarAlt />
                    </div>
                    <input 
                        type="date" 
                        {...register("date", { required: true })} 
                        className="input input-bordered w-full pl-10 bg-gray-50 focus:bg-white focus:border-primary text-gray-800" 
                    />
                </div>
                {errors.date && <span className="text-red-500 text-xs mt-1">Date is required</span>}
            </div>

            <div className="form-control">
                <label className="label font-semibold text-gray-700">Duration (Hours)</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <FaClock />
                    </div>
                    <input 
                        type="number" 
                        min="1" 
                        {...register("duration", { required: true })} 
                        placeholder="Ex: 2" 
                        className="input input-bordered w-full pl-10 bg-gray-50 focus:bg-white focus:border-primary text-gray-800" 
                    />
                </div>
                {errors.duration && <span className="text-red-500 text-xs mt-1">Duration required</span>}
            </div>
        </div>

        {/* Location Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="form-control">
                <label className="label font-semibold text-gray-700">Division</label>
                <select 
                    className="select select-bordered w-full bg-gray-50 focus:bg-white focus:border-primary text-gray-800"
                    {...register("division", { 
                        required: true,
                        onChange: (e) => setSelectedDivision(e.target.value) 
                    })}
                >
                    <option value="">Select Division</option>
                    {divisions.map((div) => <option key={div} value={div}>{div}</option>)}
                </select>
                {errors.division && <span className="text-red-500 text-xs mt-1">Required</span>}
            </div>

            <div className="form-control">
                <label className="label font-semibold text-gray-700">District</label>
                <select 
                    className="select select-bordered w-full bg-gray-50 focus:bg-white focus:border-primary text-gray-800"
                    {...register("district", { required: true })}
                >
                    <option value="">Select District</option>
                    {selectedDivision && districts[selectedDivision]?.map((dist) => (
                        <option key={dist} value={dist}>{dist}</option>
                    ))}
                </select>
                {errors.district && <span className="text-red-500 text-xs mt-1">Required</span>}
            </div>
        </div>

        {/* Address */}
        <div className="form-control">
            <label className="label font-semibold text-gray-700">Full Address</label>
            <div className="relative">
                <div className="absolute top-3 left-3 pointer-events-none text-gray-400">
                    <FaMapMarkerAlt />
                </div>
                <textarea 
                    {...register("address", { required: true })} 
                    placeholder="House No, Road No, Area details..." 
                    className="textarea textarea-bordered w-full pl-10 bg-gray-50 focus:bg-white focus:border-primary text-gray-800 h-24" 
                ></textarea>
            </div>
            {errors.address && <span className="text-red-500 text-xs mt-1">Address is required</span>}
        </div>

        {/* Total Cost Display */}
        <div className="bg-gray-800 text-white p-4 rounded-xl flex justify-between items-center shadow-lg">
            <span className="text-lg font-medium">Total Cost:</span>
            <span className="text-2xl font-bold text-green-400">{totalCost} BDT</span>
        </div>

        {/* Submit Button */}
        <button 
            disabled={loading} 
            className="btn btn-primary w-full text-white text-lg font-bold shadow-lg hover:shadow-xl transition-all"
        >
            {loading ? <FaSpinner className="animate-spin" /> : "Confirm Booking"}
        </button>

    </form>
  );
};

export default BookingForm;