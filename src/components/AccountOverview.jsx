import React from "react";
import { useSelector } from "react-redux";
import useAccount from "./hooks/useAccount";

const AccountOverview = () => {
  const user = useSelector((store) => store.user?.data);
  const store = useSelector(
    (store) => store.user?.data?.data || store.user.data
  );
  const order = useSelector((store) => store.orders.order);
  useAccount(user, store);
  return (
    user && (
      <>
        <div className="flex flex-col gap-6 p-4 sm:p-6">
          <div className="px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold mb-4 text-center sm:text-left">
              Account Overview
            </h1>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
              <p className="font-semibold">Login Id:</p>
              <p>{store?.fullName}</p>
            </div>
            <p className="font-semibold mt-2">Address</p>
          </div>

          <div className="bg-green-200 p-4 sm:p-6 my-4 rounded-lg">
            <h1 className="text-lg font-semibold my-2 text-center sm:text-left">
              Your Preferred Customer Program Rewards
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 items-center">
              <p className="bg-green-400 p-2 text-center text-white font-semibold rounded-full w-max">
                Up to 5% OFF!
              </p>
              <p className="text-center sm:text-left">
                <em>
                  Only
                  <span className="text-green-700 font-semibold">
                    $5,000.00
                  </span>
                  Away from
                  <span className="text-green-700 font-semibold">10%!</span>
                </em>
              </p>
            </div>
            <p className="my-2 text-center sm:text-left">
              Your current discount is up to 5%, which is applied automatically
              to all eligible items.
            </p>
            <p className="my-2 text-center sm:text-left">
              The more you spend with us, the faster you progress to the next
              discount tier for even more savings!
            </p>
            <h1 className="text-lg font-semibold text-center sm:text-left">
              Available Reward Levels
            </h1>
            <div className="bg-green-800 flex flex-col sm:flex-row gap-4 sm:gap-8 items-center p-4 rounded-3xl border-5 border-cyan-500 text-white w-full mx-auto">
              <p className="text-sm">5%</p>
              <p className="text-lg">10%</p>
              <p className="text-2xl">20%</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center p-4 rounded-3xl text-green-800 w-full mx-auto">
              <p className="text-sm font-semibold">$0</p>
              <p className="text-lg font-semibold">$5000</p>
              <p className="text-2xl font-semibold">$10000</p>
            </div>
            <p className="text-sm mt-4 text-center sm:text-left">
              Current discount tier is calculated based on your previous
              purchasing history. New discount tiers will be updated after your
              next purchase.
            </p>
            <p className="text-sm flex flex-col sm:flex-row items-center gap-2 mt-2">
              <span className="text-2xl font-semibold">*</span>Not all brands
              are eligible to participate in this program.
            </p>
          </div>

          <div>
            {!order ? (
              <div className="bg-slate-400 p-4 my-4 rounded-lg text-center">
                <p>There have been no recent orders</p>
              </div>
            ) : (
              <div className="text-center">
                <p>View your Orders</p>
              </div>
            )}
          </div>
        </div>
      </>
    )
  );
};

export default AccountOverview;
