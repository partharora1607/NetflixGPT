import { TMDB_CDN_URL } from "../utils/constants";
const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-60 mr-5 ">
      <img className="rounded-xl" src={TMDB_CDN_URL + posterPath} alt="tmdb movie card" />
    </div>
  );
};

export default MovieCard;
