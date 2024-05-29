import { onAuthStateChanged, signOut } from "firebase/auth";
import Netflix_Logo_PMS from "../images/Netflix_Logo_PMS.jpg";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/slices/userSlice";
import { useEffect } from "react";
import { ICON_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/slices/gptSlice";
import { changeLanguage } from "../utils/slices/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const gpt = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // sign out successfully
      navigate("/");
    });
  };

  const handleGptSearchClick = () => {
    // toggle gptsearch
    dispatch(toggleGptSearchView());
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

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e?.target?.value));
    // console.log(e.target.value);
  };

  return (
    <div className="absolute z-10 w-screen px-8 mt-[3%] flex justify-between">
      <img className="w-1/12 mx-3.5" src={Netflix_Logo_PMS} alt="logo" />
      {user && (
        <div className="flex">
          {gpt && (
            <div>
              <select onChange={handleLanguageChange} className="text-lg rounded-lg px-4 py-3 my-6">
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} className="text-purple-400 rounded-md" value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          <button className="my-5 mx-4 bg-purple-800 text-white w-full rounded-xl " onClick={handleGptSearchClick}>
            {gpt ? "Back Home" : "GPT Search"}
          </button>
          <img src={ICON_URL} alt="icon" className="w-9 h-9 rounded-sm my-7 mx-2" />
          <button className="font-semibold text-red-600 underline" onClick={handleSignOut}>
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
