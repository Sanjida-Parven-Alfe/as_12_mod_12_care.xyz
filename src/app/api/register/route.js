import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  try {
    const { name, email, password, image } = await request.json();
    const db = await dbConnect("users");

    // চেক করা ইউজার আছে কিনা
    const existingUser = await db.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "User exists" }, { status: 400 });
    }

    // ✅ পাসওয়ার্ড হ্যাশ করা (খুবই জরুরি)
    const hashedPassword = await bcrypt.hash(password, 10);

    // ডাটাবেসে সেভ করা
    await db.insertOne({
      name,
      email,
      password: hashedPassword, // এনক্রিপ্ট করা পাসওয়ার্ড
      image: image || "",
      role: "user",
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "User Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};