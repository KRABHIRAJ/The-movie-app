import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "./components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeUser, setCurrentUser } from "./store/userSlice";
import { getCurrentUser } from "./utils/appwrite";

function Layout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUser = async () => {
    const user = await getCurrentUser();

    if (user) {
      dispatch(setCurrentUser(user));
      navigate("/browse");
    } else {
      // User is signed out
      dispatch(removeUser());
      navigate("/");
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="relative">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
