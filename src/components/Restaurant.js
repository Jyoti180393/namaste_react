import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { FETCH_RESTAURANT_MENU } from "../utils/constants";
import "../styles/Restaurant.css";
import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";

const Restaurant = () => {
  const { resId } = useParams();
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const [closedIndexes, setClosedIndexes] = useState([]);

  const toggleAccordion = (index) => {
    setClosedIndexes(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // open it
          : [...prev, index] // close it
    );
  };
  // console.log(resId);

  useEffect(() => {
    //fetch the restaurant menu using the resId
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(FETCH_RESTAURANT_MENU + resId);
    const json = await data.json();
    // console.log(json?.data?.cards[2]?.card?.card?.info);
    setRestaurantInfo(json?.data?.cards[2]?.card?.card?.info);

    setRestaurantMenu(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  };

  if (!restaurantInfo) {
    return <Shimmer />;
  }
  // console.log(restaurantInfo);
  // console.log(restaurantMenu);

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
    locality,
    sla,
  } = restaurantInfo;

  return (
    <div className="restaurant-menu-container">
      <div className="restaurant-card">
        <h1>{name}</h1>

        <div className="rating-row">
          <span className="rating">⭐ {avgRating}</span>
          <span className="meta">
            ({totalRatingsString}) • {costForTwoMessage}
          </span>
        </div>

        <div className="tags">{cuisines.join(", ")}</div>

        <div className="info">
          <span>
            📍 {areaName} / {locality}
          </span>
          <span>⏱ {sla?.slaString}</span>
        </div>
      </div>

      <div className="menu-group">
        {/* <!-- Section Header --> */}
        {restaurantMenu?.slice(1).map((restInfo, index) => {
          const isOpen = !closedIndexes.includes(index);
          return (
            <div className="menu-section" key={index}>
              <div
                className="menu-header"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="title">{restInfo?.card?.card?.title}</h3>
                <span>{isOpen ? "▲" : "▼"}</span>
              </div>
              {isOpen &&
                restInfo?.card?.card?.itemCards?.map((item) => (
                  <MenuCard key={item.card.info.id} item={item} />
                ))}
            </div>
          );
        })}
      </div>
      {/* <div className="menu-section">
        {restaurantMenu[2]?.card?.card?.itemCards.map((item) => (
          <MenuCard key={item.card.info.id} item={item} />
        ))}
      </div> */}
      {/* <div className="menu-section">
        <h3>{restaurantMenu[3]?.card?.card?.title}</h3>
        {restaurantMenu[3]?.card?.card?.itemCards.map((item) => (
          <MenuCard key={item.card.info.id} item={item} />
        ))}
      </div> */}
    </div>
  );
};

export default Restaurant;
