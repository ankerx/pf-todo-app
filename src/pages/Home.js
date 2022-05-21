import LoginForm from "../modules/auth/pages/LoginForm";
import TodoList from "../modules/task/pages/TodoList";

function Home({ setIsLoggedIn, isLoggedIn }) {
  return (
    <>
      {isLoggedIn ? <TodoList /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
    </>
  );
}

export default Home;
