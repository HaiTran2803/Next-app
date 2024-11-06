import Card from "@/components/card";
function randomNum(count: number){
    return(Math.floor(Math.random()*count))
}
export default function UserAnalytics() {
    return(
    <Card>
        User Analytics
        <br/> Test number:
        {randomNum(4)} 
    </Card>)
};

