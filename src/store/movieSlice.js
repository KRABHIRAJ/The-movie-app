import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    trendingMovies: [],
    popularMovies: [],
    nowPlayingMovies: [],
    topRatedMovies: [],
}

const movieSlice = createSlice({
    name:'movie',
    initialState,
    reducers: {
        setTrendingMovies: (state, action) => {
            state.trendingMovies = [...action.payload];
        },
        setPopularMovies: (state, action) => {
            state.popularMovies = [...action.payload];
        },
        setNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = [...action.payload];
        },
        setTopRatedMovies: (state, action) => {
            state.topRatedMovies = [...action.payload];
        }
    }
})

export const {setTrendingMovies, setPopularMovies, setNowPlayingMovies, setTopRatedMovies} = movieSlice.actions;

export default movieSlice.reducer;