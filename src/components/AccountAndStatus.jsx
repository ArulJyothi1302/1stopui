import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import AccountOverview from "./AccountOverview";
import { useSelector } from "react-redux";

const AccountAndStatus = () => {
  const user = useSelector((store) => store.user);
  return (
    user && (
      <div className="grid grid-flow-col mx-10">
        <div className="row-span-3 ">
          <SideBar />
        </div>
        <div className=" col-span-9">
          <AccountOverview />
        </div>
        <Outlet />
      </div>
    )
  );
};

export default AccountAndStatus;
