import { useSelector } from "react-redux";
import lng from "../utils/language";

const GptSearchBar = () => {
  const chooseLn = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] mb-5">
      <form className="w-1/2 mx-auto grid grid-cols-12">
        <input
          type="text"
          className="p-6 rounded-xl col-span-9 text-xl"
          placeholder={lng[chooseLn].GptSearchPlaceholder}
        ></input>
        <button className=" col-span-2 py-2 px-4 bg-red-700 text-white rounded-xl mx-4 text-lg">
          {lng[chooseLn].Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
