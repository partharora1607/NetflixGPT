import { onAuthStateChanged, signOut } from "firebase/auth";
import Netflix_Logo_PMS from "../images/Netflix_Logo_PMS.jpg";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/slices/userSlice";
import { useEffect } from "react";
import { ICON_URL } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // sign out successfully
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        // error occured while signout
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // sign in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/Browse");
      } else {
        // sign out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute z-10 w-screen px-8 py-2   flex justify-between">
      <img className="w-1/12 mx-3.5" src={Netflix_Logo_PMS} alt="logo" />
      {user && (
        <div className="flex">
          <img src={ICON_URL} alt="icon" className="w-9 h-9 rounded-sm my-3 mx-2" />
          <button className="font-semibold" onClick={handleSignOut}>
            Sign out{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
