import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get("next-auth.session-token") || request.cookies.get("__Secure-next-auth.session-token");

  const isPublicPath = pathname === "/login" || pathname === "/register";

  const isPrivatePath = pathname.startsWith("/my-bookings") || pathname.startsWith("/booking");

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
    "/my-bookings/:path*", 
    "/booking/:path*",     
  ],
};