import { useContext, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cart = useSelector((store) => store.cart.items);
  console.log(cart);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <Link to="/">
          <img
            className="logo w-48 bg-transparent"
            src="https://logowik.com/content/uploads/images/chef-restaurant5078.logowik.com.webp"
            alt=""
          />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li></li>
          <Link to="/" className="link px-4">
            <li>Home</li>
          </Link>
          <Link to="/about" className="link px-4">
            <li>About</li>
          </Link>
          <Link to="/contact" className="link px-4">
            <li>Contact</li>
          </Link>
          <Link to="/grocery" className="link px-4">
            <li>Grocery</li>
          </Link>
          <Link to="/cart">
            <li className="font-semibold">
              Cart({cart.length > 0 ? cart.length : ""})
            </li>
          </Link>
          <button
            className="login px-4"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
