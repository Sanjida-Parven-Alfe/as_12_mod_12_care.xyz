import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    const db = await dbConnect("bookings");
    const query = { _id: new ObjectId(id) };
    const result = await db.deleteOne(query);

    return NextResponse.json({ status: true, result });
  } catch (error) {
    return NextResponse.json({ status: false, message: error.message });
  }
};