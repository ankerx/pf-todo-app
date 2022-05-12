import RegisterForm from "../components/RegisterForm";

function Register({ user, setUser, setIsLoggedIn, setToken }) {
  return (
    <>
      <RegisterForm
        user={user}
        setUser={setUser}
        setIsLoggedIn={setIsLoggedIn}
        setToken={setToken}
      />
    </>
  );
}

export default Register;
