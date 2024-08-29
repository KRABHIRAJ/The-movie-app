import { setChallengeId } from "../../store/userSlice";
import { account } from "./appwrite";

const createEmailChallenge = async (dispatch) => {
    try{
        const challenge = await account.createMfaChallenge(
            'email'
        );
        const challengeId = challenge.$id;
        dispatch(setChallengeId(challengeId));
    }catch(err){
        console.log('Err while createEmailChallenge: ', err.message)
    }
}

export default createEmailChallenge;