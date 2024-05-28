import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/slices/moviesSlice";
import { useEffect } from "react";

// fetch my trailer - api call(movie id)
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVedios = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos", API_OPTIONS);
    const json = await data.json();

    const filterData = json?.results.filter((video) => video?.type === "Trailer");
    const trailer = filterData?.length ? filterData?.[0] : json?.results?.[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVedios();
  }, []);
};

export default useMovieTrailer;
