import useRestaurantMenu from "../utils/useRestaurantMenu";
import {useParams} from "react-router-dom";
import ResItemCategory from "./ResItemCategory";
import { useState } from "react";

const ResMenu = () => {


  const {id} = useParams()
  console.log("resID",id)

  const resInfo = useRestaurantMenu(id)
  console.log("resinfo", resInfo)

  const [showIndex, setShowIndex] = useState(null)

  const handleItemClick = (index) => {
    if (showIndex === index) {
      setShowIndex(null); 
    } else {
      setShowIndex(index); 
    }
  };
  
  const openAccordian = (index) => {
    return index === showIndex 
  }
 
 
  const resName =  resInfo?.cards[2]?.card?.card?.info?.name
  const itemCard = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card?.itemCards || [] //DOUBT, first time it is taking empty array in another time it is taking the value of the array. why?
  const itemCategory = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") || []
  console.log(itemCategory)
  console.log("hello", itemCard);
  
  return (
    <>
      <div className="text-center">
        <div className="font-bold p-5 text-stone-800 ">{resName}</div>
        <ul>
          {itemCategory.map((category, index)=>(
            <li >
            <ResItemCategory //lifting up the state
             menuCategory = {category?.card?.card}
             isOpen={openAccordian(index) }
             handleClick={() => handleItemClick(index)} // why we are calling a function for handle click but not for isOpen --> the reason is it is event handeler while in the isOpen props, its is just returning the value by comparision but in this prop it setting the value of the state variable in every click. 
             /></li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ResMenu;
