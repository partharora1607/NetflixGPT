const VideoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="my-10">
        <button className="bg-white bg-opacity-80 text-black border py-2 px-4 text-2xl rounded-lg hover:bg-gray-300">
          ▶ Play
        </button>
        <button className="bg-black bg-opacity-60 text-white py-2 px-4 mx-2 text-2xl rounded-lg hover:bg-opacity-80">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
