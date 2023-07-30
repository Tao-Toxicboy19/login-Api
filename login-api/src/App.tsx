import React from "react";
import RegisterPage from "./components/Page/RegisterPage/RegisterPage";
import LoginPage from "./components/Page/LoginPage/LoginPage";
import Header from "./components/Layout/Header/Header";
import HomePage from "./components/Page/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";

type Props = {};

export default function App({}: Props) {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}
