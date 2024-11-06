"use client"

import { Url } from "next/dist/shared/lib/router/router"
import { notFound } from "next/navigation"


function getRandomInt(count: number){
    return Math.floor(Math.random()*count)
}

function httpGetAsync(theUrl: Url, callback:Function ) {
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.onreadystatechange = function() {
        if(xmlHttp.readyState == 4 && xmlHttp.status==200) callback(xmlHttp)
    }
    xmlHttp.open("GET", `${theUrl}` , true)
    xmlHttp.send(null)
}


export default function ReviewDetail({params}:{params:{productId:string, reviewId: string}}) {
    // const random = getRandomInt(2)
    // if(random === 1){throw new Error("Error loading review")}
    if(parseInt(params.reviewId)>1000){
        notFound()
    }

    return(
        <div>
            <p>Review {params.reviewId} for product {params.productId}</p>
            <br/><button>test</button>
        </div>
    )
};
