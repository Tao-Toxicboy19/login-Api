import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { LoginTest } from "../../../App";

type Props = {
  // setLoggedIn: (value: boolean) => void; // เพิ่ม prop ใน type เพื่อรับฟังก์ชันเพื่อตั้งค่าค่า isLoggedIn
};

export default function LoginPage({}: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { setLoggedIn } = useContext(LoginTest);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoggedIn(true);

      const response = await axios.post("http://localhost:4444/api/login", {
        username,
        password,
      });
      console.log(response.data);
      navigate("/");
      setUsername("");
      setPassword("");
      setError("");
    } catch (error: any) {
      console.log(error.response?.data?.error);
      setError(error.response?.data?.error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mt-5">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    className="input input-bordered"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6 flex flex-col gap-3">
                  {error && <p style={{ color: "red" }}>{error}</p>}
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                  <Link
                    to={"/register"}
                    className="btn btn-outline btn-primary"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
