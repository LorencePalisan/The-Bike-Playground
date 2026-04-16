import { Link } from "react-router-dom";
import logo from "../assets/tbp logo-01.png";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <img
              src={logo}
              alt="The Bike Playground"
              className="footer__logo-img"
            />
          </Link>
          <p className="footer__tagline">Ride Bold. Play Hard. Gear Up.</p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <span className="footer__nav-label">Pages</span>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/company">Company</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="footer__contact">
          <span className="footer__nav-label">Contact</span>
          <a href="tel:+639171242787">0917-124-2787</a>
          <a href="mailto:thebikeplayground@gmail.com">
            thebikeplayground@gmail.com
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {year} The Bike Playground. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
