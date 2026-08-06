import { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <header className="header">
        <h1>🛍️ Rayhan Digital Shop</h1>

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </header>

      <main className="home">
        <div className="hero-card">
          <h2>Welcome to Rayhan Digital Shop</h2>

          <p>
            Premium Mobile-First E-Commerce Platform
          </p>

          <button className="shop-btn">
            Start Shopping
          </button>
        </div>
      </main>

      <nav className="bottom-nav">
        <button>🏠 Home</button>
        <button>🔍 Search</button>
        <button>🛒 Cart</button>
        <button>❤️ Wishlist</button>
        <button>👤 Profile</button>
      </nav>
    </div>
  );
}
