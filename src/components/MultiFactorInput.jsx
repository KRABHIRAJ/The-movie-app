/* eslint-disable react/prop-types */
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyUserOtp } from "../utils/appwrite";
import { useNavigate } from "react-router-dom";

const MultiFactorInput = ({ email }) => {
  const userOtp = useRef();
  const challengeId = useSelector((state) => state.user.challengeId);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const verifyOtp = () => {
    verifyUserOtp(challengeId, userOtp.current.value, dispatch, navigate);
  }
  return (
    <div>
      <h1 className="text-3xl font-[700] mb-5">Two-Step Verification</h1>
      <p>
        For added security, please enter the one time passwoed(OTP) that has
        been sent to email {email?.current?.value}
      </p>
      <input
        ref={userOtp}
        type="text"
        placeholder="Enter OTP"
        className="outline-none p-2 bg-gray-700 mt-3 rounded-lg w-full"
      />
      <button onClick={verifyOtp} className="bg-[#E40914] w-full text-center py-2 rounded-lg mt-5 font-[500]">
        Submit
      </button>
    </div>
  );
};

export default MultiFactorInput;
