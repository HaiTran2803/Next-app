
export default function BlogLayout({children}:{children: React.ReactNode}) {
    return(
        <div style={{background:"lightblue", opacity:"75%"}}>
            {children}
            This is layout on Blog
        </div>
    )
};
