import { useRouter } from "next/router";
const plug = () =>{
    const {slug} = useRouter().query ;
    console.log(slug);
    return(
        <>
            <div className="bg-red-700">{slug}</div>
        </>
    )
}
export default plug ;