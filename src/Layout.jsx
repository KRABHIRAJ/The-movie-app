import { Outlet, useNavigate } from "react-router-dom"
import { Header } from "./components"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux";
import { removeUser, setCurrentUser } from "./store/userSlice";

function Layout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('auth state changed user >>', user);
        const {uid, email, displayName, photoURL} = user;
        dispatch(setCurrentUser({
          uid:uid,
          displayName: displayName,
          photoURL: photoURL,
          email: email
        }))
        navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [])
  return (
    <div className="relative">
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout