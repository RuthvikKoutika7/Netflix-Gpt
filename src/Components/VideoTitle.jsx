import { INFO_LOGO, PLAY_LOGO } from "../Utils/Constants";

const VideoTitle = ({title, overview})=>{
    return (
        <div className="pt-[20%] px-14 w-screen aspect-video absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="w-1/3 py-6 ">{overview}</p>
            <div className="flex">
            <button className="bg-gray-50 text-black py-2 px-4  rounded-lg hover:bg-gray-400 cursor-pointer"> ▶️ Play</button>
            <button className="flex justify-between items-center mx-2 bg-gray-200 rounded-lg text-black py-2 px-4"><img src={INFO_LOGO} alt="info-logo" className="w-8 h-8 mr-2"/> More Info</button>
            </div>
            
        </div>
    )
}


export default VideoTitle;
