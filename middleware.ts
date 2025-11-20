import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    // Additional logic jodi lagle
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Protect checkout route
        if (req.nextUrl.pathname.startsWith("/checkout")) {
          return !!token;
        }
        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/checkout/:path*"],
};
