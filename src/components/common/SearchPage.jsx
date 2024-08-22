import { useSelector } from "react-redux"
import DiscoverMoviesAndShows from "../discover/DiscoverMoviesAndShows"

const SearchPage = () => {
  const movieData = useSelector((state) => state.movie.searchData)
  return (
    <div className="h-screen bg-black">
        <DiscoverMoviesAndShows movies={movieData} />
    </div>
  )
}

export default SearchPage
