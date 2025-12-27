import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { id } = await params; 

  try {
    const db = await dbConnect("bookings");
    const query = { _id: new ObjectId(id) };
    const booking = await db.findOne(query);

    return NextResponse.json({ status: true, booking });
  } catch (error) {
    return NextResponse.json({ status: false, message: error.message });
  }
};