import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../auth";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister() {
    if (!name || !email || !password) {
      alert("Please fill all fields.");
      return;
    }

    try {
      await register(name, email, password);

      alert(
        "Registration successful. Please verify your email before logging in."
      );

      navigate("/login");
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <div className="login-page">
      <div className="hero-card">

        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="shop-btn"
          onClick={handleRegister}
        >
          Register
        </button>

        <p style={{ marginTop: "16px", textAlign: "center" }}>
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}
