import { useDispatch, useSelector } from "react-redux";
import { toggleSidebarStatus } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";
import useGetIsMobileView from "../../utils/hooks/useGetIsMobileView";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from '@mui/icons-material/Menu';
import {HeaderBar, SearchBar} from "../index";
import CloseIcon from '@mui/icons-material/Close';
import logOut from "../../utils/functions/logOut";


function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  // Hook to decide whether user is using on mobile or web.
  useGetIsMobileView();
  
  const isMobileView = useSelector((state) => state.user.isMobileView);
  const isBarOpen = useSelector((state) => state.user.isSidebarOpen);
   

  const userLogOut = () => {
    logOut(dispatch, navigate);
  };

  

  const toggleSidebar = () => {
    dispatch(toggleSidebarStatus());
  }
  return (
    <div className="w-screen">
      <div className="w-full m-auto z-[100] px-5 fixed bg-black top-0 flex justify-between items-center">
        <img
          src={LOGO_URL}
          alt="app-logo"
          width={Object.keys(user).length > 0 ? 150 : 180}
          className={`${Object.keys(user).length > 0 ? 'm-0' : 'm-auto'} z-[10] cursor-pointer`}
        />


        {
          (!isMobileView && (Object.keys(user).length > 0) && (
            <div className="z-[100] flex items-center gap-x-4 flex-[0.5] justify-end">
              <div>
                <SearchBar />
              </div>
              <p className="relative inline-block text-gray-300 transition-all duration-300 ease-in-out hover:text-white cursor-pointer font-[500] group">
                Movies
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </p>
              <p className="relative inline-block text-gray-300 transition-all duration-300 ease-in-out hover:text-white cursor-pointer font-[500] group">
                TV Shows
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </p>
              <button onClick={userLogOut} className="px-2 pb-1 text-white bg-[#E40914] hover:bg-[#ed5b63] transition-all duration-300 text-center rounded-lg">
                <LogoutIcon fontSize="14" />
              </button>
            </div>
          ))
        } 
        {
          (isMobileView && (Object.keys(user).length > 0)) && (
            <>
              <button onClick={toggleSidebar} className="px-2 pb-1 text-white bg-[#ed5b63] text-center rounded-lg">
                {isBarOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </>
          )
        }
        
      </div>
      {
          (isBarOpen && isMobileView && (Object.keys(user).length > 0)) && (
            <HeaderBar />
          )
      }
    </div>
  );
}

export default Header;
