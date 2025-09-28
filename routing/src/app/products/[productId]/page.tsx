export default async function productDetails(
    {params} : {params : Promise<{productId : string}>}
){
    const pid = (await params)?.productId ?? "No pid";
    console.log("Tis is pid : " + pid)
    return <h1>This page returns the specific product ID : {pid}</h1>
}