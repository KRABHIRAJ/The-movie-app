import { useRef, useState } from "react";
import { BGIMAGE_URL, validateInputs } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { createAccount, logInUser } from "../utils/appwrite";
import { useNavigate } from "react-router-dom";
import {MultiFactorInput} from "./index";

function Login() {
  const [isSigninPage, setIsSigninPage] = useState(true);
  const email = useRef();
  const password = useRef();
  const fullName = useRef();
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isMfaRequired = useSelector((state) => state.user.isMfaRequired);

  const togglePageType = () => {
    setIsSigninPage(!isSigninPage);
  };
  const handleFormSubmit = () => {
    let errorMessage;
    if (!isSigninPage) {
      errorMessage = validateInputs(
        fullName.current.value,
        email.current.value,
        password.current.value,
        true
      );
    } else {
      errorMessage = validateInputs(
        "",
        email.current.value,
        password.current.value
      );
    }
    setErrorMsg(errorMessage);
    if (!errorMessage) {
      isSigninPage ? signInUser() : createNewUser();
    }
  };

  const createNewUser = () => {
    createAccount(
      fullName.current.value,
      email.current.value,
      password.current.value,
      dispatch,
      navigate,
      setErrorMsg
    );
  };

  const signInUser = () => {
    logInUser(
      email.current.value,
      password.current.value,
      dispatch,
      navigate,
      setErrorMsg
    );
  };

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
        <div
          className="text-white py-8 px-14 rounded-lg min-w-[350px] w-[35%]"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        >
          {isMfaRequired ? (
            <MultiFactorInput email={email} />
          ) : (
            <>
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
              {errorMsg && errorMsg?.length > 0 && (
                <div>
                  <p className="text-[#E40914] font-[600]">{errorMsg}</p>
                </div>
              )}
              <button
                onClick={handleFormSubmit}
                className="bg-[#E40914] w-full text-center py-2 rounded-lg mt-5 font-[500]"
              >
                {isSigninPage ? "Sign In" : "Sign Up"}
              </button>
              <div className="cursor-pointer mt-4" onClick={togglePageType}>
                <p className="font-[500]">
                  {isSigninPage
                    ? "New here? Sign Up now!"
                    : "Already registered? Sign in"}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
