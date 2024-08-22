import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { SEARCH_MOVIE_URL, TMDB_API_OPTIONS } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchData } from "../../store/movieSlice";
import { toggleSidebarStatus } from "../../store/userSlice";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const isSidebarOpen = useSelector((state) => state.user.isSidebarOpen);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const search = async () => {
    isSidebarOpen && dispatch(toggleSidebarStatus());
    if(searchQuery.length === 0) return;

    const url = SEARCH_MOVIE_URL(searchQuery);
    const res = await fetch(url, TMDB_API_OPTIONS);
    const movieData = await res.json();  
    dispatch(setSearchData(movieData?.results));
    navigate('/search');
  }

  const searchSubmit = (e) => {
    e.preventDefault();
    search();
  }
  return (
    <div className="text-white bg-white w-full rounded-lg">
      <form className="flex items-center justify-between" onSubmit={searchSubmit}>
        <input
            type="text"
            placeholder="Search movies and TV Series"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            className="outline-none border-none text-black px-3 py-1 rounded-md w-[85%]"
        />
        <button className="bg-[#E40914] px-2 py-2 rounded-r-lg">
            <SearchIcon sx={{ color: 'white', fontSize: '20px', fontWeight: '600' }} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
