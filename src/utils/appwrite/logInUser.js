import { setCurrentUser } from "../../store/userSlice";
import { account } from "./appwrite";

const logInUser = async (email, password, dispatch, navigate, setErrorMsg) => {
    
    try{
        const response = await account.createEmailPasswordSession(email, password);
        dispatch(setCurrentUser(response));
        const visRoute = localStorage.getItem('redirectAfterLogin');
        const redirectTo = visRoute || '/browse';
        navigate(redirectTo);
        localStorage.setItem('redirectAfterLogin', '');
        console.log('Account Loggedin >>', response);
        
    }catch(err){
        setErrorMsg(err.message);
        console.log(`Err while signin: `, err.message);
    }
}

export default logInUser;