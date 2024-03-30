import CardComp, { WithPromotedLabel } from "./Card";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [data, setData] = useState([]);
  const [updatedData, setUpdatedData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus(); //custom hooks

  const PromotedCards = WithPromotedLabel(CardComp);

  const onFilter = () => {
    let Data1 = data.filter((res) => res.info.avgRating > 4);
    setUpdatedData(Data1);
    console.log(Data1);
  };

  useEffect(() => {
    fetchData();
    console.log("useEfect called");
  }, [setUpdatedData]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0038309&lng=77.6808128"
    );

    const jsonData = await data.json();
    console.log(jsonData);
    setData(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setUpdatedData(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    console.log(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  //this concept is known as conditional renering
  if (data.length === 0) {
    return <h1>Loading....</h1>;
  }

  if (onlineStatus === false) {
    return <h1>Looks like you are offline, please check you connection!</h1>;
  }

  return (
    <>
      <div className="body border-t-rose-200">
        {}
        <div className="search-filter flex mb-4">
          <div className="search-box-btn-container flex pl-96 ">
            <input
              type="text"
              className="search-text border border-solid border-black px-4"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            ></input>
            <button
              className="button px-4 bg-green-300 rounded-md"
              onClick={() => {
                const filteredRestaurants = data.filter((res) => {
                  return res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                });
                setUpdatedData(filteredRestaurants);
              }}
            >
              search
            </button>
          </div>

          <div className="filter px-8">
            <button
              className="button px-4 bg-orange-400 rounded-md"
              onClick={onFilter}
            >
              top rated restauant
            </button>
          </div>
        </div>
        <div className="flex flex-wrap">
          {/* look how efficient map() method is by comparing below code */}

          {/* <CardComp cardProp={data[0]} />
          <CardComp cardProp={data[1]} />
          <CardComp cardProp={data[2]} />
          <CardComp cardProp={data[3]} />
          <CardComp cardProp={data[4]} />
          <CardComp cardProp={data[5]} />
          <CardComp cardProp={data[6]} />
          <CardComp cardProp={data[7]} />
          <CardComp cardProp={data[8]} /> */}
          {updatedData.map((resList) => (
            <Link to={"/restaurants/" + resList?.info?.id}>
              {resList?.info?.avgRating >= 4.3 ? (
                <PromotedCards cardProp={resList} />
              ) : (
                <CardComp cardProp={resList} />
              )}{" "}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
