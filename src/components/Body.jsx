import React, { useEffect } from "react";
import HomePage from "./HomePage";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getUser = async () => {
    console.log("UseEffect");

    try {
      if (user?.id) return;

      console.log("Fetching user...");
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });

      if (!res.data || res.data.error) {
        dispatch(removeUser());
        return navigate("/login");
      }

      dispatch(addUser(res.data));
    } catch (err) {
      console.error("User fetch failed:", err);
      dispatch(removeUser());
      navigate("/");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <HomePage />
      <Outlet />
    </div>
  );
};

export default Body;
