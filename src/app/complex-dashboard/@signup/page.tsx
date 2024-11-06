import Card from "@/components/card";
import "../../(auth)/styles.css"
import "./style.css"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute:"Absolute Blog Here"
    },
    // icons: "https://gensh.honeyhunterworld.com/img/clorinde_098_icon_70.webp?x46552"
}

export default function SignUp() {
    return(
        <div>
            <div className={"p-20 m-4 border-solid border-2 shadow-lg hover:bg-teal-300 hover:shadow-teal-400 hover:border-teal-300 hover:rounded-xl hover: duration-500  "}>
                Please Signup to countinue
            </div>
            <div className="another">
                Another
            </div>
            <div className="newone" id="1">
                NewOne
            </div>
        </div>
    )
};
