import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_ITEMS = gql`
  query {
    items {
      id
      name
      img
      price
      ratings
    }
  }
`;
const Purchase = () => {
  const { loading, error, data } = useQuery(GET_ITEMS);
  if (loading)
    return (
      <p className="loading loading-spinner loading-xl text-primary text-center my-10 "></p>
    );
  if (error) return <p>Error Fetching Data!</p>;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4">
      {data.items.map((item, index) => (
        <Link to={`/confirm-purchase/${item.id}`} key={item.id}>
          <div className="bg-slate-200 p-6 text-black text-lg rounded-lg shadow-md">
            <img src={item.img} alt="image" />
            <h1 className="font-bold">{item.name}</h1>
            <h2 className="text-green-600 font-semibold">$ {item.price}</h2>
            <h3 className="text-yellow-500">⭐ {item.ratings}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Purchase;
