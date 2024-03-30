import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const Accordian = ({ items, showAddButton = true }) => {


  const dispatch = useDispatch();

  const handleAddClick = (item)  => {
    dispatch(addItem(item))
  } 
  
  const handleRemoveClick = (item)  => {
    dispatch(removeItem(item?.card?.info?.id))
  } 

  console.log('info',items)
  return (
    <div>

        {items.map((item) => (
          <div  key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex">
            <div className="w-9/12">
            <div className="py-2">
            <span  >{item.card.info.name}</span>
            <span> -- Rs. {item.card.info.price? item.card.info.price/100 : item.card.info.defaultPrice/100 }/-</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 ">
    
            <div className="absolute"> 
           {showAddButton ? <button 
            className="p-2 bg-black text-white shadow-lg rounded-md  m-auto" 
            onClick={() => handleAddClick(item)}
            >+Add</button>:<button 
            className="p-2 bg-black text-white shadow-lg rounded-md  m-auto" 
            onClick={() => handleRemoveClick(item?.card?.info?.id)}
            >remove</button> }
            </div>

            {/* <div className="absolute"> 
           {!showAddButton && <button 
            className="p-2 bg-black text-white shadow-lg rounded-md  m-auto" 
            onClick={() => handleRemoveClick(item)}
            >remove</button>}
            </div> */}
            

            <img className="rounded-md" src={CDN_URL+ item.card.info.imageId}/>
            </div>
          </div>
        ))}

    </div>
  );
};

export default Accordian;
