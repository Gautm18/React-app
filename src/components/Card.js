import { CDN_URL } from "../utils/constant";
const CardComp = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating } =
    props?.cardProp?.info;

  return (
    <div className="res-card">
      <img className="card-img" src={CDN_URL + cloudinaryImageId}></img>
      <div className="info-container">
        <h3>{name}</h3>
        {cuisines.join(", ")}
        <br />
        <br />
        {avgRating}
        <br />
      </div>
    </div>
  );
};

export default CardComp;
