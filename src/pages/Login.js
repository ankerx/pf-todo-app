import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn, token }) {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const URL = "http://localhost:8080/user/log-in";
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleLogin = async (e) => {
    try {
      const res = await axios.post(
        URL,
        {
          email: formData.email,
          password: formData.password,
        },
        config
      );
      console.log(res);
      setIsLoggedIn(true);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex items-center justify-center">
      <form className="flex flex-col items-center max-w-sm ">
        <label>Email</label>
        <input
          className="bg-white border border-black "
          type="email"
          placeholder="email"
          onChange={handleChange}
          value={formData.email}
          name="email"
        />
        <label>Password</label>
        <input
          className="bg-white border border-black "
          type="password"
          placeholder="password"
          onChange={handleChange}
          value={formData.password}
          name="password"
        />
        <input
          type="button"
          className="py-2 px-4 bg-cyan-700 w-full mt-3 text-white"
          value="Login"
          onClick={handleLogin}
        />

        <button className="py-2 px-4 bg-cyan-700 text-white w-full mt-3 ">
          <Link to="/register"> Register</Link>
        </button>
      </form>
    </div>
  );
}

export default Login;
