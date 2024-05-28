import { Link } from "react-router-dom";
import logo from "../../images/logos/dmt_web.svg";

const Nav = () => {
  return (
    <div className="w-full mx-auto">
      <div className="fixed top-0 left-0 w-full bg-white mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="flex lg:static xl:col-span-2">
          <div className="flex flex-shrink-0 items-center">
            <Link to="/">
              <img className="h-20 w-auto" src={logo} alt="Your Company" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
