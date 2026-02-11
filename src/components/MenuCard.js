import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../store/cartSlice";

const MenuCard = ({ item }) => {
  // Controlled Component
  // console.log("Menu Card Item", item);
  const { name, imageId, price, description } = item?.card?.info;

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };
  return (
    <div
      data-testid="menuItem"
      className="flex justify-between menu-item relative py-4 border-b border-gray-200"
    >
      <div className="w-full pr-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-4 h-4 bg-green-500 rounded-full"></span>
          <span className="text-md text-red-500 ">★ Bestseller</span>
        </div>

        <h4>{name}</h4>

        <div className="flex gap-2 mb-1">
          <span className="text-gray-600 line-through">
            ₹{Math.ceil(price / 0.9 / 100)}
          </span>
          <span className="text-bold">₹{price / 100}</span>
        </div>
        <p className="text-sm text-gray-600">{description}.</p>
      </div>

      <div className="w-50 relative">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={CDN_URL + imageId}
          alt="Food"
        />
        <button
          data-testid="addBtn"
          className="relative bottom-7 left-10 border border-gray-300 font-bold bg-white
         text-green-700 px-4 py-1 rounded-lg"
          onClick={() => handleAddItem(item)}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
