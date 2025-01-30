import axios from "axios";
import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [userName, setuserName] = useState("");
  const [err, setErr] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (password !== rePassword) {
      setErr("Password not Matched");
      throw new Error("Error Please Check");
    }
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        {
          fullName,
          email,
          userName,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res?.data?.data));
      console.log(res?.data?.data);
      return navigate("/Account");
    } catch (err) {
      setErr(err?.response?.data);
    }
  };
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center border border-slate-300 border-l-4 border-l-green-800 p-4 rounded-md mb-6">
        <span className="text-3xl text-green-600 mr-4">
          <FaLock />
        </span>
        <div>
          <h2 className="text-xl font-semibold mb-1">
            Sign Up with Confidence. Shop with Confidence.
          </h2>
          <p className="text-slate-500">
            Our servers are secured by 256-bit SSL encryption technology and our
            credit card processing is certified PCI compliant.
          </p>
        </div>
      </div>

      <h1 className="text-2xl font-semibold mb-4">
        New Loyalty Program Account Signup
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name (Required)
          </label>
          <input
            type="text"
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email (Required)
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            onChange={(e) => setuserName(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password (Required)
          </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Retype Password
          </label>
          <input
            type="password"
            onChange={(e) => setRePassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
          />
        </div>

        <div className="md:col-span-2 flex items-start">
          <input
            type="checkbox"
            className="h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-cyan-600"
          />
          <label className="ml-3 text-sm text-gray-700">
            Keep me informed about special offers, exclusive promotions, and
            product updates.
          </label>
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            onClick={handleSignup}
            className=" bg-red-500 cursor-pointer text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-cyan-600"
          >
            Create Account
          </button>
        </div>
        <p className="text-red-600 text-md">{err}</p>
      </div>

      <p className="text-sm text-gray-600 mt-4 bg-neutral-200 p-4">
        Thank you for becoming a member of 1STOPLighting! We hope you enjoy the
        trends, design ideas, and promotions we’ve selected for you. You may
        choose to stop receiving these emails at any time through your Account
        Settings or by selecting the "Unsubscribe" link in emails.
      </p>
    </div>
  );
};

export default SignUp;
