import { useSelector } from "react-redux"
import { setDiscoverMovie } from "../../store/movieSlice"
import { DISCOVER_MOVIE_URL } from "../../utils/constants"
import useFetchMovieDetails from "../../utils/hooks/useFetchMovieDetails"
import {DiscoverMoviesAndShows} from "../index"

const DiscoverMovie = () => {
  const movieData = useSelector((state) => state.movie.discoverMovie)
  const url = DISCOVER_MOVIE_URL(1);
  
  useFetchMovieDetails(url, setDiscoverMovie, movieData)

  return (
    <div>
        <DiscoverMoviesAndShows movies={movieData} />
    </div>
  )
}

export default DiscoverMovie