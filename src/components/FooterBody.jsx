import React from "react";
import { Link } from "react-router-dom";

const FooterBody = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-10 p-4 bg-slate-200 my-0.5 ">
        <div className="flex flex-col col-span-12 sm:col-span-3">
          <h2 className=" text-lg">Customer Service</h2>
          <div className="my-2 text-sm font-semibold">
            <p>
              <Link to="/">Help Center</Link>
            </p>
            <p>
              <Link to="/">Order Status</Link>
            </p>
            <p>
              <Link to="/">Return and Replacement</Link>
            </p>
            <p>
              <Link to="/">Inernational Shipping</Link>
            </p>
            <p>
              <Link to="/">My Account</Link>
            </p>
          </div>
        </div>
        <div className="flex flex-col col-span-12 sm:col-span-3">
          <h2 className=" text-lg">Shopping</h2>
          <div className="my-2 text-sm font-semibold">
            <Link to="/">
              <p>On Sale Items</p>
            </Link>
            <Link to="/">
              <p>Our Brands</p>
            </Link>
            <Link to="/">
              <p>Product Features</p>
            </Link>
            <Link to="/">
              <p>Trade Customers</p>
            </Link>
            <Link to="/">
              <p>View Your Cart</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col col-span-12 sm:col-span-3">
          <h2 className=" text-lg">Company Info</h2>
        </div>
        <div className="flex flex-col col-span-12 sm:col-span-3">
          <h2 className=" text-lg">Customer Support</h2>
        </div>
      </div>
    </>
  );
};

export default FooterBody;
