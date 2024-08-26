import { useDispatch, useSelector } from "react-redux";
import { toggleSidebarStatus } from "../../store/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";
import useGetIsMobileView from "../../utils/hooks/useGetIsMobileView";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from '@mui/icons-material/Menu';
import {HeaderBar, HeaderMenuItem, SearchBar} from "../index";
import CloseIcon from '@mui/icons-material/Close';
import { logOutUser, sendVerificationEmail } from "../../utils/appwrite";
import WarningIcon from '@mui/icons-material/Warning';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  // Hook to decide whether user is using on mobile or web.
  useGetIsMobileView();
  
  const isMobileView = useSelector((state) => state.user.isMobileView);
  const isBarOpen = useSelector((state) => state.user.isSidebarOpen);
   

  const userLogOut = () => {
    logOutUser(dispatch,navigate);
  };

  

  const toggleSidebar = () => {
    dispatch(toggleSidebarStatus());
  }
  return (
    <div className="w-screen">
      <div className="w-full m-auto z-[100] px-5 fixed bg-black top-0 flex justify-between items-center">
        <Link to="/browse">
          <img
            src={LOGO_URL}
            alt="app-logo"
            width={Object.keys(user).length > 0 ? 150 : 180}
            className={`${Object.keys(user).length > 0 ? 'm-0' : 'm-auto'} z-[10] cursor-pointer`}
          />
        </Link>


        {
          (!isMobileView && (Object.keys(user).length > 0) && (
            <div className="z-[100] flex items-center gap-x-4 flex-[0.7] justify-end">
              {
                !user?.emailVerification && <div onClick={sendVerificationEmail} className="flex items-center gap-x-[1px]">
                <WarningIcon sx={{ color: '#F6C301', fontSize: '20px', fontWeight: '600' }} />
                <HeaderMenuItem title='Verify Email'/>
              </div>
              }
              
              <div>
                <SearchBar />
              </div>
              <Link to="/movie">
                <HeaderMenuItem title='Movie' />
              </Link>
              <Link to="/tv">
                <HeaderMenuItem title='TV Shows' />
              </Link>
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
