import { account } from "./appwrite";

const getCurrentUser = async () => {
    try{
        const response =  await account.get();
        return response;

    }catch(err){
        console.log(`No user : `, err.message);
        return null;
    }
}

export default getCurrentUser;