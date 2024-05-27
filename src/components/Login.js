import Header from "./Header";
import bgImage from "../images/bgImage.jpg";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState({
    emailError: null,
    passwordError: null,
    nameError: null,
    authError: null,
  });

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleClick = () => {
    const msg = checkValidData(email?.current?.value, password?.current?.value, name?.current?.value);

    setErrorMessage({
      emailError: msg[0],
      passwordError: msg[1],
      nameError: msg[2],
      authError: null,
    });

    if (errorMessage.emailError != null || errorMessage.password != null || errorMessage.name != null) {
      return;
    }

    if (!isSignInForm) {
      // sign up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          });
          console.log(user);
          setIsSignInForm(true);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " - " + errorMessage);
        });
    } else {
      // sign in
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/Browse");
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          setErrorMessage((prevErrorMessage) => ({
            ...prevErrorMessage,
            authError: "Invalid email or password. Please try again.",
          }));
        });
    }
  };

  const signInHandler = () => {
    setIsSignInForm(!isSignInForm);
    // Clear errors when switching forms
    setErrorMessage({
      emailError: null,
      passwordError: null,
      nameError: null,
      authError: null,
    });
    // Reset input fields
    if (email?.current?.value) email.current.value = "";
    if (password?.current?.value) password.current.value = "";
    if (name?.current?.value) name.current.value = "";
  };

  return (
    <div>
      <Header />
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="py-12 bg-black absolute w-[37rem] my-36 mx-auto right-0 left-0 text-white bg-opacity-70 px-20"
      >
        <h1 className="font-bold text-5xl py-8">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
          <>
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="p-6 mb-1 mt-6 w-full bg-gray-800 bg-opacity-30 rounded-lg text-xl text-white"
            ></input>
            <p className="text-red-500 text-lg py-1">{errorMessage?.nameError}</p>
          </>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="p-6 mb-3 mt-6 w-full bg-gray-800 bg-opacity-30 rounded-lg text-xl text-white"
        ></input>
        <p className="text-red-500 text-lg py-1">{errorMessage?.emailError}</p>

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-6 my-3 w-full bg-gray-800 bg-opacity-30 rounded-lg text-xl "
        ></input>
        <p className="text-red-500 text-lg py-1">{errorMessage?.passwordError}</p>
        <button className="p-6 mt-3 bg-red-600 w-full rounded-lg text-xl" onClick={handleClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {errorMessage.authError && <p className="my-3 font-medium">{errorMessage.authError}</p>}
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
