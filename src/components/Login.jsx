import React, { useState } from "react";
import { ACCOUNT_CREATE_MESSAGE } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res?.data));
      return navigate("/Account");
    } catch (err) {
      setErr(err?.response?.data || "Something went wrong");
    }
  };

  return (
    <div className="flex flex-col mx-10 my-10 w-1/2">
      <div className="bg-neutral-100  p-4">
        <h1 className="font-semibold text-md text-left">Login</h1>

        <div className="flex gap-x-10 items-center justify-between">
          <label className="text-left">Email or Username</label>
          <input
            className="bg-white p-2 rounded-lg border-1 border-gray-100 outline-none input outline-2 focus:outline-blue-300"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="my-2 flex gap-x-10 items-center justify-between">
          <label className="text-left">Password</label>
          <input
            className="bg-white p-2 rounded-lg border-1 border-gray-100 outline-none input outline-2 focus:outline-blue-300"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label className="float-right">Forgot Password?</label>
        </div>
        <div>
          <p className="text-red-600 my-2 text-sm">{err}</p>
        </div>
        <div>
          <button
            onClick={handleLogin}
            className="my-2 bg-black rounded-lg text-white text-md  p-2 px-4 tex-center cursor-pointer"
          >
            Sign In
          </button>
        </div>
      </div>
      <div className="float-left my-4">
        <h1 className="text-lg my-2 font-semibold">Create a New Account</h1>
        <p className="text-md font-semibold">{ACCOUNT_CREATE_MESSAGE}</p>
        <Link to="/signup">
          <button className="bg-orange-700 hover:bg-orange-500 px-3 p-2 text-white my-4 rounded-lg cursor-pointer">
            Create Account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
