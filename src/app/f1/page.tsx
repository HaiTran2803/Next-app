import Link from "next/link"
export default function F1() {
    return(
        <div>
            <h1>This is layout at f1</h1>
            <Link href="/f1/f2"> Go to f2</Link>
            <Link href="/f1/f3"> Go to f3</Link>
            <Link href="/f1/f4"> Go to f4</Link>
        </div>
    )
};
