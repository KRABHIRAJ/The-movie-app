import deleteAllActiveSession from "../functions/deleteAllActiveSession";
import saveCurrentUser from "../functions/saveCurrentUser";
import { account } from "./appwrite";
import getCurrentUser from "./getCurrentUser";

const verifyUserOtp = async (challengeId, userOtp, dispatch, navigate) => {
    try{
        const response = await account.updateMfaChallenge(
            challengeId, 
            userOtp
        );
        const user = await getCurrentUser();
        await deleteAllActiveSession(response.$id);
        saveCurrentUser(dispatch, navigate, user);
    }catch(err){
        console.log('Err while verifying OTP: ', err.message);
        
    }
}

export default verifyUserOtp;