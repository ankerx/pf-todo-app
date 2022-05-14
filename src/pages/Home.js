import TodoList from "../modules/Task/TodoList";
import Login from "./Login";

function Home({ setIsLoggedIn, isLoggedIn }) {
  return (
    <>{isLoggedIn ? <TodoList /> : <Login setIsLoggedIn={setIsLoggedIn} />}</>
  );
}

export default Home;
