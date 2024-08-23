import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SearchBar } from "../index";
import { toggleSidebarStatus } from "../../store/userSlice";
import {logOutUser} from "../../utils/appwrite";

const HeaderBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogOut = () => {
    logOutUser(dispatch,navigate);
    dispatch(toggleSidebarStatus())
  };
  return (
    <div className="flex flex-col  px-4 bg-[rgba(0,0,0,1)] h-[110px] w-screen fixed top-[62px] z-[1000] ">
      <div className="flex items-center justify-between">
        <Link to="/movie">
          <p onClick={() => dispatch(toggleSidebarStatus())} className="text-white font-[500] bg-[#E40914] pt-1 px-4 pb-2 rounded-lg">
            Movies
          </p>
        </Link>
        <Link to="/tv">
          <p onClick={() => dispatch(toggleSidebarStatus())} className="text-white font-[500] bg-[#E40914] pt-1 px-4 pb-2 rounded-lg">
            TV Shows
          </p>
        </Link>
        <button
          onClick={userLogOut}
          className="px-3 pb-2 pt-1 text-white bg-[#E40914] text-center rounded-lg"
        >
          <LogoutIcon fontSize="14" />
        </button>
      </div>
      <div className="mt-3">
        <SearchBar />
      </div>
    </div>
  );
};

export default HeaderBar;
