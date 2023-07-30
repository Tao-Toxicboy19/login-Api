import axios from "axios";
import { useState } from "react";

type Props = {};

export default function RegisterPage({}: Props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      setError("รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน");
      return;
    }

    try {
      // Send registration data to the server
      const response = await axios.post("http://localhost:4444/api/register", {
        username,
        email,
        password,
        confirmpassword: confirmPassword,
      });

      // Handle successful registration
      console.log(response.data); // Show the response message from the server (e.g., "ลงทะเบียนผู้ใช้งานเรียบร้อยแล้ว!!!")

      // Reset form fields
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setError("");
    } catch (error: any) {
      // Handle registration error
      console.log(error.response?.data?.error); // Show the error message from the server
      setError(
        error.response?.data?.error || "เกิดข้อผิดพลาดในการลงทะเบียนผู้ใช้งาน"
      );
    }
  };

  return (
    <div>
      <h1>RegisterPage</h1>
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
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

