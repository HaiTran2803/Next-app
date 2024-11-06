import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title:"Blog"
}

export default function Blog() {
    return(
        <div>
            <h1>My Blog</h1>
            <br/><Link href="blog/first">First blog</Link>
            <br/><Link href="blog/second">Second blog</Link>
        </div>
    ) 
};
