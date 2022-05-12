import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function LoginForm({ setIsLoggedIn }) {
  let navigate = useNavigate();
  const token = sessionStorage.getItem("token");

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
  const handleLogin = () => {
    axios
      .post(
        URL,
        {
          email: formData.email,
          password: formData.password,
        },
        config
      )
      .then((res) => console.log(res))
      .then(setIsLoggedIn(true))
      .then(navigate("/"))
      .catch((err) => console.log(err));
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
          required
        />
        <input
          type="button"
          className="py-2 px-4 bg-cyan-500 w-full mt-3"
          value="Login"
          onClick={handleLogin}
          required
        />

        <button className="py-2 px-4 bg-cyan-500 w-full mt-3">
          <Link to="/register"> Register</Link>
        </button>
      </form>
      <div> aaaa</div>
    </div>
  );
}

export default LoginForm;
