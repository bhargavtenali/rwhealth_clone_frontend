import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import LandingPage from "./components/LandingPage";
import RegisterUser from "./components/RegisterUser";
import ForgotPasswordFirst from "./components/ForgotPasswordFirst";
import ForgotPasswordSecond from "./components/ForgotPasswordSecond";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/login" element={<LoginForm />} />
      <Route
        exact
        path="/forgotpasswordfirst"
        element={<ForgotPasswordFirst />}
      />
      <Route
        exact
        path="/forgotpasswordsecond"
        element={<ForgotPasswordSecond />}
      />
      <Route exact path="/register" element={<RegisterUser />} />
      <Route element={<NotFound />} />
    </Routes>
  );
}
