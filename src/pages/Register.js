import RegisterForm from "../modules/Auth/RegisterForm";

function Register({ setUser }) {
  return (
    <>
      <RegisterForm setUser={setUser} />
    </>
  );
}

export default Register;
