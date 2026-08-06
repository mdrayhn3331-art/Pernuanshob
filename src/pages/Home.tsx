import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="app">

      <header className="header">
        <h1>🛍️ Rayhan Digital Shop</h1>
      </header>

      <main className="home">

        <section className="hero-card">
          <h2>Premium Mobile Store</h2>

          <p>
            Welcome to Rayhan Digital Shop
          </p>

          <Link to="/products">
            <button className="shop-btn">
              Shop Now
            </button>
          </Link>
        </section>

        <section className="hero-card" style={{marginTop:"20px"}}>

          <h3>Categories</h3>

          <div
            style={{
              display:"grid",
              gridTemplateColumns:"repeat(2,1fr)",
              gap:"12px",
              marginTop:"15px"
            }}
          >

            <button className="shop-btn">
              Mobile
            </button>

            <button className="shop-btn">
              Laptop
            </button>

            <button className="shop-btn">
              Accessories
            </button>

            <button className="shop-btn">
              Gadgets
            </button>

          </div>

        </section>

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
