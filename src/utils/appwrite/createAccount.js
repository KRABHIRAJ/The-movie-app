import { account } from "./appwrite";
import {  ID } from "appwrite";
import {logInUser} from "./index";
const createAccount = async (name, email, password, dispatch, navigate, setErrorMsg) => {
    try{
        const response = await account.create(ID.unique(), email, password, name);
        logInUser(email, password, dispatch, navigate);
        console.log('Account created >>', response);
        
    }catch(err){
        setErrorMsg(err.message);
        console.log(`Err while signup: `, err.message);
    }
}

export default createAccount;