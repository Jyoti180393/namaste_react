import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resObj);
  // console.log(arr);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.data.rating > 4
            );
            console.log("button clicked", filteredList);
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        <button
          className="reset-btn"
          onClick={() => {
            setListOfRestaurant(resObj);
          }}
        >
          Reset
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
