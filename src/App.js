import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  const [token, setToken] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(token ? true : false);
  const [user, setUser] = useState();
  const [value, setValue] = useState("");

  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, [token]);

  return (
    <BrowserRouter>
      <div className="flex flex-col items-center justify-center">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                token={token}
              />
            }
          />
          <Route
            path="register"
            element={
              <Register
                setToken={setToken}
                user={user}
                setUser={setUser}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route
            path="log-in"
            element={<Login setIsLoggedIn={setIsLoggedIn} token={token} />}
          />
          <Route
            path="addTask"
            element={
              <AddTask token={token} value={value} setValue={setValue} />
            }
          />
          <Route path="/edit/:id" element={<EditTask value={value} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
