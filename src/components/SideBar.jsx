import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <ul className="menu bg-base-200 w-56  [&_li>*]:rounded-none underline text-sm p-4 my-6">
        <Link to="/Account">
          <li>
            <a>Account Overview</a>
          </li>
        </Link>
        <li>
          <a>My Orders</a>
        </li>
        <li>
          <a>My Favourites</a>
        </li>
        <li>
          <a>Billing and Shiiping Info</a>
        </li>
        <Link to="/profile">
          <li>
            <a>Account Settings</a>
          </li>
        </Link>
        <li>
          <a>Saved Carts</a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
