import { StaticImageData } from "next/image";
import p1 from "./photos/1.png"
import p2 from "./photos/2.png"
import p3 from "./photos/3.jpg"
import p4 from "./photos/4.jpg"
import p5 from "./photos/5.jpg"
import p6 from "./photos/6.jpg"
import p7 from "./photos/7.jpg"
import p8 from "./photos/8.jpg"
export type WonderImage = {
    id: string
    name: string
    src: StaticImageData
    photographer: string
    location: string
}

const wondersImages: WonderImage[] = [
    {
        id: "1",
        name: "p1",
        src: p1,
        photographer: "p1",
        location: "p1"
    },
    {
        id: "2",
        name: "p2",
        src: p2,
        photographer: "p2",
        location: "p2"
    },
    {
        id: "3",
        name: "p3",
        src: p3,
        photographer: "p3",
        location: "p3"
    },
    {
        id: "4",
        name: "p4",
        src: p4,
        photographer: "p4",
        location: "p4"
    },
    {
        id: "5",
        name: "p5",
        src: p5,
        photographer: "p5",
        location: "p5"
    },
    {
        id: "6",
        name: "p6",
        src: p6,
        photographer: "p6",
        location: "p6"
    },
    {
        id: "7",
        name: "p7",
        src: p7,
        photographer: "p7",
        location: "p7"
    },
    {
        id: "8",
        name: "p8",
        src: p8,
        photographer: "p8",
        location: "p8"
    },
]

export default wondersImages