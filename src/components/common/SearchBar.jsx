import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const search = () => {
    console.log('Searched');
    
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
