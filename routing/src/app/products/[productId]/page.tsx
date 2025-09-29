
import { Metadata } from "next";
type Props  = {
    params : Promise<{productId : string}>
}

export const generateMetadata = async ({params} : Props): Promise<Metadata> =>{
    const id = (await params).productId
    return {
        title : `Product ${id}`
    }
}

export default async function productDetails(
    {params} : Props
){
    const pid = (await params)?.productId ?? "No pid";
    console.log("Tis is pid : " + pid)
    return <h1>This page returns the specific product ID : {pid}</h1>
}