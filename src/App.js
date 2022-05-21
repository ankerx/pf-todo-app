import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./core/components/Navbar";
import ProtectedRoute from "./core/components/ProtectedRoute";
import RedirectRoute from "./core/components/RedirectRoute";
import LoginForm from "./modules/auth/pages/LoginForm";
import RegisterForm from "./modules/auth/pages/RegisterForm";
import Loading from "./core/components/Loading";
const CreateTask = React.lazy(() => import("./modules/task/pages/CreateTask"));
const EditTask = React.lazy(() => import("./modules/task/pages/TaskEdit"));
const Home = React.lazy(() => import("./pages/Home"));
function App() {
  const [token, setToken] = useState(sessionStorage.getItem("token") || "");
  const [isLoggedIn, setIsLoggedIn] = useState(token ? true : false);
  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
    console.log(token);
  }, [token]);

  return (
    <BrowserRouter>
      <div className="flex flex-col items-center justify-center">
        <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
        <React.Suspense fallback={<Loading />}>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  token={token}
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route path="register" element={<RegisterForm />} />
            <Route
              path="log-in"
              element={
                <RedirectRoute isLoggedIn={isLoggedIn}>
                  <LoginForm setIsLoggedIn={setIsLoggedIn} />
                </RedirectRoute>
              }
            />
            <Route
              path="addTask"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <CreateTask />
                </ProtectedRoute>
              }
            />
            <Route
              path="/edit/:id"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <EditTask />
                </ProtectedRoute>
              }
            />
          </Routes>
        </React.Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
