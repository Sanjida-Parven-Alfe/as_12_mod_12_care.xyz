import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { email } = params;

  try {
    const db = await dbConnect("bookings");
    const query = { email: email };
    const bookings = await db.find(query).toArray();

    return NextResponse.json({ status: true, bookings });
  } catch (error) {
    return NextResponse.json({ status: false, message: error.message });
  }
};