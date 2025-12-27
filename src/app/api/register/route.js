import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  try {
    const { name, email, password, image } = await request.json();

    const db = await dbConnect("users");

    // ১. চেক করা ইউজার আগে থেকেই আছে কিনা
    const existingUser = await db.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    // ২. পাসওয়ার্ড হ্যাশ করা (এটি মিসিং ছিল বা ভুল ছিল)
    const hashedPassword = await bcrypt.hash(password, 14);

    // ৩. ডাটাবেসে সেভ করা
    const newUser = {
      name,
      email,
      password: hashedPassword, // হ্যাশ করা পাসওয়ার্ড সেভ হচ্ছে
      image: image || "",
      role: "user",
      createdAt: new Date(),
    };

    await db.insertOne(newUser);

    return NextResponse.json({ message: "User Created Successfully" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};