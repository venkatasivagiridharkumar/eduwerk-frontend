import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./index.css";
import buhonoxLogo from "../../assets/logos/Buhonox-logo.png";

/* CENTRAL ROUTE CONFIG — scalable */
const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Program", path: "/program" },
  { label: "Reviews", path: "/reviews" },
  { label: "Hire with Us", path: "/hire" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="glass-header">
        <div className="glass-nav">

          {/* LOGO */}
          <div className="glass-logo">
            <Link to="/" onClick={closeMenu}>
              <img src={buhonoxLogo} alt="Buhonox Academy" />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav className="glass-links">
            {navItems.map(({ label, path }) => (
              <NavLink
                key={label}
                to={path}
                end
                className={({ isActive }) =>
                  `glass-link ${isActive ? "active" : ""}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="glass-actions">
            <Link to="/login" onClick={closeMenu}>
              <button className="glass-login">Login</button>
            </Link>

            {/* BURGER */}
            <button
              className={`glass-burger ${open ? "open" : ""}`}
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
              aria-expanded={open}
            >
              <span />
              <span />
            </button>
          </div>

        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div className={`glass-mobile ${open ? "show" : ""}`}>
        {navItems.map(({ label, path }) => (
          <NavLink
            key={label}
            to={path}
            end
            className={({ isActive }) =>
              `glass-mobile-link ${isActive ? "active" : ""}`
            }
            onClick={closeMenu}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </>
  );
}
