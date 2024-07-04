import CreatePost from "@/components/component/CreatePost";
import { ProfileCard } from "@/components/component/ProfileCard";


export default function Dashboard() {
    return (
        <div className="w-screen h-screen flex flex-col md:flex-row z-0 pt-12">
            <div className="left bg-red-400 md:w-[26%] p-8" ><ProfileCard/></div>
            <div className="center bg-blue-400 md:w-[51%] p-8"><CreatePost/></div>
            <div className="right bg-slate-400 md:w-[23%]" >right</div>
        </div>
        )
    
}