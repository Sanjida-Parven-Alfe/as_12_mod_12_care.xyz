"use server";
import { dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const registerUser = async (data) => {
  try {
    const usersCollection = await dbConnect("users");
    
    // Check if user already exists
    const existingUser = await usersCollection.findOne({ email: data.email });
    
    if (existingUser) {
      return { success: false, message: "Email already exists" };
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Prepare User Data
    const newUser = {
      name: data.name,
      email: data.email,
      password: hashedPassword,
      nid: data.nid,
      contactNo: data.contactNo,
      role: "user", // Default role
      provider: "credentials",
      image: "", // Default empty image
      createdAt: new Date(),
    };

    // Insert into DB
    await usersCollection.insertOne(newUser);

    return { success: true, message: "User registered successfully" };

  } catch (error) {
    console.error("Registration Error:", error);
    return { success: false, message: "Something went wrong" };
  }
};