import { NETFLIX_LOGO } from "../Utils/Constants";

const Header = () => {
  return (
    <div className="absolute z-20">
      <img alt="logo" src={NETFLIX_LOGO} className="w-56 my-2 mx-4" />
    </div>
  );
};

export default Header;
