import { Link } from "react-router-dom";

function Navbar({ setIsLoggedIn, isLoggedIn }) {
  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.clear();
  };
  return (
    <>
      <nav className="flex text-white p-3 bg-cyan-700 w-full">
        <h1 className="mr-20">
          <Link to="/">TODO APP</Link>
        </h1>
        <ul className="flex">
          {!isLoggedIn && (
            <>
              <li className="mr-5">
                <Link to="log-in">Login</Link>
              </li>
            </>
          )}
          {isLoggedIn && (
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
