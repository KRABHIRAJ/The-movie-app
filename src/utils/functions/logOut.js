import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { removeUser } from "../../store/userSlice";

const logOut = (dispatch, navigate) => {

    signOut(auth)
    .then(() => {
      dispatch(removeUser());
      navigate("/");
    })
    .catch((error) => {
      console.log("Error while logging out: ", error);
    });
}


export default logOut;