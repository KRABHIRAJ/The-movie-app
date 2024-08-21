import { useSelector } from "react-redux";
import { setNowPlayingMovies, setPopularMovies, setTopRatedMovies, setTrendingMovies } from "../../store/movieSlice"
import { NOW_PLAYING_URL, POPULAR_URL, TOP_RATED_URL, TRENDING_MOVIES_URL } from "../../utils/constants"
import useFetchMovieDetails from "../../utils/hooks/useFetchMovieDetails"
import {MainContainer, SecondaryContainer} from "../index";

function Browse() {
  const nowPlayingMovies = useSelector((state) => state.movie.nowPlayingMovies);
  const popularMovies = useSelector((state) => state.movie.popularMovies);
  const trendingMovies = useSelector((state) => state.movie.trendingMovies);
  const topRatedMovies = useSelector((state) => state.movie.topRatedMovies);
  useFetchMovieDetails(NOW_PLAYING_URL, setNowPlayingMovies, nowPlayingMovies);
  useFetchMovieDetails(TRENDING_MOVIES_URL, setTrendingMovies, popularMovies);
  useFetchMovieDetails(TOP_RATED_URL, setTopRatedMovies, trendingMovies);
  useFetchMovieDetails(POPULAR_URL, setPopularMovies,topRatedMovies);

  return (
    <div className="overflow-x-hidden">
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse