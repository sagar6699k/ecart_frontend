import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const initialFormData = {
    name: "",
    email: "",
    mobile: "",
    password: ""
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const apiUrl =
        "https://lobster-app-ddwng.ondigitalocean.app/user/register";
      const apiKey = "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH";

      const response = await axios.post(apiUrl, formData, {
        headers: {
          "Content-Type": "application/json",
          api_key: apiKey,
        },
      });

      if (response.data.status === true) {
        console.log("User registered successfully", response.data);
      } else {
        console.error("Registration failed", response.data.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div>
      <form>
        <h2>Signup</h2>
        <div>
          <label>Name</label>
          <input type="text" name="name" onChange={handleInputChange} />
        </div>
        <br />
        <div>
          <label>Email</label>
          <input type="email" name="email" onChange={handleInputChange} />
        </div>
        <br />
        <br />
        <br />
        <div>
          <label>Mobile Number</label>
          <input
            type="text"
            name="mobile"
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <label>Password</label>
          <input type="password" name="password" onChange={handleInputChange} />
        </div>
        <br />
        <button onClick={handleSignup}>Submit</button>
      </form>
    </div>
  );
};

export default Signup;
