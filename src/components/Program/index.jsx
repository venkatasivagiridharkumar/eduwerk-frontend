import "./index.css";
import {
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaReact,
  FaBriefcase
} from "react-icons/fa";
import {
  HiOutlineAcademicCap,
  HiOutlineExclamationCircle,
  HiOutlineSparkles,
  HiOutlineBriefcase
} from "react-icons/hi2";
import {Link} from "react-router-dom";

import { HiArrowLongDown } from "react-icons/hi2";

const Program = () => {
  return (
    <>
    <section className="buhonox-hero">
      <div className="buhonox-hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-left">
          <span className="hero-badge">
            Industry-aligned learning by Buhonox
          </span>

          <h1>
            Learn skills that
            <br />
            companies actually hire for
          </h1>

          <p className="hero-subtext">
            A structured, mentor-led learning journey designed
            to help students transition from education to
            real-world tech careers.
          </p>

          <ul className="hero-points">
            <li>• Start with zero experience</li>
            <li>• Learn from industry practitioners</li>
            <li>• Build real projects, not just certificates</li>
          </ul>
        </div>

        {/* RIGHT FORM */}
        <div className="hero-form-card">
          <h3>
            Register for a
            <span> free live session</span>
          </h3>

          <form>
            <label>Full Name</label>
            <input placeholder="Enter your name" />

            <label>Mobile Number</label>
            <div className="phone-row">
              <span className="code">+91</span>
              <input placeholder="Enter mobile number" />
            </div>

            <label>Current Status</label>
            <select>
              <option>Select education level</option>
              <option>College Student</option>
              <option>Recent Graduate</option>
              <option>Working Professional</option>
            </select>

            <button className="otp-button">
              Reserve my seat
            </button>

            <p className="form-note">
              By continuing, you agree to Buhonox
              Terms & Privacy Policy
            </p>
          </form>
        </div>

      </div>
    </section>
    
    
   <section className="gap-buhonox">

      <h2 className="gap-buhonox-title">
        Closing the gap between
        <br />
        education and employability
      </h2>

      <div className="gap-buhonox-track">

        {/* STEP 1 */}
        <div className="gap-buhonox-card step-1">
          <HiOutlineAcademicCap />
          <h4>Degree-First Education</h4>
          <p>
            Learning paths designed around exams,
            theory, and outdated curricula —
            disconnected from real hiring needs.
          </p>
        </div>

        <span className="gap-buhonox-line" />

        {/* STEP 2 */}
        <div className="gap-buhonox-card step-2">
          <HiOutlineExclamationCircle />
          <h4>The Reality</h4>
          <p>
            Graduates hold degrees but lack
            job-ready skills, confidence,
            and real-world exposure.
          </p>
        </div>

        <span className="gap-buhonox-line active" />

        {/* STEP 3 */}
        <div className="gap-buhonox-card step-3">
          <HiOutlineSparkles />
          <h4>The Shift</h4>
          <p>
            Hiring today is skills-first —
            problem solving, execution,
            and industry readiness.
          </p>
        </div>

        <span className="gap-buhonox-line gold" />

        {/* STEP 4 */}
        <div className="gap-buhonox-card step-4 highlight">
          <HiOutlineBriefcase />
          <h4>Why Buhonox</h4>
          <p>
            Structured learning, real projects,
            expert mentorship, and placement-driven outcomes.
          </p>

          <p className="gap-buhonox-emphasis">
            Students don’t just learn.
            <br />
            They get selected.
          </p>

          <Link to="/register"> <button className="otp-button">
            Join Buhonox
          </button></Link>
        </div>

      </div>
    </section>


      <section className="journey-section">
      <div className="journey-container">

        <h2 className="journey-title">
          Your journey from learning to getting hired
        </h2>
        <p className="journey-subtitle">
          A deeply structured, industry-aligned roadmap designed to turn
          learners into confident software professionals.
        </p>

        {/* STEP 1 */}
        <div className="journey-step">
          <div className="journey-icon grey">
            <FaCode />
          </div>
          <div className="journey-content">
            <span className="journey-duration">Weeks 1–20</span>
            <h3>Programming Foundations</h3>
            <p className="journey-main">
              This phase builds the mental model of a software engineer.
              You learn how computers think, how logic flows, and how to
              solve problems step-by-step.
            </p>
            <p className="journey-sub">
              By the end, you won’t just write code — you’ll understand
              why it works.
            </p>
          </div>
        </div>

        <HiArrowLongDown className="journey-arrow" />

        {/* STEP 2 */}
        <div className="journey-step">
          <div className="journey-icon grey">
            <FaLaptopCode />
          </div>
          <div className="journey-content">
            <span className="journey-duration">Weeks 21–50</span>
            <h3>Frontend & Responsive Design</h3>
            <p className="journey-main">
              Learn how real products are built visually. You design
              interfaces that look premium, work smoothly, and adapt
              perfectly across all screen sizes.
            </p>
            <p className="journey-sub">
              This is where your work starts to look professional.
            </p>
          </div>
        </div>

        <HiArrowLongDown className="journey-arrow" />

        {/* STEP 3 */}
        <div className="journey-step">
          <div className="journey-icon blue">
            <FaDatabase />
          </div>
          <div className="journey-content">
            <span className="journey-duration">Weeks 51–100</span>
            <h3>Backend, Databases & Git</h3>
            <p className="journey-main">
              You move behind the scenes — building APIs, managing data,
              handling logic, and collaborating using real industry tools.
            </p>
            <p className="journey-sub">
              This phase transforms you from a learner into a developer.
            </p>
          </div>
        </div>

        <HiArrowLongDown className="journey-arrow" />

        {/* STEP 4 */}
        <div className="journey-step">
          <div className="journey-icon blue">
            <FaReact />
          </div>
          <div className="journey-content">
            <span className="journey-duration">Weeks 101–130</span>
            <h3>Frameworks & Real-World Projects</h3>
            <p className="journey-main">
              Build full-stack applications using modern frameworks and
              production-grade practices followed by real companies.
            </p>
            <p className="journey-sub">
              Your portfolio begins to speak louder than your resume.
            </p>
          </div>
        </div>

        <HiArrowLongDown className="journey-arrow gold" />

        {/* STEP 5 */}
        <div className="journey-step final">
          <div className="journey-icon gold">
            <FaBriefcase />
          </div>
          <div className="journey-content">
            <span className="journey-duration">Final Phase</span>
            <h3>Placement Readiness & Career Launch</h3>
            <p className="journey-main">
              We help you translate skills into offers — resumes,
              interviews, projects, and confidence that recruiters trust.
            </p>
            <p className="journey-sub">
              This is where learning ends and your career begins.
            </p>
          </div>
        </div>

      </div>
    </section>


    </>
  );
};

export default Program;
