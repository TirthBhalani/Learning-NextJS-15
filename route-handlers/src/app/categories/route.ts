export const dynamic  = "force-static"
export const revalidate = 10
export async function GET(){
    const categories = [{"id":1, "name":"pizza"}]

    return Response.json(categories)
}