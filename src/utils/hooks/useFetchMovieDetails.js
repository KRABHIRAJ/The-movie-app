import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../constants";
import { useDispatch } from "react-redux";

const useFetchMovieDetails = (url, dispatchFunction) => {
    const dispatch = useDispatch();

    const fetchMovieDetails = async () => {
        const res = await fetch(url, TMDB_API_OPTIONS);
        const movieData = await res.json();
        dispatch(dispatchFunction(movieData?.results));
    }

    useEffect(() => {
        fetchMovieDetails();
    }, [])
}

export default useFetchMovieDetails;