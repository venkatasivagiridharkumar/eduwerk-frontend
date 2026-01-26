import "./index.css"
import {
  FiClock,
  FiAward,
  FiStar,
  FiUser,
  FiLayers,
  FiCode,
  FiMail,
  FiPhone,
  FiEdit3
} from "react-icons/fi";

import {
  FiBookOpen,
  FiCheckCircle,
  FiCpu,
  FiBriefcase,
  FiTrendingUp
} from "react-icons/fi";
import {
  FiLayout,
  FiServer,
  FiMonitor,
  FiDatabase
} from "react-icons/fi";


import epam from "./Asssets/epam-logo.png";
import cognizant from "./Asssets/conginzant.png";
import accenture from "./Asssets/accenture.png";
import amazon from "./Asssets/amazon.webp";
import americanexpress from "./Asssets/americanexpress.png";
import bosch from "./Asssets/bosch.png";
import mrcooper from "./Asssets/mrcooper.webp";
import tcs from "./Asssets/tcs.png";
import visiomatix from "./Asssets/visiomatix.png";
import rapido from "./Asssets/rapido.webp";
import zomato from "./Asssets/zomato.png";
import zepto from "./Asssets/zepto.png";



const roles = [
  {
    icon: <FiLayout />,
    title: "Frontend Engineering",
    desc: "Build modern, responsive user interfaces with strong attention to performance and accessibility."
  },
  {
    icon: <FiServer />,
    title: "Backend Engineering",
    desc: "Design and develop scalable APIs, services, and server-side systems."
  },
  {
    icon: <FiLayers />,
    title: "Full-Stack Development",
    desc: "Own features end-to-end across frontend and backend systems."
  },
  {
    icon: <FiMonitor />,
    title: "Web Interface Development",
    desc: "Translate designs into pixel-perfect, responsive web experiences."
  },
  {
    icon: <FiCpu />,
    title: "Software Engineering",
    desc: "Strong foundations in data structures, algorithms, and system design."
  },
  {
    icon: <FiDatabase />,
    title: "Data Engineering",
    desc: "Work with structured data pipelines, analytics, and backend data systems."
  }
];




const journeySteps = [
  {
    icon: <FiBookOpen />,
    title: "Industry-Focused Training",
    desc: "Structured programs designed to build strong fundamentals and real-world skills required by top companies."
  },
  {
    icon: <FiCheckCircle />,
    title: "Continuous Assessments",
    desc: "Regular tests and evaluations ensure you are progressing and ready for real interview challenges."
  },
  {
    icon: <FiUser />,
    title: "1:1 Mock Interviews",
    desc: "Personal mock interviews with experienced mentors to improve confidence and communication."
  },
  {
    icon: <FiCpu />,
    title: "AI Interview & Test Rating",
    desc: "AI-powered feedback highlights strengths, gaps, and readiness level before actual interviews."
  },
  {
    icon: <FiBriefcase />,
    title: "Interview Opportunities",
    desc: "Attend interviews with hiring partners once you meet the readiness benchmarks."
  },
  {
    icon: <FiTrendingUp />,
    title: "High-Paying Career Outcomes",
    desc: "Secure roles in leading companies with confidence and long-term career growth."
  }
];



