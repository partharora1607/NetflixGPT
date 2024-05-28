import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  // Fetch data from TMDB api and update the store
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*
       Main Container
        -video Background
        -videoTitle
       Secondary Container 
        -movieList * (n)
          -cards * (n)
       */}
    </div>
  );
};

export default Browse;
