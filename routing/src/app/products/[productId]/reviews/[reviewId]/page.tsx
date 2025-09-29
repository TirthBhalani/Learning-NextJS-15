import { notFound } from "next/navigation";

export default function reviewDetails(
    {params} : {params : {reviewId: string, productId: string}}
){
    const reviewId = params.reviewId
    const productId = params.productId
    if(parseInt(productId)>1000){
        
        notFound();
    }
    
    return <h1>This is the review Id : {reviewId} of product Id : {productId}</h1>
}