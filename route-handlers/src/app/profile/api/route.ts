import { headers } from "next/headers"
import { NextRequest } from "next/server";
export async function GET(request: NextRequest){

    const header = await headers();
    console.log(header.get("Authorization"))
    const cookies = request.cookies.get("theme")
    console.log(cookies) 
    return new Response("<h1>Profile page api</h1>",{
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    })
}