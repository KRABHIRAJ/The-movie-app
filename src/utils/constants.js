export const AVATAR_URL = 'https://avatars.githubusercontent.com/u/65237959?v=4'
export const BGIMAGE_URL = 'https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg'
export const LOGO_URL = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
export const TMDB_API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN}`
    }
};

export const TRENDING_MOVIES_URL = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
export const NOW_PLAYING_URL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
export const POPULAR_URL = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
export const TOP_RATED_URL = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';


export const DISCOVER_TV_SHOW_URL = (page) =>  {
    return `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_original_language=hi&with_watch_providers=8&watch_region=IN`
}
export const DISCOVER_MOVIE_URL =  (page) => {
    return `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_original_language=hi`;
}

export const getVideoUrl = (movieId) => {
    return `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
}

export const getYoutubeUrl = (key) => {
    return `https://www.youtube.com/embed/${key}?autoplay=1&mute=1&loop=1&modestbranding=1&controls=0&rel=0&fs=0&iv_load_policy=3`
}

export const getImageCdnUrl = (size, path) => {
    return `https://image.tmdb.org/t/p/${size}${path}`
}



export const validateInputs = (name, email, password, isSignUp = false) => {

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValidEmail = emailRegex.test(email.toLowerCase());

    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const isValidPassword =  passwordRegex.test(password);

    let isValidName;
    
    if(isSignUp){
        const nameRegex = /^[a-zA-Z ]{2,30}$/;
        isValidName = nameRegex.test(name);
        if(!isValidName){
            return 'Please enter a valid Name.'
        }
    }
    
    if(!isValidEmail){
        return 'Please enter a valid Email'
    }
    if(!isValidPassword){
        return 'Password requirements : >=8 letters, >=1 Symbol, >=1 Uppercase & Lowercase letters'
    }
    

    return null;
}


