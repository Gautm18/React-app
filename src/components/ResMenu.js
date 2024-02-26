import { useEffect, useState } from "react";

const ResMenu = () => {



  const [resInfo, setResInfo] = useState(null)


  useEffect(  () => {
    fetchMenuData()
  }, []);
 

  
  const fetchMenuData = async () => {
    const menuData = await fetch ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.627367315189556&lng=77.02706728130579&restaurantId=24197&catalog_qa=undefined&submitAction=ENTER")
    const json = await menuData.json()

    console.log("menuJson",json)
    setResInfo(json.data)
  }

 

  const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card
  console.log("hello", itemCards);
  
  return (
    <>
      <div>hello</div>
      <div>
        {/* <ul>
          {itemCards.map((item)=>(
            <li>{item?.card?.info?.name}</li>
          ))}
        </ul> */}
      </div>
    </>
  );
};

export default ResMenu;
