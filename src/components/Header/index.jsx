import { useState } from "react";
import "./index.css";
import eduwerklogo from "../../assets/logos/edu-werk academy.png";

const navItems = ["Home", "Programs", "Reviews", "Hire with Us"];

export default function Header() {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="glass-header">
        <div className="glass-nav">

        
          <div className="glass-logo">
            <img src={eduwerklogo} alt="Edu Werk Academy" />
          </div>

          
          <nav className="glass-links">
            {navItems.map(item => (
              <button
                key={item}
                className={`glass-link ${active === item ? "active" : ""}`}
                onClick={() => setActive(item)}
              >
                {item}
              </button>
            ))}
          </nav>
          <div className="glass-actions">
            <button className="glass-login">Login</button>
            <button
              className={`glass-burger ${open ? "open" : ""}`}
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              <span />
              <span />
            </button>
          </div>

        </div>
      </header>

     
      <div className={`glass-mobile ${open ? "show" : ""}`}>
        {navItems.map(item => (
          <button
            key={item}
            className={`glass-mobile-link ${active === item ? "active" : ""}`}
            onClick={() => {
              setActive(item);
              setOpen(false);
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
}
