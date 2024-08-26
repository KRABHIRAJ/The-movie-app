import { useEffect } from "react"
import { account } from "../utils/appwrite/appwrite";
import { enableMFA } from "../utils/appwrite";

const VerifyUser = () => {
    const updateUserVerification = async (userId, secret) => {
        try{
            const response = await account.updateVerification(userId, secret);
            console.log('User verified >>', response);
            enableMFA();
        }catch(err){
            console.log('Err while updating verification : ', err.message)
        }
    }

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const secret = urlParams.get('secret');
        const userId = urlParams.get('userId');
        updateUserVerification(userId, secret);
    }, [])
  return (
    <div className="text-2xl bg-black flex-1 h-screen w-screen justify-center items-center">
        <p>Verifying ...</p>

    </div>
  )
}

export default VerifyUser