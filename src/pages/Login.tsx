import { useState } from "react";
import { login, googleLogin, forgotPassword } from "../auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
      alert("Login Successful");
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
      alert("Google Login Successful");
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleForgot = async () => {
    if (!email) {
      alert("Enter your email first");
      return;
    }

    try {
      await forgotPassword(email);
      alert("Password reset email sent.");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="login-page">
      <div className="hero-card">
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>

        <button onClick={handleGoogle}>
          Continue with Google
        </button>

        <button onClick={handleForgot}>
          Forgot Password
        </button>
      </div>
    </div>
  );
}
