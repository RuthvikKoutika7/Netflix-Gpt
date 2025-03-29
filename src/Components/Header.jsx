import { useState } from "react";
import { NETFLIX_LOGO, USER_LOGO } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../Utils/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";

const Header = () => {
  const [userOptions, setUserOptions] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

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
        navigate("/");
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

        {userOptions && (
          <div className="absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-lg">
            <ul className="py-2">
              <li>
                <button
                  className=" w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    navigate("/browse");
                  }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className=" w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    navigate("/profile");
                  }}
                >
                  Profile
                </button>
              </li>

              <li>
                <button
                  className=" w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={handleSignOut}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
