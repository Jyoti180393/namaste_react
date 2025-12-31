import RestaurantCard, { withVegOnly } from "./RestaurantCard";
// import resObj from "../utils/mockData";
import { useState, useEffect } from "react";
import { FETCH_RESTAURANTS_LIST } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const isOnline = useOnlineStatus();

  // console.log(listOfRestaurant);

  useEffect(() => {
    fetchData();
  }, []);
  // console.log("Body Rendered");

  const VegOnlyRestaurantCard = withVegOnly(RestaurantCard);

  const fetchData = async () => {
    const data = await fetch(FETCH_RESTAURANTS_LIST);
    const json = await data.json();
    // console.log(
    //   json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants
    // );
    setListOfRestaurant(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (!isOnline) {
    return <h1>Looks like you are offline! Please check your internet</h1>;
  }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            id="search-box"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredRestaurants = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.2
            );
            // console.log("button clicked", filteredList);
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        <button
          className="reset-btn"
          onClick={() => {
            // console.log(listOfRestaurant);
            setFilteredRestaurant(listOfRestaurant);
          }}
        >
          Reset
        </button>
      </div>

      <div className="restaurant-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
          >
            {restaurant.info.veg ? (
              <VegOnlyRestaurantCard resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
