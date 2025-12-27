import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { id } = await params; 
  try {
    const db = await dbConnect("services");
    const query = { _id: new ObjectId(id) };
    const service = await db.findOne(query);
    return NextResponse.json({ service });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
};