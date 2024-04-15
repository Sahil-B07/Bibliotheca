import { NextResponse } from "next/server";

export async function middleware(request) {
  const authToken = request.cookies.get("authToken")?.value;
  const { pathname } = request.nextUrl;

  if (["/login", "/sign-up"].includes(pathname)) {
    if (authToken) {
      return NextResponse.redirect(new URL("/biblio", request.url));
    }
  } else if (!authToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/sign-up", "/biblio/:path*"],
};
