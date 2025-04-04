import { useEffect, useState } from "react";
import { NETFLIX_LOGO, USER_LOGO } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../Utils/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
//import { ChevronDownIcon } from '@heroicons/react/20/solid'


const Header = () => {
  const [userOptions, setUserOptions] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unSubscribe fn will be called when component unmounts!!
    return ()=> unSubscribe();
  },[])

  const userDropDown = () => {
    setUserOptions(!userOptions);
  };
  const logout = () => {
    dispatch(removeUser());
    navigate("/");
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute z-10 px-8  bg-gradient-to-b from-black w-screen flex justify-between">
      <img alt="logo" src={NETFLIX_LOGO} className="w-56 my-2 mx-4" />
      <div className="flex ">
        {user && (
          <img
            alt="user-logo"
            src={USER_LOGO}
            className="w-12 h-12 my-6 rounded-lg"
            onClick={userDropDown}
          />
          
        )}
        <div className="">
        {userOptions && (
          <div className="relative inline-block text-left ">
            <div className=" w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
            <ul className=" ">
              <li>
                <button
                  className=" w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    //navigate("/browse");
                  }}
                >
                  Home
                </button>
              </li>
              <li><Link to="/profile">
                <button
                  className=" w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Profile
                </button></Link>
              </li>

              <li>
                <button
                  className=" w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer "
                  onClick={handleSignOut}
                >
                  Logout
                </button>
              </li>
            </ul>
            </div>
          </div>
        )}
        </div>

        
      </div>
    </div>
  );
};

export default Header;
