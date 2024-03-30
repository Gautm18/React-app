import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";

const useRestaurantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const menuData = await fetch(MENU_URL + id);
    const json = await menuData.json();

    console.log("menuJson", json.data);
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
