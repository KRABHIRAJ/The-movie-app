import { useEffect, useState } from "react";
import { getVideoUrl, TMDB_API_OPTIONS } from "../constants"

const useFetchMovieTrailer = (movieId) => {
    const [trailer, setTrailer] = useState();
    const getMovieTrailer = async () => {
        const url = getVideoUrl(movieId);
        const res = await fetch(url, TMDB_API_OPTIONS);
        // const videos = await response.json();
        const videos = await res.json();
        const trailer = videos?.results?.filter((video) => video.type === "Trailer");
        setTrailer(trailer?.[0]);
    }


    useEffect(() => {
        getMovieTrailer();
    }, [])

    return trailer;

}


export default useFetchMovieTrailer;