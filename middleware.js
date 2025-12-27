import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  const path = request.nextUrl.pathname;

  // ✅ FIX: ম্যানুয়ালি কুকি না খুঁজে 'getToken' ব্যবহার করা হলো
  // এটি Vercel এর সিকিউর কুকি অটোমেটিক ডিটেক্ট করতে পারে
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const isPublicPath = path === "/login" || path === "/register";
  
  // প্রাইভেট পাথ চেক (booking বা my-bookings দিয়ে শুরু হওয়া সব পেজ)
  const isPrivatePath = path.startsWith("/my-bookings") || path.startsWith("/booking");

  // ১. লগইন থাকা অবস্থায় পাবলিক পেজে (লগইন/রেজিস্টার) গেলে -> হোমে পাঠাও
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  // ২. লগইন না থাকা অবস্থায় প্রাইভেট পেজে গেলে -> লগইন পেজে পাঠাও
  if (isPrivatePath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/my-bookings/:path*",
    "/booking/:path*",
  ],
};