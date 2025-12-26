import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  
  const token = request.cookies.get("next-auth.session-token") || request.cookies.get("__Secure-next-auth.session-token");

  const isPublicPath = path === "/login" || path === "/register";
  const isPrivatePath = path.startsWith("/my-bookings") || path.startsWith("/booking");

 
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  
  if (isPrivatePath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  return NextResponse.next();
}


export const config = {
  matcher: [
    "/login",
    "/register",
    "/my-bookings",
    "/booking/:path*",
  ],
};