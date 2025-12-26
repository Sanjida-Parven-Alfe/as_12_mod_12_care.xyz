"use server";
import { dbConnect } from "@/lib/dbConnect";

export const createBooking = async (bookingData) => {
  try {
    const db = await dbConnect("bookings"); // Collection Name: bookings

    const newBooking = {
      ...bookingData,
      status: "Pending", // Default status
      createdAt: new Date(),
    };

    const result = await db.insertOne(newBooking);

    if (result.insertedId) {
      return { success: true, message: "Booking placed successfully!" };
    } else {
      return { success: false, message: "Failed to place booking" };
    }
  } catch (error) {
    console.error("Booking Error:", error);
    return { success: false, message: "Something went wrong!" };
  }
};