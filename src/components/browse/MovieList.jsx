import MovieCard from "./MovieCard";

/* eslint-disable react/prop-types */
const MovieList = ({movies, title}) => {
  if(movies.length === 0) return;
  return (
    <div className="p-4">
        <p className="text-2xl text-white">{title}</p>
        <div className="flex overflow-x-scroll no-scrollbar py-4" >
            <div className="flex gap-x-4">
                {
                    movies?.map((movie) => (
                        <MovieCard key={movie?.id} movie={movie} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default MovieList