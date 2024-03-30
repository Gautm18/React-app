import { CDN_URL } from "../utils/constant";
import React from "react";

const CardComp = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating } =
    props?.cardProp?.info;

  return (
    <div className="res-card p-2 m-2 flex flex-col w-64 rounded-lg bg-gray-100 hover:bg-gray-300">
      <img
        className="card-img rounded-lg h-40 object-cover flex-shrink-0"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="info-container flex-grow mt-2">
        <h3 className="text-lg truncate font-semibold" title={name}>
          {name}
        </h3>
        <p className="text-sm truncate" title={cuisines.join(", ")}>
          {cuisines.join(", ")}
        </p>
        <p className="text-sm truncate" title={avgRating}>
          ⭐{avgRating}
        </p>
      </div>
    </div>
  );
};

//Higher Order Functions (HOF)
export const WithPromotedLabel = (CardComp) => {
  return (props) => {
    return(
      <>
      <label className="absolute bg-black text-white p-2 m-2 rounded-md cursor-pointer">Promoted</label>
      <CardComp {...props}/>
      </>
    )
  }
}

export default CardComp;
