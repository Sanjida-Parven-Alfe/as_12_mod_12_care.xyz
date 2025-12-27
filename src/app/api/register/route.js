import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  try {
    const { name, email, password, image } = await request.json();
    const db = await dbConnect("users");

    const existingUser = await db.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "User exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.insertOne({
      name,
      email,
      password: hashedPassword,
      image: image || "",
      role: "user",
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "User Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};