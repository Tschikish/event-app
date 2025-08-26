import { Link, useNavigate } from "react-router-dom";
import "../styles/HomePage.css";
function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/events">Dešavanja</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
