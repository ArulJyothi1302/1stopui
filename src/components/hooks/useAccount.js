import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";
import { BASE_URL } from "../../utils/constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const useAccount = (user) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getUser = async () => {
    if (store) {
      return;
    }

    if (user) return;

    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch(addUser(JSON.parse(storedUser)));
      return;
    }

    try {
      const res = await axios.get(`${BASE_URL}/profile/view`, {
        withCredentials: true,
      });

      if (res.data) {
        dispatch(addUser(res.data));
      } else {
        navigate("/");
      }
    } catch (err) {
      navigate("/login");
    }
  };

  useEffect(() => {
    getUser();
  }, []);
};
export default useAccount;
