import { useSelector } from "react-redux"
import { setDiscoverTvSeries } from "../../store/movieSlice"
import { DISCOVER_TV_SHOW_URL } from "../../utils/constants"
import useFetchMovieDetails from "../../utils/hooks/useFetchMovieDetails"
import {DiscoverMoviesAndShows} from "../index"

const TvShow = () => {
  const tvSeriesData = useSelector((state) => state.movie.discoverTvSeries)
  const url = DISCOVER_TV_SHOW_URL(1);
  console.log(url);
  
  useFetchMovieDetails(url, setDiscoverTvSeries, tvSeriesData)

  return (
    <div>
        <DiscoverMoviesAndShows movies={tvSeriesData} />
    </div>
  )
}

export default TvShow