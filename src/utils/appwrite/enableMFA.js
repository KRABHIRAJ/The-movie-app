import { account } from "./appwrite";

const enableMFA = async () => {
    try{
        const result = await account.updateMFA(true);
        console.log('Enabled MFA >>', result);
        
    }catch(err){
        console.log('Err while enabling MFA: ', err.message);
        
    }
}

export default enableMFA;