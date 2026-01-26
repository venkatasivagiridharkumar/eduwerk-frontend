import { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./index.css";
import buhonoxLogo from "../../assets/logos/Buhonox-logo.png";

import {
  FiTarget,
  FiUsers,
  FiAward,
  FiCode,
  FiCpu,
  FiTrendingUp
} from "react-icons/fi";


const navItems = [
  { label: "Home", path: "/" },
  {
    label: "About Buhonox",
    path: "/about",
    children: [
      { label: "Our Mission", path: "/about#mission", icon: <FiTarget /> },
      { label: "Mentors & Faculty", path: "/about#mentors", icon: <FiUsers /> },
      { label: "University Partners", path: "/partnerships", icon: <FiAward /> }
    ]
  },
  {
    label: "Programs",
    path: "/program",
    children: [
      { label: "Full-Stack Development", path: "/program/fullstack", icon: <FiCode /> },
      { label: "Data & AI", path: "/program/data-ai", icon: <FiCpu /> },
      { label: "Career Launchpad", path: "/program/career", icon: <FiTrendingUp /> }
    ]
  },
  { label: "Reviews", path: "/reviews" },
  { label: "Placements", path: "/placements" }
];


export default function Header() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const navRef = useRef(null);

  const closeMenu = () => {
    setOpen(false);
    setOpenMenu(null);
  };

  /* CLICK OUTSIDE → CLOSE DROPDOWN */
  useEffect(() => {
    const handleOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("click", handleOutside);
return () => document.removeEventListener("click", handleOutside);
}, []);

  return (
    <>
      <header className="glass-header">
        <div className="glass-nav">
          {/* LOGO */}
          <div className="glass-logo">
            <Link to="/" onClick={closeMenu}>
              <img src={buhonoxLogo} alt="Buhonox Academy" />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav className="glass-links" ref={navRef}>
            {navItems.map((item) => {
              const isOpen = openMenu === item.label;

              return (
                <div className="nav-item" key={item.label}>
                  {item.children ? (
                    <button
                      className={`glass-link ${isOpen ? "open" : ""}`}
                      onClick={() =>
                        setOpenMenu(isOpen ? null : item.label)
                      }
                    >
                      {item.label}
                    </button>
                  ) : (
                    <NavLink to={item.path} className="glass-link">
                      {item.label}
                    </NavLink>
                  )}

                  {item.children && isOpen && (
                    <div className="glass-dropdown">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.label}
                          to={child.path}
                          className="dropdown-item"
                          onClick={() => setOpenMenu(null)}
                        >
                          <span className="dropdown-icon">{child.icon}</span>
                          <span className="dropdown-text">{child.label}</span>
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* ACTIONS */}
          <div className="glass-actions">
            <Link to="/login" onClick={closeMenu}>
              <button className="glass-login">Login</button>
            </Link>

            <button
              className={`glass-burger ${open ? "open" : ""}`}
              onClick={() => setOpen(!open)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`glass-mobile ${open ? "show" : ""}`}>
        {navItems.map(({ label, path }) => (
          <NavLink
            key={label}
            to={path}
            className="glass-mobile-link"
            onClick={closeMenu}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </>
  );
}
