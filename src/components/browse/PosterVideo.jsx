/* eslint-disable react/prop-types */
import { useState } from "react";
import { getYoutubeUrl } from "../../utils/constants";
import useFetchMovieTrailer from "../../utils/hooks/useFetchMovieTrailer";

const PosterVideo = ({ movieData }) => {
  const random = Math.floor(Math.random() * movieData?.length) || 0;
  const [movie] = useState(movieData[random])
  const trailerVideo = useFetchMovieTrailer(movie?.id);

  return (
    <div className="w-screen h-screen">
        <iframe
            className="absolute w-screen h-screen top-0 left-0"
            src={getYoutubeUrl(trailerVideo?.key)}
            referrerPolicy="strict-origin-when-cross-origin"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
        <div className="h-screen w-screen relative bg-gradient-to-r from-gray-700 z-1" />

        <div className="absolute top-[30vh] left-10 text-white">
            <p className="text-2xl max-w-[40vw] line-clamp-1 font-[500] py-2">{movie?.original_title}</p>
            <p className="max-w-[40vw] text-gray-300 line-clamp-3">{movie?.overview}</p>
            <div className="flex items-center pt-2 gap-x-4 ">
              <button className="bg-[#E40914] hover:bg-red-700 text-white px-8 py-1 rounded-[4px]">Play</button>
              <button className="bg-black bg-opacity-[0.4] hover:bg-opacity-[0.9] text-white px-8 py-1 rounded-[4px]">Info</button>
            </div>
        </div>
    </div>
  );
};

export default PosterVideo;
