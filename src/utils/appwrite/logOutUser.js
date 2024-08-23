import { removeUser } from "../../store/userSlice";
import { account } from "./appwrite";

const logOutUser = async (dispatch, navigate) => {
    try{
        const response = await account.deleteSession('current');
        dispatch(removeUser());
        navigate('/');
        console.log('Account Loggedout >>', response);
     }catch(err){
        console.log(`Err while logging out: `, err.message);
    }
}

export default logOutUser;