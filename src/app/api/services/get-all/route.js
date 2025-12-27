import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const db = await dbConnect("services");
    const services = await db.find().toArray();
    return NextResponse.json({ services });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
};