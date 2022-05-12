import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
function RegisterForm({ user, setUser, setIsLoggedIn, setToken }) {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmedPassword: "",
  });
  const URL = "http://localhost:8080/user/sign-up";

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

    if (formData.password !== formData.confirmedPassword) {
      errors.password = "Passwords not match!";
    }
    return errors;
  };

  const createUser = async () => {
    const userObject = {
      email: formData.email,
      password: formData.password,
    };
    setFormErrors(validate(formData));
    if (
      Object.keys(formErrors).length === 0 &&
      formData.email.length !== 0 &&
      formData.password.length !== 0 &&
      formData.confirmedPassword.length !== 0 &&
      formData.password === formData.confirmedPassword
    ) {
      try {
        const res = await axios.post(URL, userObject);
        setUser(res.data.user);
        setToken(res.data.accessToken);
        sessionStorage.setItem("token", res.data.accessToken);
        navigate("/log-in");
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

        <label>Confirm password</label>
        <input
          className="bg-white border border-black "
          type="password"
          placeholder="password"
          onChange={handleChange}
          value={formData.confirmedPassword}
          name="confirmedPassword"
        />
        {formErrors.password && (
          <p className="text-red-500 text-sm">{formErrors.password}</p>
        )}
        <input
          type="button"
          className="py-2 px-4 bg-cyan-700 text-white  w-full mt-3"
          value="Register"
          onClick={createUser}
        />
        <button className="py-2 px-4 bg-cyan-700 text-white  w-full mt-3">
          <Link to="/log-in"> Login</Link>
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;