import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter
} from "react-icons/fa6";
import { HiOutlineMapPin } from "react-icons/hi2";
import "./index.css";
import brandLogo from "../../assets/logos/Buhonox-logo.png";

export default function Footer() {
  return (
    <footer className="footer-root">

      
      <section className="footer-disclaimer">
        <p>
          Buhonox Education Programs are available to current students,
          graduates, and working professionals. Program availability,
          curriculum, and outcomes may vary by cohort and location.
        </p>
        <p>
          Placement assistance is subject to eligibility, performance,
          and market conditions. Results are not guaranteed.
        </p>
        <p>
          Features, curriculum, and partnerships are subject to change.
        </p>
      </section>

      {/* NAVIGATION GRID */}
      <section className="footer-nav">
        <div>
          <h4>Learn</h4>
          <a href="/">Programs</a>
          <a href="/">Curriculum</a>
          <a href="/">Placements</a>
          <a href="/">Success Stories</a>
        </div>

        <div>
          <h4>Account</h4>
          <a href="/login">Student Login</a>
          <a href="/register">Register</a>
          <a href="/">Dashboard</a>
          <a href="/">Support</a>
        </div>

        <div>
          <h4>Company</h4>
          <a href="/">About Buhonox</a>
          <a href="/">Leadership</a>
          <a href="/">Careers</a>
          <a href="/">Partners</a>
        </div>

        <div>
          <h4>For Institutions</h4>
          <a href="/">Universities</a>
          <a href="/">Corporates</a>
          <a href="/">Government</a>
          <a href="/">Training Programs</a>
        </div>

        <div>
          <h4>Values</h4>
          <a href="/">Education</a>
          <a href="/">Accessibility</a>
          <a href="/">Privacy</a>
          <a href="/">Ethics</a>
        </div>
      </section>

      {/* LOCATION + MAP */}
      <section className="footer-location">
        <div className="location-info">
          <img src={brandLogo} alt="Buhonox" />
          <p>
            Buhonox Academy <br />
            Near Accenture, Koramangala <br />
            Bengaluru, Karnataka
          </p>

          <a
            href="https://www.google.com/maps/search/Accenture+Koramangala"
            target="_blank"
            rel="noreferrer"
            className="map-link"
          >
            <HiOutlineMapPin /> View on Google Maps
          </a>

          <div className="socials">
            <a href="/"><FaInstagram /></a>
            <a href="/"><FaLinkedinIn /></a>
            <a href="/"><FaYoutube /></a>
            <a href="/"><FaXTwitter /></a>
          </div>
        </div>

        <div className="map-box">
          <iframe
            title="Buhonox Location"
            src="https://www.google.com/maps?q=Accenture%20Koramangala&output=embed"
            loading="lazy"
          />
        </div>
      </section>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Buhonox Academy. All rights reserved.</span>
        <div className="footer-legal">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Use</a>
          <a href="/">Legal</a>
          <a href="/">Site Map</a>
        </div>
      </div>

    </footer>
  );
}
