import { LOGO_URL } from "../utils/constant";
const HeaderComp = () => {
  return (
    <div className="header">
      <img src={LOGO_URL}></img>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>contact us</li>
      </ul>
    </div>
  );
};

export default HeaderComp;
