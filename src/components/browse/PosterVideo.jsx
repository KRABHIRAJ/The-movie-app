/* eslint-disable react/prop-types */
import { useState } from "react";
import { getYoutubeUrl } from "../../utils/constants";
import useFetchMovieTrailer from "../../utils/hooks/useFetchMovieTrailer";

const PosterVideo = ({ movieData }) => {
  const random = Math.floor(Math.random() * movieData?.length) || 0;
  const [movie] = useState(movieData[random])
  const trailerVideo = useFetchMovieTrailer(movie?.id);

  return (
    <div className="w-screen h-[360px] md:h-screen">
        <iframe
            className="absolute w-screen md:w-[98.7vw] h-[360px] md:h-screen top-0 left-0"
            src={getYoutubeUrl(trailerVideo?.key)}
            referrerPolicy="strict-origin-when-cross-origin"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
        <div className="h-[360px] md:h-screen hidden md:flex w-screen relative bg-gradient-to-r from-gray-700 z-1" />

        <div className="absolute top-[18vh] md:top-[30vh] left-10 text-white">
            <p className="text-sm md:text-2xl  max-w-[50vw] md:max-w-[40vw] line-clamp-1 font-[500] md:py-2">{movie?.original_title}</p>
            <p className="max-w-[40vw] hidden md:line-clamp-3 text-gray-300">{movie?.overview}</p>
            <div className="flex items-center pt-1 md:pt-2 gap-x-4 ">
              <button className="bg-[rgba(0,0,0,0.6)] bg-[#E40914] hover:bg-red-700 text-white text-sm px-4 md:text-[16px] md:px-8 py-1 rounded-[4px]">Play</button>
              <button className="bg-black hidden md:flex bg-opacity-[0.4] hover:bg-opacity-[0.9] text-white px-8 py-1 rounded-[4px]">Info</button>
            </div>
        </div>
    </div>
  );
};

export default PosterVideo;
