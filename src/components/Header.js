import { LOGO_URL } from "../utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const HeaderComp = () => {
  const onlineStatus = useOnlineStatus();

  //subscribing to the store using selector

  const cart = useSelector((store) => store.cart.items); //this hook will give us access to the store. this selector will help us to identify that what portion of the store we want to access.

  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div className="flex justify-between bg-orange-400 shadow-lg mb-5">
      <img className="w-18 m-5 p-1" src={LOGO_URL}></img>
      <ul className="flex p-4 m-4 items-center">
        <li className="px-4">{onlineStatus ? "🟢online" : "🔴offline"}</li>
        <li className="px-4">
          <Link to="/">Home</Link>
        </li>
        <li className="px-4">
          <a href="/about">About Us</a>
        </li>
        <li className="px-4">
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li className="px-4">
          <Link to="/cart">Cart -({cart.length})</Link>
        </li>
        <button
          className="px-4"
          onClick={() =>
            loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")
          }
        >
          {loginBtn}
        </button>
        {loginBtn === "Logout" ? (
          <li className="px-4 text-lg ">Gautam Shandilya</li>
        ) : (
          <li className="px-4"></li>
        )}
      </ul>
    </div>
  );
};

export default HeaderComp;
