"use server";
import { dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const registerUser = async (payload) => {
  const { email, password, name, nid, contactNo, image } = payload;

  try {
    const db = await dbConnect("users"); 

    const existingUser = await db.findOne({ email });
    if (existingUser) {
      return { success: false, message: "User already exists with this email." };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      name,
      email,
      password: hashedPassword,
      nid,          
      contactNo,   
      image: image || "",
      role: "user",
      provider: "credentials",
      createdAt: new Date(),
    };

    await db.insertOne(newUser);
    return { success: true, message: "User registered successfully!" };
    
  } catch (error) {
    console.error("Registration Error:", error);
    return { success: false, message: "Something went wrong." };
  }
};