import { account } from "./appwrite";

const sendVerificationEmail = async () => {
  try {
    await account.createVerification("http://localhost:5173/verify");
  } catch (err) {
    console.log("Err while sending verification email : ", err.msg);
  }
};

export default sendVerificationEmail;
