import React from "react";
import { SHOP_DEPT } from "../utils/constants";
import { Link } from "react-router-dom";

const ShopByDept = () => {
  return (
    <div className="p-4 my-4">
      <h1 className="text-2xl font-semibold text-center">Shop By Department</h1>

      <div className="flex justify-evenly p-4 mt-4 flex-wrap">
        {SHOP_DEPT.map((dept, id) => (
          <div className=" " key={id}>
            <Link to="/purchase">
              <ul className="flex flex-col items-center justify-center hover:underline cursor-pointer text-blue-900 hover:text-blue-500">
                <li className="text-lg font-semibold   cursor-pointer">
                  {dept.item}
                </li>
                <img
                  className="w-20 h-20 sm:w-30 sm:h-30 md:w-50 md:h-50 border-10 border-slate-400 rounded-full "
                  src={dept.img}
                  alt="items"
                />
              </ul>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByDept;
