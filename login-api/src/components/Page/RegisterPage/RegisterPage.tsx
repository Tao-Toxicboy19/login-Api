import axios from "axios";
import { useState } from "react";

type Props = {};

export default function RegisterPage({}: Props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:4444/api/register", {
        username,
        email,
        password,
        confirmPassword,
      });

      console.log("Register successful:", response.data);
      // You can show a success message or redirect to another page as desired
    } catch (error: any) {
      console.error(
        "Error registering:",
        (error.response?.data as string) || error.message
      );
      // You can show an error message or handle the error as needed
    }
  };

  return (
    <>
      <label htmlFor="">Username</label>
      <br />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label htmlFor="">Email</label>
      <br />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor="">Password</label>
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <label htmlFor="">Confirm Password</label>
      <br />
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <br />
      <br />
      <br />
      <button onClick={handleRegister}>Register</button>
    </>
  );
}
