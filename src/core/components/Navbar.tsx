import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setLogout, selectCurrentUser } from "../../redux/features/auth/authSlice";

function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser)
  console.log(user);
  
  const handleLogout = () => {
    dispatch(setLogout());
  };
  return (
    <>
      <nav className="flex text-white p-3 bg-cyan-700 w-full">
        <h1 className="mr-20">
          <Link to="/">TODO APP</Link>
        </h1>
        <ul className="flex">
          {!user && (
            <>
              <li className="mr-5">
                <Link to="log-in">Login</Link>
              </li>
            </>
          )}
          {user && (
            <li className="mr-5">
              <button onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
