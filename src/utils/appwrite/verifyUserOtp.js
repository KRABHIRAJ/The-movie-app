import saveCurrentUser from "../functions/saveCurrentUser";
import { account } from "./appwrite";
import getCurrentUser from "./getCurrentUser";

const verifyUserOtp = async (challengeId, userOtp, dispatch, navigate) => {
    try{
        await account.updateMfaChallenge(
            challengeId, 
            userOtp
        );
        const user = await getCurrentUser();
        saveCurrentUser(dispatch, navigate, user);
    }catch(err){
        console.log('Err while verifying OTP: ', err.message);
        
    }
}

export default verifyUserOtp;