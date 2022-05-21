import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthAxios from "../AuthAxios";

function LoginForm({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
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

  const validate = (formData) => {
    let errors = {};
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }

    if (formData.password.length === 0) {
      errors.password = "Passwords is required!";
    }
    return errors;
  };

  const handleLogin = async () => {
    setFormErrors(validate(formData));
    if (
      Object.keys(formErrors).length === 0 &&
      formData.email.length !== 0 &&
      formData.password.length !== 0
    ) {
      try {
        const res = await AuthAxios.post(`/user/log-in`, {
          email: formData.email,
          password: formData.password,
        });
        sessionStorage.setItem("token", res.data.accessToken);
        setIsLoggedIn(true);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("not valid");
      return;
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
        {formErrors.email && (
          <p className="text-red-500 text-sm">{formErrors.email}</p>
        )}
        <label>Password</label>
        <input
          className="bg-white border border-black "
          type="password"
          placeholder="password"
          onChange={handleChange}
          value={formData.password}
          name="password"
        />
        {formErrors.password && (
          <p className="text-red-500 text-sm">{formErrors.password}</p>
        )}
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
