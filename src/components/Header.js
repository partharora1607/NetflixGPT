import Netflix_Logo_PMS from "../images/Netflix_Logo_PMS.jpg";

const Header = () => {
  return (
    <div className="absolute z-10 px-8 py-2 ">
      <img className="w-1/6 mx-3.5" src={Netflix_Logo_PMS} alt="logo" />
    </div>
  );
};

export default Header;
