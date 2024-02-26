import CardComp from "./Card";
import { useState, useEffect } from "react";

const Body = () => {

  const  [data, setData] = useState([])
  const [updatedData, setUpdatedData] = useState([])
  const [searchText, setSearchText] = useState('')

  const onFilter = () => {
    let Data1 = data.filter((res) =>  res.info.avgRating > 4);
    setUpdatedData(Data1)
    console.log(Data1)
  }; 

  useEffect(()=>{
  fetchData()
  console.log('useEfect called')
  }, [setUpdatedData])
  
  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.627367315189556&lng=77.02706728130579&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const jsonData = await data.json()
    console.log(jsonData)
    setData(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setUpdatedData(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  //this concept is known as conditional renering
  if(data.length === 0){
    return <h1>Loading....</h1>
  }
  
  return (
    <>
      <div className="body">
        {}
        <div className="search-filter">
          <input 
          type='text'
          className="search-text"
          value= {searchText}
          onChange={(e)=>{setSearchText(e.target.value)}}
          >
          </input>
          <button
           
           onClick={()=> {
          const filteredRestaurants = data.filter((res) => { return res.info.name.toLowerCase().includes(searchText.toLowerCase()) })
          setUpdatedData(filteredRestaurants)
           } }>search</button>
          
        <div className="filter">
          <button onClick={onFilter}>top rated restauant</button>
        </div>
        </div>
        <div className="card-container">
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
            <CardComp cardProp={resList} /> 
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