const Placements=()=>{

 return <>
 <section className="hire-root">
      <div className="hire-container">

        {/* LEFT — VALUE */}
        <div className="hire-left">
          <div className="hire-badge">BUHONOX · HIRE</div>

          <h1>
            The fastest way to hire
            <br />
            <span>job-ready developers.</span>
          </h1>

          <p className="hire-subtitle">
            Industry-trained talent from Buhonox Academy, evaluated on
            real-world skills — not just resumes.
          </p>

          <div className="hire-stats">
            <div className="stat-card">
              <FiBriefcase />
              <div>
                <h3>₹ 0</h3>
                <p>No hiring fee</p>
              </div>
            </div>

            <div className="stat-card">
              <FiClock />
              <div>
                <h3>3–5 Days</h3>
                <p>Time to hire</p>
              </div>
            </div>

            <div className="stat-card">
              <FiAward />
              <div>
                <h3>Top 1%</h3>
                <p>Industry-ready talent</p>
              </div>
            </div>

            <div className="stat-card">
              <FiStar />
              <div>
                <h3>90+</h3>
                <p>Hiring partner score</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — FORM */}
        <div className="hire-right">
          <div className="hire-form">
            <h2>Hire Tech Talent</h2>

            <div className="input-group">
              <FiUser />
              <input type="text" placeholder="Your name" />
            </div>

            <div className="input-group">
              <FiBriefcase />
              <input type="text" placeholder="Company name" />
            </div>

            <div className="input-group">
              <FiMail />
              <input type="email" placeholder="Work email" />
            </div>

            <div className="input-group">
              <FiPhone />
              <input type="tel" placeholder="Phone number" />
            </div>

            <div className="input-group textarea">
              <FiEdit3 />
              <textarea placeholder="Share your hiring requirements" />
            </div>

            <button className="otp-button">
              Start Hiring
            </button>
          </div>
        </div>

      </div>
    </section>
    <section className="placement-root">
      <div className="placement-container">

        {/* HEADER */}
        <div className="placement-header">
          <h1>
            Your Placement Journey
            <br />
            <span>from learning to leadership.</span>
          </h1>

          <p>
            At Buhonox Academy, placements are not luck-based.
            They are the result of a carefully designed process that
            prepares you for success at every stage.
          </p>
        </div>

        {/* JOURNEY STEPS */}
        <div className="placement-steps">
          {journeySteps.map((step, index) => (
            <div className="placement-step" key={index}>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
    <section className="impact-root">
      <div className="impact-container">

        {/* LEFT CONTENT */}
        <div className="impact-left">
          <h1>
            Hire developers who
            <br />
            <span>deliver impact from day one.</span>
          </h1>

          <p className="impact-subtitle">
            Buhonox Academy prepares developers through rigorous training,
            continuous assessment, and real-world projects — ensuring
            they contribute meaningfully from the start.
          </p>

          <div className="impact-stats">
            <div className="impact-stat">
              <FiClock />
              <div>
                <strong>8+ Months</strong>
                <span>Structured training journey</span>
              </div>
            </div>

            <div className="impact-stat">
              <FiLayers />
              <div>
                <strong>750+ Hours</strong>
                <span>Industry-aligned curriculum</span>
              </div>
            </div>

            <div className="impact-stat">
              <FiCode />
              <div>
                <strong>500+ Hours</strong>
                <span>Hands-on coding practice</span>
              </div>
            </div>

            <div className="impact-stat">
              <FiBriefcase />
              <div>
                <strong>8+ Projects</strong>
                <span>Capstone & real-world builds</span>
              </div>
            </div>
          </div>

          <button className="impact-btn">
            Get in touch
          </button>

          <div className="impact-note">
            300+ trained developers ready for hire
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="impact-right">
          <div className="skill-orbit">
            <span>JavaScript</span>
            <span>React</span>
            <span>Python</span>
            <span>SQL</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Git</span>
            <span>Node.js</span>
          </div>
        </div>

      </div>
    </section>
      <section className="trusted-section">
        <div className="trusted-container">
          <h2 className="trusted-heading">
            <span>200+</span> companies have hired <strong>Buhonox</strong> learners
          </h2>

          <div className="logo-grid">
            <img src={cognizant} alt="cognizant" />
            <img src={americanexpress} alt="American Express" />
            <img src={tcs} alt="TCS" />
            <img src={zomato} alt="Zomato" />
            <img src={bosch} alt="Bosch" />
            <img src={accenture} alt="accenture" />
            <img src={zepto} alt="Zepto" />
            <img src={mrcooper} alt="Mr Cooper" />
            <img src={amazon} alt="Amazon" />
            <img src={rapido} alt="Rapido" />
            <img src={visiomatix} alt="Visiomatix" />
            <img src={epam} alt="EPAM" />
          </div>
          <p className="alumni-footnote">
      …and many more comapies
    </p>
        </div>
      </section>
    <section className="roles-root">
      <div className="roles-container">

        {/* HEADER */}
        <div className="roles-header">
          <h1>
            Engineers for
            <br />
            <span>every stage of your product.</span>
          </h1>

          <p>
            Buhonox graduates are trained across multiple engineering
            disciplines — enabling you to hire talent aligned with your
            specific technical needs.
          </p>
        </div>

        {/* ROLES GRID */}
        <div className="roles-grid">
          {roles.map((role, index) => (
            <div className="role-item" key={index}>
              <div className="role-icon">{role.icon}</div>
              <h3>{role.title}</h3>
              <p>{role.desc}</p>
            </div>
          ))}
        </div>

        {/* FOOTER CTA */}
        <div className="roles-cta">
          <button>Get in touch</button>
          <span>300+ trained developers available</span>
        </div>

      </div>
    </section>
 
 </>


}
export default Placements;