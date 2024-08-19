import { useSelector } from "react-redux";
import PosterVideo from "./PosterVideo";

const MainContainer = () => {
  const movieData = useSelector((state) => state.movie.nowPlayingMovies);
  
  if(movieData.length === 0) return;

  return (
    <div>
        <PosterVideo movieData={movieData}/>
    </div>
  )
}

export default MainContainer