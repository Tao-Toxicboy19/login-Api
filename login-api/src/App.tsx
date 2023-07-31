import React, { createContext, useState } from "react";
import RegisterPage from "./components/Page/RegisterPage/RegisterPage";
import LoginPage from "./components/Page/LoginPage/LoginPage";
import Header from "./components/Layout/Header/Header";
import HomePage from "./components/Page/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";

type Props = {};

export const LoginTest = createContext<any>(null);

export default function App({}: Props) {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <LoginTest.Provider value={{ isLoggedIn, setLoggedIn }}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </LoginTest.Provider>
    </>
  );
}
