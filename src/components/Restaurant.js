import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { FETCH_RESTAURANT_MENU } from "../utils/constants";
import "../styles/Restaurant.css";
import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const Restaurant = () => {
  const { resId } = useParams();
  const restInfo = useRestaurantMenu(resId);
  const restaurantInfo = restInfo?.cards[2]?.card?.card?.info;
  const restaurantMenu =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  console.log("restaurantMenu", restaurantMenu);

  const [closedIndexes, setClosedIndexes] = useState([]);

  const toggleAccordion = (index) => {
    setClosedIndexes(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // open it
          : [...prev, index] // close it
    );
  };

  if (!restaurantInfo) {
    return <Shimmer />;
  }

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
    </div>
  );
};

export default Restaurant;
