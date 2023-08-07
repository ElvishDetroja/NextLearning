import { NextResponse } from "next/server";

function middleware(request) {
  //
  if (request.nextUrl.pathname == "/signup") {
    return NextResponse.redirect(new URL("/products", request.url));
  }
}

export default  middleware;
