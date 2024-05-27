import { signOut } from "firebase/auth";
import Netflix_Logo_PMS from "../images/Netflix_Logo_PMS.jpg";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

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

  return (
    <div className="absolute z-10 w-screen px-8 py-2   flex justify-between">
      <img className="w-1/12 mx-3.5" src={Netflix_Logo_PMS} alt="logo" />
      {user && (
        <div className="flex">
          <img
            src="https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABW7Wui3ZqHqBvl3R__TmY0sDZF-xBxJJinhVWRwu7OmYkF2bdwH4nqfnyT3YQ-JshQvap33bDbRLACSoadpKwbIQIBktdtHjxw.png?r=201"
            alt="icon"
            className="w-9 h-9 rounded-sm my-3 mx-2"
          />
          <button className="font-semibold" onClick={handleSignOut}>
            Sign out{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
