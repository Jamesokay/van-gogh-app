import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "./app/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/api/generations") {
    return NextResponse.next();
  }
  const { supabase, response } = createClient(request);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user && !request.nextUrl.pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
