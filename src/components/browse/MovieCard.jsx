/* eslint-disable react/prop-types */
import { getImageCdnUrl } from "../../utils/constants"

const MovieCard = ({movie}) => {
  if(!movie) return;
  const image_path = movie?.poster_path || movie?.profile_path
  return (
    <div className="flex-shrink-0 cursor-pointer">
        <img src={getImageCdnUrl('w500', image_path)} alt={movie?.original_title} className="w-[120px] h-[160px] md:w-[150px] md:h-[200px] lg:w-[170px] lg:h-[250px] object-cover rounded-md" />
    </div>
  )
}

export default MovieCard