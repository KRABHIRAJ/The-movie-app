import { account } from "./appwrite";

const listAllSessions = async () => {

    try{
        const result = await account.listSessions();
        return result;
    }catch(err){
        console.log('listAllSessions Err :', err.message)
        return null;
    }
}

export default listAllSessions;