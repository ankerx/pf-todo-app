import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Loading } from "./core/components/Loading";
import Navbar from "./core/components/Navbar";
import ProtectedRoute from "./core/components/ProtectedRoute";
import RedirectRoute from "./core/components/RedirectRoute";
import LoginForm from "./modules/auth/pages/LoginForm";
import RegisterForm from "./modules/auth/pages/RegisterForm";
import { setUser } from "./redux/features/auth/authSlice";
import { RootState } from "./redux/store";

const CreateTask = React.lazy(() => import("./modules/task/pages/CreateTask"));
const EditTask = React.lazy(() => import("./modules/task/pages/TaskEdit"));
const Home = React.lazy(() => import("./pages/Home"));
const App: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    dispatch(setUser(user));
  }, [dispatch, user]);
  return (
    <BrowserRouter>
      <div className="flex flex-col items-center justify-center">
        <Navbar />
        <React.Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="register" element={<RegisterForm />} />
            <Route
              path="log-in"
              element={
                <RedirectRoute user={user}>
                  <LoginForm />
                </RedirectRoute>
              }
            />
            <Route
              path="addTask"
              element={
                <ProtectedRoute user={user}>
                  <CreateTask />
                </ProtectedRoute>
              }
            />
            <Route
              path="/edit/:id"
              element={
                <ProtectedRoute user={user}>
                  <EditTask />
                </ProtectedRoute>
              }
            />
          </Routes>
        </React.Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
