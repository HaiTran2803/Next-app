import Link from "next/link"
import "./(auth)/styles.css"
export default function Home() {
    return (
        <div>
            <div style={{display:"flex", flexDirection:"row", gap:"8px", margin:"10px 0px 10px 0px"}}>
                <h1>Welcome</h1>
                    <Link href={"/photo-feed"} className="w-32 text-center border-blue-300 border-solid border-2 rounded-md bg-blue-200 hover:bg-green-200 hover:border-green-300">Photo Feed</Link><br/>
                    <Link href="/blog" className="w-32 text-center border-blue-300 border-solid border-2 rounded-md bg-blue-200 hover:bg-green-200 hover:border-green-300">Blog</Link><br/>
                    <Link href="/products" className="w-32 text-center border-blue-300 border-solid border-2 rounded-md bg-blue-200 hover:bg-green-200 hover:border-green-300">Products</Link>
                <button> test</button>
            </div>
        </div>
    )
}
