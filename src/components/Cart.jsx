import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItems } from "../utils/cartSlice";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeItems(item));
  };

  return (
    <div className="p-6 flex flex-col justify-center items-center my-10 gap-10">
      <div className=" flex flex-col justify-center items-center">
        <FaShoppingCart className="text-2xl w-40 h-10" />
        <h2 className="text-2xl font-bold mb-4 text-center">
          Your Cart is Empty
        </h2>
      </div>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center space-x-4 ">
            <img
              src={item.img}
              alt={item.name}
              className="w-24 h-24 object-cover"
            />
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>

            <button
              className="bg-red-500 text-white py-2 px-4 rounded"
              onClick={() => handleRemove(item)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
