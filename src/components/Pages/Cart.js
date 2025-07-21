import { useDispatch, useSelector } from "react-redux";
import ItemList from "../ItemList";
import { clearCart } from "../../Redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className=" p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}

          //   onClick={handleClick}=>Calling the function after clicking
          // ,onClick={()=>handleClick(parameter)}=>passing the callback function as a parameter
          // ,onClick={handleClick(parameter)}=>calling the function right away mean without click it gets called
        >
          Clear Cart
        </button>
        {cartItems?.length === 0 && (
          <h1> Cart is empty. Add Items to the cart!</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
