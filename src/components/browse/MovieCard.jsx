/* eslint-disable react/prop-types */
import { getImageCdnUrl } from "../../utils/constants"

const MovieCard = ({movie}) => {
  if(!movie) return;
  return (
    <div className="flex-shrink-0 cursor-pointer">
        <img src={getImageCdnUrl('w500', movie?.poster_path)} alt={movie?.original_title} className="w-[130px] h-[170px] md:w-[170px] md:h-[250px] object-cover rounded-md" />
    </div>
  )
}

export default MovieCard