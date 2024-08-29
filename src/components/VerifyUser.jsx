import { useEffect } from "react"
import { account } from "../utils/appwrite/appwrite";

const VerifyUser = () => {
    const updateUserVerification = async (userId, secret) => {
        try{
            await account.updateVerification(userId, secret);
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