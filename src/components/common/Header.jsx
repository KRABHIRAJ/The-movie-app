import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const logout = () => {
    console.log('logout');
    
    signOut(auth).then(() => {
        dispatch(removeUser()); 
        navigate('/') 
    }).catch((error) => {
      console.log('Error while logging out: ', error);
    });
  }
  return (
    <div className="max-w-[1000px] m-auto pt-2 z-[10] flex justify-between items-center">
        <img 
            src={LOGO_URL}
            alt="app-logo"
            height={50}
            width={180}
            className="z-[10] cursor-pointer"
        />
        {
          Object.keys(user).length > 0 && <div onClick={logout} className="z-[100]">
            <button className="px-4 py-2  text-white bg-[#E40914] text-center rounded-lg font-[500]">Sign out</button>
          </div>
        }
    </div>
  )
}

export default Header