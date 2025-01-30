import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((store) => store.cart);

  return (
    <div className="my-10 flex justify-center items-center">
      {cart.items.length == 0 && (
        <div className="font-bold text-3xl ">Cart is Empty</div>
      )}
    </div>
  );
};

export default Cart;
