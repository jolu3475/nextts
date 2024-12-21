import { NextResponse, type NextRequest } from "next/server";

export const middleware = (request : NextRequest) => {
    if (request.nextUrl.pathname === '/api') {
        return NextResponse.redirect(new URL('/home', request.url));
    } 
    // return NextResponse.redirect(new URL('/', request.url));
}

// export const config = {
//     matcher: "/api",
// };