import { useState } from "react";
import { LOGIN_BG_IMG } from "../Utils/Constants";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleIsSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img alt="bg-img" src={LOGIN_BG_IMG} className="w-full" />
      </div>

      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-xl bg-">
        <h1 className="text-4xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 "
        />
        <button className="p-4 my-6 w-full cursor-pointer bg-red-600 rounded-xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-6" onClick={toggleIsSignIn}>
          {isSignInForm
            ? "New to Netfilx? Sign Up now."
            : "Already Registered? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
