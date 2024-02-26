import { LOGO_URL } from "../utils/constant";
import {useState} from 'react'
import {Link} from "react-router-dom";

const HeaderComp = () => {

  const [loginBtn, setLoginBtn] = useState('Login')
  return (
    <div className="header">
      <img src={LOGO_URL}></img>
      <ul>
        <li><Link to = "/">Home</Link></li>
        <li><a href = "/about">About Us</a></li>
        <li><Link to = "/contact-us">contact us</Link></li>
        <button className="login" onClick={() => loginBtn === 'Login' ? setLoginBtn('logout') : setLoginBtn('Login')}>{loginBtn}</button>
      </ul>
      {}
    </div>
  );
};

export default HeaderComp;
