import React, { useContext } from "react";
import Header from "../../Layout/Header/Header";
import { LoginTest } from "../../../App";

type Props = {};

export default function HomePage({}: Props) {
  const { isLoggedIn } = useContext(LoginTest); // Correct destructuring syntax
  return (
    <>
      <h1>{isLoggedIn.toString()}</h1>
      <div>HomePage</div>
    </>
  );
}
