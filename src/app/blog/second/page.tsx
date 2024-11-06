import { Metadata } from "next"

function getRamdonNum(count: number){
    return Math.floor(Math.random()*count)
}
export const metadata: Metadata = {
    title: {
        absolute:"Absolute Blog Here"
    },
    icons: "https://gensh.honeyhunterworld.com/img/yae_058_icon_70.webp?x46552"
}

export default function SecondBlog() {
    const random = getRamdonNum(2)
    if(random === 1){throw new Error("Error")}
    return <h1>My Second Blog</h1>
};
