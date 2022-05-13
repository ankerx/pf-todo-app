import LoginForm from "../modules/Auth/LoginForm";

function Login({ setIsLoggedIn }) {
  return (
    <div className=" flex items-center justify-center">
      <LoginForm setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default Login;
