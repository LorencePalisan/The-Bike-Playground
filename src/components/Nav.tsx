import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/tbp logo-01.png";
import "./Nav.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/company", label: "Company" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="nav__inner container">
        <NavLink to="/" className="nav__logo" onClick={close}>
          <img src={logo} alt="The Bike Playground" className="nav__logo-img" />
        </NavLink>

        <button
          className={`nav__burger${open ? " nav__burger--open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`nav__links${open ? " nav__links--open" : ""}`}
          aria-label="Main navigation"
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `nav__link${isActive ? " nav__link--active" : ""}`
              }
              onClick={close}
            >
              {l.label}
            </NavLink>
          ))}
          {/* <NavLink
            to="/contact"
            className="btn-primary nav__cta"
            onClick={close}
          >
            Book Now
          </NavLink> */}
        </nav>
      </div>
    </header>
  );
}
