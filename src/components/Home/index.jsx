import {
  HiOutlineArrowRight,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineCheckCircle
} from "react-icons/hi2";
import {Link} from "react-router-dom";
import "./index.css";
import woolf from "./Asssets/woolf.png";
import jntua from "./Asssets/JNTUA.jpg";
import epam from "./Asssets/epam-logo.png";
import aberdeen from "./Asssets/aberdeen.png";
import adelaide from "./Asssets/adelaide.png";
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
import homeonlinetop from "./Asssets/home-online-top.avif";
import homeonlinebottom from "./Asssets/home-online-bottom.webp";
import certificate1 from "./Asssets/certificate1.jpg";
import certificate2 from "./Asssets/certificate2.png";



export default function Home() {
  return (
    <main className="home-root">
      <section className="announce announce-glow">
  <span className="tag pulse">PARTNERSHIP</span>

 <p className="announce-text">
  <span>
    We’re collaborating with a world-renowned university to redefine
    industry-aligned education. <strong>Revealing soon.</strong>
  </span>
</p>


  <button className="link">
    Learn more <HiOutlineArrowRight />
  </button>
</section>

    

      {/* PROGRAM CHOICE */}
      <section className="program-choice">
        <div className="program-box float-box">
          <span className="program-tag">POST 12TH / DIPLOMA</span>

          <h3>
            Start early. <br /> Build strong foundations.
          </h3>

          <p className="program-desc">
            A structured long-term learning path designed for students entering
            software careers right after Intermediate or Diploma.
          </p>

          <ul className="program-list">
            <li><HiOutlineCheckCircle /> Any recognised board</li>
            <li><HiOutlineCheckCircle /> Hands-on coding from day one</li>
            <li><HiOutlineCheckCircle /> Mentor-led learning</li>
          </ul>

          <button className="primary">
            Request Callback
          </button>
        </div>

        <div className="program-box highlight">
          <span className="program-tag">UG / GRADUATES</span>

          <h3>
            Become industry-ready. <br /> Get hired with confidence.
          </h3>

          <p className="program-desc">
            A proven upskilling program for college students and graduates
            targeting high-growth software roles.
          </p>

          <ul className="program-list">
            <li><HiOutlineAcademicCap /> Any degree or branch</li>
            <li><HiOutlineBriefcase /> Real projects & interview prep</li>
            <li><HiOutlineCheckCircle /> Placement & career support</li>
          </ul>

          <button className="primary">
            Explore Program
          </button>
        </div>
      </section>
    

<section className="alumni-section">
  <div className="alumni-container">

    <p className="alumni-eyebrow">
      LEARN FROM THE BEST
    </p>

    <h2 className="alumni-heading">
      Taught by alumni from the world’s
      <span> most respected universities</span><br />
      and <span>leading global companies</span>
    </h2>

    <p className="alumni-subtext">
      Our mentors have built products, shipped systems,
      and scaled technology at institutions that define excellence.
    </p>

    {/* LOGO GRID (you will add logos later) */}
    <div className="alumni-logos">
      <div className="logo-card"><img src={woolf} alt="Woolf" className="woolf-logo"/></div>
      <div className="logo-card"><img src={jntua} alt="Jntua" className="jntua-logo"/></div>
      <div className="logo-card"><img src={epam} alt="EPAM" className="epam-logo"/></div>
      <div className="logo-card"><img src={aberdeen} alt="aberdeen" className="aberdeen-logo"/></div>
      <div className="logo-card"><img src={adelaide} alt="Adelaide" className="adelaide-logo"/></div>
    </div>

  </div>
</section>
  <section className="metrics-section">
  <div className="metrics-container">

    <div className="metric">
      <h2>30+</h2>
      <p>Faculty & Industry Mentors</p>
    </div>

    <div className="metric">
      <h2>20+</h2>
      <p>Career-focused Programs</p>
    </div>

    <div className="metric">
      <h2>15+</h2>
      <p>Countries where alumni work</p>
    </div>

    <div className="metric">
      <h2>50+</h2>
      <p>Partner Colleges & Institutions</p>
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
      <section className="pathway-section">
  <div className="pathway-container">

    {/* LEFT CONTENT */}
    <div className="pathway-content">
      <h2 className="pathway-heading">
        Start learning online<br />
        <span>Grow into industry</span>
      </h2>

      <p className="pathway-text">
       Learn from anywhere in India through a mentor-led, outcome-driven online ecosystem designed to eliminate guesswork and accelerate careers. Every learner follows a structured path—strong fundamentals, real-world projects, and continuous feedback from industry mentors who’ve built what you’re building.
<br/><br/>
Our 100% placement-driven approach aligns skills with hiring demand through guided campus programs, interview sprints, and portfolio-ready capstones. Weekly hands-on workshops, Sunday deep-dive sessions, and industry podcasts expose you to current tools, real stories, and hiring insights—no fluff.
<br/><br/>
This isn’t passive learning. It’s an always-on career engine that converts potential into performance and ambition into industry-ready roles.
      </p>

      <Link to="/program"><button className="pathway-cta">
        Learn how it works →
      </button></Link>
    </div>

    {/* RIGHT IMAGES */}
    <div className="pathway-visual">
      <div className="image-top">
        <img
          src={homeonlinetop}
          alt="Student learning online"
        />
      </div>

      <div className="image-bottom">
        <img
          src={homeonlinebottom}
          alt="Students collaborating"
        />
      </div>
    </div>

  </div>
</section>
<section className="pillars-section">
  <div className="pillars-container">

    <div className="pillar">
      <span className="pillar-line" />
      <h3>Learn with flexibility</h3>
      <p>Online learning backed by structured mentorship and discipline.</p>
    </div>

    <div className="pillar">
      <span className="pillar-line" />
      <h3>Access global exposure</h3>
      <p>Learn from alumni and mentors with international industry experience.</p>
    </div>

    <div className="pillar">
      <span className="pillar-line" />
      <h3>Build real connections</h3>
      <p>Collaborate with peers, mentors, and working professionals.</p>
    </div>

    <div className="pillar">
      <span className="pillar-line" />
      <h3>Strengthen your career</h3>
      <p>Projects, internships, and guidance designed for hiring outcomes.</p>
    </div>

  </div>
</section>
<section className="certificate-hero">
  <div className="certificate-container">

    {/* LEFT CONTENT */}
    <div className="certificate-content">
      <h1>
        Ready to elevate your career<br />
        with industry recognised credentials?
      </h1>

      <p className="certificate-subtext">
        Earn industry-validated course completion and skill certificates
        designed to strengthen your resume and industry credibility.
      </p>

      <Link to="/register"><button className="certificate-cta">
        Register Now →
      </button></Link>
    </div>

    {/* RIGHT VISUAL */}
    <div className="certificate-visual">
      <img
        src={certificate1}
        alt="Course Completion Certificate"
        className="cert-card primary"
      />
      <img
        src={certificate2}
        alt="Skill Certificate"
        className="cert-card secondary"
      />
    </div>

  </div>
</section>


      {/* TRUST BADGES */}
      <section className="trust">
        <h2>Trusted by students. Recognised by institutions.</h2>
        <p>
          Recognised by Government of India.  
          Thousands of learners placed across industries.
        </p>

        <div className="trust-glass">
          <span>Technology Pioneer 2024</span>
          <span>Forbes 30 Under 30</span>
          <span>Times Business Awards</span>
          <span>Prime Insights</span>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="testimonial">
        <blockquote>
          “This platform changed how I think about problem-solving.
          It gave me clarity, confidence, and direction.”
        </blockquote>
        <p className="author">
          Meghna Barnwal • Software Development Engineer (Intern)
        </p>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <h2>Start your journey with confidence.</h2>
        <button className="primary large">
          Request a Callback
        </button>
      </section>

    </main>
  );
}
