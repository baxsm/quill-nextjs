import { withAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export const config = {
  matcher: ["/dashboard/:path*", "/auth-callback"],
};

export default function middleware(req: Request) {
  return withAuth(req);
}
