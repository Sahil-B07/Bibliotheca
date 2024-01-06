import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const authToken = request.cookies.get("authToken")?.value;
  const { pathname } = request.nextUrl;

  if (["/login", "/sign-up"].includes(pathname)) {
    if (authToken) {
      return NextResponse.redirect(new URL("/landing", request.url));
    }
  } else if (!authToken) {
    return NextResponse.redirect(new URL(pathname, request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/sign-up", "/landing/:path*"],
};
