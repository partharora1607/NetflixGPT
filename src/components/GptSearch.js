import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import bgImage from "../images/bgImage.jpg";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute inset-0 bg-cover bg-center -z-20" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
