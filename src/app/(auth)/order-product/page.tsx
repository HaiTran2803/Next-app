"use client"
import { useRouter } from "next/navigation"

export default function OrderProduct() {
    const router = useRouter()
    const handleClick = () => {
        console.log("placing u order")
        router.push("/") // come to destination page
        // router.replace("/") // replace 
        // router.back() // prev browser in history stack
        // router.forward()
    }
    return(
        <>
            <h1>Order Product</h1>
            <button onClick={handleClick}>Place Order</button>
        </>
    )
};
