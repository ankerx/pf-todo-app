import { ChangeEvent, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthAxios from "../../../core/api/request";
import { Errors, IRegisterForm } from "../../../Interfaces";
import { Input }from "./components/Input";
function RegisterForm() {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState<Errors>({});

  const [formData, setFormData] = useState<IRegisterForm>({
    email: "",
    password: "",
    confirmedPassword: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = (formData: IRegisterForm) => {
    let errors: Errors = {};
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
        const res = await AuthAxios.post(`/user/sign-up`, userObject);
        window.localStorage.setItem("token", res.data.accessToken);
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
        <Input
          label="Email"
          type="text"
          onChange={handleChange}
          value={formData.email}
          name="email"
          placeholder="Email"
        />
        {formErrors.email && (
          <p className="text-red-500 text-sm">{formErrors.email}</p>
        )}
        <Input
          label="Password"
          type="password"
          onChange={handleChange}
          value={formData.password}
          name="password"
          placeholder="Password"
        />
        <Input
          label="Confirm assword"
          type="password"
          onChange={handleChange}
          value={formData.confirmedPassword}
          name="confirmedPassword"
          placeholder="Confirm password"
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
