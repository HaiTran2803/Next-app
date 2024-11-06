const Card = ({children}:{children: React.ReactNode}) => {
    const cardStyle = {
        padding: "100px",
        margin:"10px",
        boxShadow: "0 4px 8px 1px rgb(0, 0, 0, 0.2)",
        border: "1px solid #ddd",
        display:"flex",
        justifuContent: "center",
        alignItems:"center",
    }
    return <div style={cardStyle}>{children}</div>
}

export default Card