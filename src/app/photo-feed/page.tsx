import Link from "next/link"
import Wonders from "./wonders"
import Image from "next/image"
import "./styles.css"  
export default function Home() {
    return(
        <main className="container mx-auto my-2">
            <Link href={"/"} className="text-center border-blue-300 border-solid border-2 rounded-md bg-blue-200 hover:bg-red-200 hover:border-red-300">Back</Link>
            <h1 className="text-center text-3xl font-bold my-4">
                New Wonder of the World
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {Wonders.map(({id,src,name}) => (
                    <Link key={id} href={`/photo-feed/${id}`}>
                        <Image alt={name} src={src} className="w-full object-cover aspect-square"/>
                    </Link>
                ))}
            </div>
        </main>
    )
};
