import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const initialFormData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = "https://ecartbackend-production.up.railway.app/login";
      const response = await axios.post(apiUrl, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.user.name);
      alert("User Login successfully");
      navigate("/dashboard");
      // console.log("User Login successfully", response.data);
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error during Login:", error);
    }
  };

  return (
    <div className="h-screen">
      <form className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="w-full border rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="w-full border rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            onChange={handleInputChange}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleLogin}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
