import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trendingMovies: [],
  popularMovies: [],
  nowPlayingMovies: [],
  topRatedMovies: [],
  discoverMovie: [],
  discoverTvSeries: [],
};

const movieSlice = createSlice({
  name: "movie",
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
    },
    setDiscoverMovie: (state, action) => {
      state.discoverMovie = [...action.payload];
    },
    setDiscoverTvSeries: (state, action) => {
      state.discoverTvSeries = [...action.payload];
    },
  },
});

export const {
  setTrendingMovies,
  setPopularMovies,
  setNowPlayingMovies,
  setTopRatedMovies,
  setDiscoverMovie,
  setDiscoverTvSeries,
} = movieSlice.actions;

export default movieSlice.reducer;
