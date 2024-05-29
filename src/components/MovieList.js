import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="my-3 mx-10">
      <h1 className="text-4xl my-3 font-semibold text-white"> {title} </h1>
      <div className="flex overflow-x-scroll custom-scrollbar-hide">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
      <style>
        {`
          .custom-scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default MovieList;
