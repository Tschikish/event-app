import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Header.css";

function Header({ onSearch }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    // 🔥 call the callback passed from EventsPage
    onSearch(query);
    setQuery("");
  };

  return (
    <header className="header">
      <div className="logo">
        <img  src="/logo.png" alt="no-logo" />
        <Link to="/"></Link>
      </div>

      <nav>
        <ul>
          <li className="levi-link">
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/events">EVENTS</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>
      </nav>
      <form className="header-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>
    </header>
  );
}

export default Header;
