import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;

  const {
    restName,
    cuisine,
    imageId,
    rating,
    estinameDeliveryTime,
    costForTwo,
  } = resData?.data;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img alt="res-logo" className="res-logo" src={CDN_URL + imageId}></img>
      <h3>{restName}</h3>
      <h4>{cuisine.join(", ")}</h4>
      <h4>{rating} stars</h4>
      <h4>{estinameDeliveryTime}</h4>
      <h4>{costForTwo} for Two</h4>
    </div>
  );
};

export default RestaurantCard;
