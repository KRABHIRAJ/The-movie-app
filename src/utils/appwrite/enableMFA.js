import { account } from "./appwrite";

const enableMFA = async () => {
    try{
        await account.updateMFA(true);
        
    }catch(err){
        console.log('Err while enabling MFA: ', err.message);
        
    }
}

export default enableMFA;