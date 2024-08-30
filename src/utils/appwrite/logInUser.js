import { setIsMfaRequired } from "../../store/userSlice";
import deleteAllActiveSession from "../functions/deleteAllActiveSession";
import saveCurrentUser from "../functions/saveCurrentUser";
import { account } from "./appwrite";
import createEmailChallenge from "./createEmailChallenge";
import getCurrentUser from "./getCurrentUser";

const performMFA = (dispatch) => {
    createEmailChallenge(dispatch);
    dispatch(setIsMfaRequired(true));
}



const logInUser = async (email, password, dispatch, navigate, setErrorMsg) => {
    try{
        const response = await account.createEmailPasswordSession(email, password);
        const activeId = response.$id;
        const user = await getCurrentUser();
        if(user){
            await deleteAllActiveSession(activeId);
            saveCurrentUser(dispatch, navigate, user);
        }else{
            performMFA(dispatch);
        }
        
    }catch(err){
        if (err.type === `user_more_factors_required`){
            // redirect to perform MFA
            performMFA(dispatch);
        }
        else {
            setErrorMsg(err.message);
            console.log(`Err while signin: `, err.message);
        }
    }
}

export default logInUser;