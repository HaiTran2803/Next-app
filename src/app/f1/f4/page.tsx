import Link from "next/link"
export default function F4() {
    return(
        <div>
            <h1>This is layout at f4</h1>
            <Link href="/f1"> Go to f1</Link>
            <Link href="/f1/f3"> Go to f3</Link>
            <Link href="/about"> Go to About</Link>
        </div>
    )
};
