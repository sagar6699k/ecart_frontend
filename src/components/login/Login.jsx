import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const initialFormData = {
    login_id: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = 'https://lobster-app-ddwng.ondigitalocean.app/user/login';
      const apiKey = 'Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH';
      

      const response = await axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'application/json',
          'api_key': apiKey,
        },
      });

      if (response.data.status === true) {
        console.log('User Login successfully', response.data);
      } else {
        console.error('Login failed', response.data.message);
      }
    } catch (error) {
      console.error('Error during Login:', error);
    }
  };


  return (
    <div>
      <form>
        <div>
          <label>Email: </label>
          <input type="email" name="login_id" onChange={handleInputChange} />
        </div>
        <br />
        <div>
          <label>Password: </label>
          <input type="password" name="password" onChange={handleInputChange} />
        </div>
        <br />
        <button onClick={handleLogin}>Submit</button>
      </form>
    </div>
  );
};

export default Login;
 