import { useParams } from "react-router";
import { useState } from "react";
import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const Restaurant = () => {
  const { resId } = useParams();
  const restInfo = useRestaurantMenu(resId);
  const restaurantInfo = restInfo?.cards[2]?.card?.card?.info;
  const restaurantMenu =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(1);

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
    <div className="flex justify-center font-sans flex-col items-center">
      <div className="p-8 border-rounded-lg">
        <h1 className="m-b8 text-2xl font-bold">{name}</h1>

        <div className="mb-2 text-lg">
          <span className=" text-green-700 font-bold">⭐ {avgRating}</span>
          <span className="font-medium mx-2">
            ({totalRatingsString}) • {costForTwoMessage}
          </span>
        </div>

        <div className="text-red-600 text-lg mb-2 font-medium]">
          {cuisines.join(", ")}
        </div>

        <div className="text-lg text-gray-600 flex gap-4">
          <span>
            📍 {areaName} / {locality}
          </span>
          <span>⏱ {sla?.slaString}</span>
        </div>
      </div>

      <div className="w-3/5 mb-8">
        {restaurantMenu?.map((restInfo, index) => {
          const isOpen = closedIndexes.includes(index);
          return (
            <div
              className="flex flex-col m-5 border-b-16 border-gray-200 "
              key={index}
            >
              <div
                className="flex justify-between cursor-pointer py-3.5"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="font-bold text-xl">
                  {restInfo?.card?.card?.title}
                </h3>
                <span>{isOpen ? "👆" : "👇"}</span>
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
