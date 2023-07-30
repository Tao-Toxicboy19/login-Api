import axios from "axios";
import React, { useState } from "react";

type Props = {};

export default function LoginPage({}: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Send login data to the server
      const response = await axios.post("http://localhost:4444/api/login", {
        username,
        password,
      });

      // Handle successful login
      console.log(response.data); // Show the response message from the server (e.g., "เข้าสู่ระบบสำเร็จ")

      // Reset form fields
      setUsername("");
      setPassword("");
      setError("");
    } catch (error: any) {
      // Handle login error
      console.log(error.response?.data?.error); // Show the error message from the server
      setError(error.response?.data?.error || "เกิดข้อผิดพลาดในการเข้าสู่ระบบ");
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
