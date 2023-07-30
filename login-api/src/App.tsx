import React from "react";
import RegisterPage from "./components/Page/RegisterPage/RegisterPage";
import LoginPage from "./components/Page/LoginPage/LoginPage";

type Props = {};

export default function App({}: Props) {
  return (
    <>
      <RegisterPage />
      <hr />
      <LoginPage/>
    </>
  );
}
