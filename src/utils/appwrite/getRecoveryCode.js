import { setRecoveryCode } from "../../store/userSlice";
import { account } from "./appwrite";
import enableMFA from "./enableMFA";

const getRecoveryCode = async (dispatch) => {
    try{
        const response = await account.createMfaRecoveryCodes();
        let recoveryCode = '';
        response?.recoveryCodes?.map((code) => {
            recoveryCode += code
        })
        dispatch(setRecoveryCode(recoveryCode));
        enableMFA();
    }catch(err){
        console.log('Err getting recovery code: ', err);
    }
}

export default getRecoveryCode;