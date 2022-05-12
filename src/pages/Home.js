import TodoList from "../components/TodoList";
import Login from "./Login";

function Home({ setIsLoggedIn, isLoggedIn, token }) {
  return (
    <>
      {isLoggedIn ? (
        <TodoList token={token} />
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}

export default Home;
