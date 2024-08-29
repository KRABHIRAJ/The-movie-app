import { removeUser } from "../../store/userSlice";
import { account } from "./appwrite";

const logOutUser = async (dispatch, navigate) => {
    try{
        // const response = await account.deleteSession('current');
        const response = await account.deleteSessions();
        dispatch(removeUser());
        navigate('/');
        console.log('Loggedout : ', response);
        
     }catch(err){
        console.log(`Err while logging out: `, err.message);
    }
}

export default logOutUser;