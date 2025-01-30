import HomePage from "./HomePage";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import useUser from "./hooks/useUser";

const Body = () => {
  const user = useSelector((store) => store.user);

  useUser(user);

  return (
    <div>
      <HomePage />
      <Outlet />
    </div>
  );
};

export default Body;
