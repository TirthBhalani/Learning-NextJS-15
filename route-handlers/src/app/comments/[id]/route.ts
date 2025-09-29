import { comments } from "../data";

export async function GET(_request: Request, {params}: {params: Promise<{id: string}>}){

    const {id}  = await params;
    const comment = comments.find((com)=> com.id == parseInt(id))
return  Response.json(comment)

}