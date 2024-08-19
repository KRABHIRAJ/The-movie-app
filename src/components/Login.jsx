import { useRef, useState } from "react";
import { AVATAR_URL, BGIMAGE_URL, validateInputs } from "../utils/constants";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../store/userSlice";

function Login() {
  const [isSigninPage, setIsSigninPage] = useState(true);
  const email = useRef();
  const password = useRef();
  const fullName = useRef();
  const [errorMsg, setErrorMsg] = useState('');
  const dispatch = useDispatch();


  const togglePageType = () => {
    setIsSigninPage(!isSigninPage);
  };
  const handleFormSubmit = () => {
    let errorMessage;
    if(!isSigninPage){
      errorMessage = validateInputs(fullName.current.value, email.current.value, password.current.value, true);
    }else{
      errorMessage = validateInputs('', email.current.value, password.current.value);
    }
    console.log('errorMessage >>', errorMessage);
    setErrorMsg(errorMessage);
    if(!errorMessage){
      isSigninPage ? signInUser() : createNewUser();
    }

  }

  const createNewUser = () => {
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: fullName.current.value, photoURL: AVATAR_URL
        }).then(() => {
          
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(setCurrentUser({
            uid:uid,
            displayName: displayName,
            photoURL: photoURL,
            email: email
          }))
        }).catch((error) => {
          console.warn(`Error while Updating profile: ` , error);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(`${errorCode} - ${errorMessage}`);
      });
  }

  const signInUser = () => {
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Logged in user >>', user);
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMsg(`${errorCode} - ${errorMessage}`);
    });
  }


  return (
    <div className="absolute top-0">
      <img
        src={BGIMAGE_URL}
        alt="bg-image"
        className="w-[100vw] h-[100vh] object-cover z-0"
      />
      <div className="w-[100vw] h-[100vh] absolute top-0 bg-black opacity-[0.5] z-[5]" />

      {/* Signin / Signup form */}
      <div className="absolute top-0 h-[100vh] w-[100vw] z-[10] flex justify-center items-center">
        <div className="text-white py-8 px-14 rounded-lg min-w-[350px] w-[35%]"  style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
          <h1 className="text-3xl font-[700] mb-5">
            {isSigninPage ? "Sign In" : "Sign Up"}
          </h1>
          {!isSigninPage && (
            <div className="my-3 w-full">
              <input
                ref={fullName}
                type="text"
                placeholder="Enter Full Name"
                className="outline-none p-2 bg-gray-700  rounded-lg w-full"
              />
            </div>
          )}
          <div className="my-3 w-full">
            <input
              ref={email}
              type="email"
              placeholder="Enter Email"
              className="outline-none p-2 text-white bg-gray-700 rounded-lg w-full"
            />
          </div>
          <div className="my-3 w-full">
            <input
              ref={password}
              type="password"
              placeholder="Enter Password"
              className="outline-none p-2 bg-gray-700  rounded-lg w-full"
            />
          </div>
          {
            errorMsg && errorMsg?.length > 0 && 
            <div>
              <p className="text-[#E40914] font-[600]">{errorMsg}</p>
            </div>
          }
          <button onClick={handleFormSubmit} className="bg-[#E40914] w-full text-center py-2 rounded-lg mt-5 font-[500]">
            {isSigninPage ? "Sign In" : "Sign Up"}
          </button>
          <div className="cursor-pointer mt-4" onClick={togglePageType}>
            <p className="font-[500]">
              {isSigninPage
                ? "New here? Sign Up now!"
                : "Already registered? Sign in"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
