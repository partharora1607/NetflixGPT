import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/slices/moviesSlice";

const VideoBackground = ({ movieId }) => {
  // fetch my trailer - api call(movie id)

  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVedios = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/823464/videos", API_OPTIONS);
    const json = await data.json();
    // console.log(" json video trailer: ", json);

    const filterData = json?.results.filter((video) => video?.type === "Trailer");
    const trailer = filterData?.length ? filterData?.[0] : json?.results?.[0];
    // console.log("trailer : ", trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVedios();
  }, []);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
