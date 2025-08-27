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
        <ul>
          <li className="levi-link">
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/events">EVENTS</Link>
          </li>
        </ul>
    </header>
  );
}

export default Header;
