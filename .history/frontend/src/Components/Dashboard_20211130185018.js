import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../imports/index";
import axios from "axios";
import jwt_decode from "jwt-decode";

import { TokenUserInitiate } from "../Redux/Action";
const Dashboard = () => {
  const { tokenUser } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [token, setToken] = useState("");
  const [users, setUsers] = useState([]);
  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
    } catch (error) {
      if (error.response) {
        console.log(error);
      }
    }
  };
  console.log(users);
  const axiosJWT = axios.create();
  const getUsers = async () => {
    const response = await axiosJWT.get("http://localhost:5000/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUsers(response.data);
  };
  console.log(tokenUser);
  useEffect(() => {
    dispatch(TokenUserInitiate());
    getUsers();
    refreshToken();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1>Welcome Back: {tokenUser ? tokenUser.name : "No User 🙄"}</h1>
        <button onClick={getUsers} className="button is-info">
          Get Users
        </button>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {/* {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))} */}
            <tr>
              <td>tai</td>
              <td>tai</td>
              <td>tai</td>
              <td>tai</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;