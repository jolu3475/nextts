import { NextRequest } from "next/server"
import { headers, cookies } from "next/headers";

export const GET = async (request: NextRequest) => {
    // Get the data in the header
    const requestHeader = await new Headers(request.headers);
    const headersList = await headers();

    // Set and get cookies
    const theme = request.cookies.get('theme');
    console.log(theme);
    
    // Another methode for manipulating cookies
    (await cookies()).set('test', '1234');
    console.log((await cookies()).get('test'))

    console.log(requestHeader.get("authorization"));
    console.log(headersList.get("authorization"));
    return new Response("First API call", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    });
}