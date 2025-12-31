import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;
  // console.log(resData);

  const {
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
    estinameDeliveryTime,
    costForTwo,
  } = resData.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        alt="res-logo"
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{estinameDeliveryTime}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;

// only veg restaurant HOC

export const withVegOnly = (RestaurantCard) => {
  // return component that shows only veg restaurant
  return (props) => (
    // return JSX for veg restaurant label
    <div>
      <label className="absolute bg-green-500 text-white p-1 m-2 rounded-md">
        Veg only
      </label>
      <RestaurantCard {...props} />
      {/* // propagate all props to RestaurantCard */}
    </div>
  );
};
