// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Check if user is logged in (simple localStorage check)
  // In production, use proper authentication
  const authToken = request.cookies.get("auth-token")?.value;

  // Protect checkout route
  if (request.nextUrl.pathname.startsWith("/checkout")) {
    if (!authToken) {
      // Redirect to login with return URL
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("redirect", "/checkout");
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/checkout/:path*",
    // Add other protected routes here
  ],
};
