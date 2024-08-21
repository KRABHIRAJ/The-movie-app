import {MovieCard} from "../index";

/* eslint-disable react/prop-types */
const DiscoverMoviesAndShows = ({movies}) => {
 
  if(movies.length === 0) return;

  return (
    <div className="bg-black mt-[62px] p-4 grid grid-cols-3 md:grid-cols-5 gap-4 justify-center">
        {
            movies.map((movie) => {
              return movie?.poster_path === null ? null : 
                 <div className="flex justify-center" key={movie?.id}>
                    <MovieCard  movie={movie}/>
                </div>
            })
        }
    </div>
  )
}

export default DiscoverMoviesAndShows