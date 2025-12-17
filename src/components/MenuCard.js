import { CDN_URL } from "../utils/constants";

const MenuCard = ({ item }) => {
  // console.log(item);
  const { name, imageId, price, description } = item?.card?.info;
  return (
    <div className="menu-item">
      <div className="item-left">
        <div className="badge-row">
          <span className="veg-icon"></span>
          <span className="bestseller">★ Bestseller</span>
        </div>

        <h4>{name}</h4>

        <div className="price">
          <span className="old-price">₹{Math.ceil(price / 0.9 / 100)}</span>
          <span className="new-price">₹{price / 100}</span>
        </div>
        <p className="desc">{description}.</p>
      </div>

      <div className="item-right">
        <img src={CDN_URL + imageId} alt="Food" />
        <button className="add-btn">ADD</button>
      </div>
    </div>
  );
};

export default MenuCard;
