const VideoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className="w-screen aspect-video pt-[17%] px-[3%] absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-xl w-1/4">{overview}</p>
      <div className="my-10">
        <button className="bg-white text-black p-4 px-12 text-2xl font-semibold rounded-lg hover:bg-opacity-70">
          Play
        </button>
        <button className="bg-gray-500 text-white p-4 px-12 text-2xl bg-opacity-50 rounded-lg mx-2 font-semibold hover:bg-opacity-90">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
