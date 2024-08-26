import { account } from "./appwrite";

const sendVerificationEmail = async () => {
  try {
    const response = await account.createVerification("http://localhost:5173/verify");
    console.log("Sent verification email: ", response);
  } catch (err) {
    console.log("Err while sending verification email : ", err.msg);
  }
};

export default sendVerificationEmail;
