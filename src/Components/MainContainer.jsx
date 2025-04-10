import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = ()=>{
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies) return null;  
    const {original_title, overview, id} = movies[11];
    return(
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieID={id}/>
        </div>
    )
}
export default MainContainer;
