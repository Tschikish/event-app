import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Header.css";

function Header() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    // navigate to events page with query as URL param
    navigate(`/events?search=${encodeURIComponent(query)}`);
    setQuery("");
  };

  return (
    <header className="header">
      <img src="/logo.png" alt="no-logo" />
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
    </header>
  );
}

export default Header;
