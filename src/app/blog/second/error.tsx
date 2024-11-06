"use client"

export default function ErrorBoundaryBlog({error}:{error:Error}) {
    return(
        <div>
            <h2>{error.message}</h2>
            <h2>Please reloading page</h2>
            <button onClick={()=>{location.reload()}}>Reload</button>
        </div>
    )
};
