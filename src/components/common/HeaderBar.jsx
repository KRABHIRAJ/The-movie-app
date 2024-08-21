import LogoutIcon from "@mui/icons-material/Logout";
import logOut from "../../utils/functions/logOut";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {SearchBar} from "../index";

const HeaderBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogOut = () => {
    logOut(dispatch, navigate);
  };
  return (
    <div className="flex flex-col  px-4 bg-[rgba(0,0,0,1)] h-[110px] w-screen absolute top-16 z-[100] ">
        <div className="flex items-center justify-between">
            <p className="text-white font-[500] bg-[#E40914] pt-1 px-4 pb-2 rounded-lg">Movies</p>
            <p className="text-white font-[500] bg-[#E40914] pt-1 px-4 pb-2 rounded-lg">TV Shows</p>
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
