import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  let setIsLoggedIn=props.setIsLoggedIn;
  const [userData, setUserData] = useState({ username: "", password: "" });
  const navigate = useNavigate("");

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        body: JSON.stringify({
          username: userData.username,
          password: userData.password,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      const data = await res.json();
  
      if (data.token) {
        localStorage.setItem("token", data.token);
        setIsLoggedIn(true);
        toast.success("Logged in");
        navigate("/Home");
      } else {
        toast.error("Please enter valid username and password from FakeStore");
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("Please enter valid username and password from FakeStore");
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-500">
      <div className="bg-black text-white px-10 py-8 rounded-xl shadow-lg w-full max-w-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold m-2">Faker App Login</h2>
       
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm mb-1">Username:</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={userData.username}
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
              className="w-full p-2 rounded text-black"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              className="w-full p-2 rounded text-black"
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
