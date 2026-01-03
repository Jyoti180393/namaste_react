import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const isOnline = useOnlineStatus();
  // console.log("Link", <Link />);

  const { userLogged } = useContext(UserContext);
  console.log("User Context", userLogged);

  return (
    <div className="flex justify-between shadow-lg bg-orange-100 m-5 p-5 ">
      <div className="logo-container">
        <img className="w-45" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul className="flex p-10 justify-between  align-end list-none *:ml-10  text-lg  ">
          <li>Online Status: {isOnline ? "✅" : "🛑"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <p className="border p-2 rounded-full bg-blue-600 text-white">
              {userLogged}
            </p>
          </li>
          <li>
            <button
              className="login"
              onClick={() => {
                loginBtn === "Login"
                  ? setLoginBtn("Logout")
                  : setLoginBtn("Login");
              }}
            >
              {loginBtn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
