import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItems, updateQuantity } from "../utils/cartSlice";

const GET_ITEM = gql`
  query getItem($id: ID!) {
    item(id: $id) {
      id
      name
      img
      price
      ratings
    }
  }
`;

const ConfirmPurchase = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_ITEM, { variables: { id } });
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const currentItem = cartItems.find((item) => item.id === id);
  const quantity = currentItem ? currentItem.quantity : 0;

  const handleAddToCart = () => {
    dispatch(addItems(data.item));
  };

  const handleIncrement = () => {
    if (quantity === 0) {
      // If item quantity is 0, first add to the cart
      dispatch(addItems(data.item));
    } else {
      // If item already exists, just update the quantity
      dispatch(updateQuantity({ id, quantity: quantity + 1 }));
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(updateQuantity({ id, quantity: quantity - 1 }));
    }
  };

  if (loading)
    return (
      <p className="loading loading-spinner loading-xl text-primary text-center my-10 "></p>
    );

  if (error) return <p className="text-red">{error.message}</p>;

  return (
    <div className="flex p-6 justify-center">
      <div className="w-1/2 ">
        <img
          src={data.item.img}
          alt={data.item.name}
          className="w-md h-96 object-cover"
        />
      </div>
      <div className="w-1/4 p-6 bg-neutral-100 rounded-2xl">
        <h1 className="text-2xl font-bold">{data.item.name}</h1>
        <p className="text-lg">Price: ${data.item.price}</p>
        <p className="text-yellow-500">⭐ {data.item.ratings}</p>

        <div className="flex items-center mt-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={handleDecrement}
          >
            -
          </button>
          <button
            className="mx-2 bg-green-500 text-white py-2 px-4 rounded cursor-pointer"
            onClick={handleAddToCart}
          >
            Add to Cart ({quantity})
          </button>

          <button
            className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPurchase;
