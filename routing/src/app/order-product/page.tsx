"use client";
import { useRouter } from "next/navigation"

export default function orderProd(){
    const router = useRouter();
    const handleClick = ()=>{
        console.log("Placing your order")
        router.push("/")

    }
    return(
        <>
            <h1>Place a order by clicking the button</h1>
            <button onClick={handleClick}>Place Order</button>
        </>
    )
}