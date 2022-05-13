import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthAxios from "./AuthAxios";

function LoginForm({ setIsLoggedIn }) {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleLogin = () => {
    AuthAxios.post(`/user/log-in`, {
      email: formData.email,
      password: formData.password,
    })
      .then((res) => sessionStorage.setItem("token", res.data.accessToken))
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
          className="py-2 px-4 bg-cyan-700 text-white w-full mt-3"
          value="Login"
          onClick={handleLogin}
          required
        />

        <button className="py-2 px-4 bg-cyan-700 text-white w-full mt-3">
          <Link to="/register"> Register</Link>
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
