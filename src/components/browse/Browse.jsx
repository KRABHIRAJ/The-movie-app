import { setNowPlayingMovies, setPopularMovies, setTopRatedMovies, setTrendingMovies } from "../../store/movieSlice"
import { NOW_PLAYING_URL, POPULAR_URL, TOP_RATED_URL, TRENDING_MOVIES_URL } from "../../utils/constants"
import useFetchMovieDetails from "../../utils/hooks/useFetchMovieDetails"
import {MainContainer, SecondaryContainer} from "../index";

function Browse() {
  useFetchMovieDetails(NOW_PLAYING_URL, setNowPlayingMovies);
  useFetchMovieDetails(TRENDING_MOVIES_URL, setTrendingMovies);
  useFetchMovieDetails(TOP_RATED_URL, setTopRatedMovies);
  useFetchMovieDetails(POPULAR_URL, setPopularMovies);

  return (
    <div className="overflow-x-hidden">
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse