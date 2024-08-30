import { account } from "./appwrite";

const deleteSession = async (sessionId) => {
    try{
        await account.deleteSession(sessionId);
        console.log('Deleted Session with ID: ', sessionId);
        
    }catch(err){
        console.log(`Err while deleting session ${sessionId}: `, err.message);
    }
}

export default deleteSession;