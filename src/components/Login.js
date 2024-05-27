import Header from "./Header";
import bgImage from "../images/bgImage.jpg";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const signInHandler = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={bgImage} alt="Netflix background" className="h-[80rem] w-[159rem]" />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <form className="py-12 bg-black absolute w-[37rem] my-36 mx-auto right-0 left-0 text-white bg-opacity-70 px-20">
        <h1 className="font-bold text-5xl py-8">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="User Name"
            className="p-6 mb-3 mt-6 w-full bg-gray-800 bg-opacity-30 rounded-lg text-xl text-white"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-6 mb-3 mt-6 w-full bg-gray-800 bg-opacity-30 rounded-lg text-xl text-white"
        ></input>

        <input
          type="password"
          placeholder="Password"
          className="p-6 my-3 w-full bg-gray-800 bg-opacity-30 rounded-lg text-xl "
        ></input>
        <button className="p-6 mt-3 bg-red-600 w-full rounded-lg text-xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm ? (
          <p className="text-xl my-6">
            New to Netflix? &nbsp;
            <span onClick={signInHandler} className="text-blue-500 cursor-pointer underline">
              Sign up now.
            </span>
          </p>
        ) : (
          <p className="text-xl my-6">
            Already have an account? &nbsp;
            <span onClick={signInHandler} className="text-blue-500 cursor-pointer underline">
              Sign in here.
            </span>
          </p>
        )}

        <p className="text-lg text-gray-500 mb-24">
          This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
