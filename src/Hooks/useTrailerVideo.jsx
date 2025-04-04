import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../Utils/Constants";
import { addTrailerVideo } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieID) => {
  const dispatch = useDispatch();

  const getTrailerVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieID +
        "/videos?language=en-US",
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    const fileredData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    
    const trailer = fileredData.length ? fileredData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getTrailerVideo();
  }, []);
};

export default useTrailerVideo;
