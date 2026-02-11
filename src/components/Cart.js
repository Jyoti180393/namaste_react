import { useDispatch, useSelector } from "react-redux";
import MenuCard from "./MenuCard";
import { clearCart } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log("Cart ", cartItems);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-3xl">This is Cart Page</h1>
      <button
        data-testid="clear-cart-btn"
        className="m-4 p-4 bg-red-500 text-white rounded-lg font-bold"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && <p>Cart is empty. Add Items to the cart!</p>}
      <div className="w-6/12 m-auto">
        {cartItems.map((item) => (
          <MenuCard key={item.card.info.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
