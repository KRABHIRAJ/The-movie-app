import { useSelector } from "react-redux"
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const trendingMovies = useSelector((state) => state.movie.trendingMovies);
  const nowPlayingMovies = useSelector((state) => state.movie.nowPlayingMovies);
  const popularMovies = useSelector((state) => state.movie.popularMovies);
  const topRatedMovies = useSelector((state) => state.movie.topRatedMovies);
  return (
    <div className="bg-black">
        <div className="-mt-20 md:-mt-52 relative z-10">
            <MovieList movies={trendingMovies} title={'Trending Movies'} />
            <MovieList movies={nowPlayingMovies} title={'Now Playing Movies'} />
            <MovieList movies={popularMovies} title={'Popular Movies'} />
            <MovieList movies={topRatedMovies} title={'Top Rated Movies'} />
        </div>
    </div>
  )
}

export default SecondaryContainer