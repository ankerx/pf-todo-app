import { useSelector } from "react-redux";
import LoginForm from "../modules/auth/pages/LoginForm";
import TodoList from "../modules/task/pages/TodoList";

function Home() {
  const { user } = useSelector((state) => ({ ...state.auth }));
  return <>{user ? <TodoList /> : <LoginForm />}</>;
}

export default Home;
