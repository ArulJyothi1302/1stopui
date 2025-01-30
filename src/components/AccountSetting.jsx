import React, { useState } from "react";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";

const AccountSetting = () => {
  const user = useSelector(
    (store) => store?.user?.data?.data || store?.user?.data
  );

  const [fullName, setFullName] = useState(user?.fullName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState(user?.password || "");

  const [nameEdit, setNameEdit] = useState(false);
  const [emailEdit, setEmailEdit] = useState(false);
  const [passwordEdit, setPasswordEdit] = useState(false);

  const [err, setErr] = useState("");
  const [showToast, setShowToast] = useState(false);

  const dispatch = useDispatch();

  const handleUpdate = async (field) => {
    if (field === "name") {
      if (nameEdit) {
        try {
          setErr("");
          const res = await axios.patch(
            `${BASE_URL}/profile/edit`,
            { fullName, email },
            { withCredentials: true }
          );
          dispatch(addUser(res?.data?.data));
          setShowToast(true);
          setTimeout(() => setShowToast(false), 3000);
        } catch (err) {
          setErr(err?.response?.data);
        }
      }
      setNameEdit(!nameEdit);
    } else if (field === "email") {
      if (emailEdit) {
        try {
          setErr("");
          const res = await axios.patch(
            `${BASE_URL}/profile/edit`,
            { fullName, email },
            { withCredentials: true }
          );
          dispatch(addUser(res?.data?.data));
          setShowToast(true);
          setTimeout(() => setShowToast(false), 3000);
        } catch (err) {
          setErr(err?.response?.data);
        }
      }
      setEmailEdit(!emailEdit);
    } else if (field === "password") {
      setPasswordEdit(!passwordEdit);
    }
  };

  return (
    <div>
      <div className="grid grid-flow-col mx-10">
        <div className="row-span-3">
          <SideBar />
        </div>
        <div className="col-span-9">
          <h1 className="text-2xl">Account Settings</h1>
          <div>
            <div className="flex gap-10 items-center justify-between my-2">
              <label>Login Id</label>
              {nameEdit ? (
                <input
                  className="input border  border-gray-300"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              ) : (
                <p>{fullName}</p>
              )}

              <button
                onClick={() => handleUpdate("name")}
                className={`p-2 rounded-lg w-12 text-white ${
                  nameEdit ? "bg-green-600" : "bg-red-800"
                }`}
              >
                {nameEdit ? "Save" : "Edit"}
              </button>
            </div>

            <div className="flex gap-10 items-center justify-between my-2">
              <label>Account Email</label>
              {emailEdit ? (
                <input
                  className=" input border border-gray-300"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              ) : (
                <p>{email}</p>
              )}

              <button
                onClick={() => handleUpdate("email")}
                className={`p-2 rounded-lg w-12 text-white ${
                  emailEdit ? "bg-green-600" : "bg-red-800"
                }`}
              >
                {emailEdit ? "Save" : "Edit"}
              </button>
            </div>

            <div className="flex gap-10 items-center justify-between my-2">
              <label>Account Password</label>
              {passwordEdit ? (
                <input
                  className="input border border-gray-300"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              ) : (
                user && <p>********************</p>
              )}

              <button
                onClick={() => handleUpdate("password")}
                className={`p-2 rounded-lg w-12 text-white ${
                  passwordEdit ? "bg-green-600" : "bg-red-800"
                }`}
              >
                {passwordEdit ? "Save" : "Edit"}
              </button>
            </div>
          </div>
          <p className="text-red-500 text-md p-2">{err}</p>
        </div>
      </div>

      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Updated Successfully</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountSetting;
