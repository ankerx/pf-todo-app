import { useSelector } from "react-redux";
import LoginForm from "../modules/auth/pages/LoginForm";
import TodoList from "../modules/task/pages/TodoList";
import {selectCurrentUser} from "../redux/features/auth/authSlice"
function Home() {
  const  user  = useSelector(selectCurrentUser)
  return <>{user ? <TodoList /> : <LoginForm />}</>;
}

export default Home;
