import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {

  const { id } = await params;

  try {
    const db = await dbConnect("bookings");
    
    const query = { _id: new ObjectId(id) };
    const result = await db.deleteOne(query);

    if (result.deletedCount > 0) {
      return NextResponse.json({ 
        status: true, 
        message: "Booking Deleted Successfully", 
        result 
      });
    } else {
      return NextResponse.json({ 
        status: false, 
        message: "Booking not found or already deleted" 
      });
    }
  } catch (error) {
    return NextResponse.json({ status: false, message: error.message });
  }
};