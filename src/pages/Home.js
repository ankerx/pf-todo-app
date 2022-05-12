import TodoList from "../components/TodoList";
import Login from "./Login";

function Home({ isLoggedIn, token }) {
  return <>{isLoggedIn ? <TodoList token={token} /> : <Login />}</>;
}

export default Home;
