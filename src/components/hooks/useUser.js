import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../utils/constants";
import { useEffect } from "react";
import { addUser, removeUser } from "../../utils/userSlice";

const useUser = (user) => {
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
};
export default useUser;
