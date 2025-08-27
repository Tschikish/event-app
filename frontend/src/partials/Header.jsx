import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/HomePage.css";


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
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/events">Dešavanja</Link>
          </li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
