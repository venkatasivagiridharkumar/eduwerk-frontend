import "./index.css";

export default function Home() {
  return (
    <main className="apple-page">

      {/* ANNOUNCEMENT BAR */}
      <section className="announce">
        <span className="tag">NEW</span>
        <p>
          Powering the next generation of top software engineers — learn, build, and get hired 🚀
        </p>
        <button className="link">Know more →</button>
      </section>

     
<section className="program-choice">
  <div className="program-box">
    <span className="program-tag">POST 12TH / DIPLOMA</span>

    <h3>Start Early. Build Strong Foundations.</h3>

    <p className="program-desc">
      Designed for students who want to enter software careers right
      after Intermediate or Diploma with structured, long-term learning.
    </p>

    <ul className="program-list">
      <li>PCM • ICSE • CBSE • Any Recognised Board</li>
      <li>Hands-on coding from day one</li>
      <li>Mentor-guided learning</li>
    </ul>

    <button className="primary">Request Callback</button>
  </div>

  <div className="program-box highlight">
    <span className="program-tag">UG / GRADUATES</span>

    <h3>Become an Industry-Ready Software Developer.</h3>

    <p className="program-desc">
      A proven upskilling program for college students and graduates aiming for high-paying software roles at top companies
    </p>

    <ul className="program-list">
      <li>Any branch or degree</li>
      <li>Real-world projects & interview prep</li>
      <li>Placement & career support</li>
    </ul>

    <button className="primary">Explore Program</button>
  </div>
</section>

      <section className="trusted-section">
  <div className="trusted-container">
    <h2 className="trusted-heading">
      <span>2000+</span> Companies have hired <strong>NxtWave®</strong> learners
    </h2>

    <div className="logo-grid">
      {/* Row 1 */}
      <img src="/logos/google.svg" alt="Google" />
      <img src="/logos/amazon.svg" alt="Amazon" />
      <img src="/logos/nvidia.svg" alt="NVIDIA" />
      <img src="/logos/accenture.svg" alt="Accenture" />
      <img src="/logos/deloitte.svg" alt="Deloitte" />
      <img src="/logos/bankofamerica.svg" alt="Bank of America" />
      <img src="/logos/bosch.svg" alt="Bosch" />

      {/* Continue logos as needed */}
    </div>
  </div>
</section>

      {/* TRUST */}
      <section className="trust">
        <h2>Trusted by students. Recognized by institutions.</h2>
        <p>
          Recognised by Government of India.  
          2000+ companies have hired trained learners.
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
          “Here, I gained command over concepts like never before.
          It taught me how to approach problems and solve them.”
        </blockquote>
        <p className="author">
          Meghna Barnwal • Software Development Engineer (Intern)
        </p>
      </section>

      {/* CTA */}
      <section className="final-cta">
        <h2>Start your journey with confidence.</h2>
        <button className="primary large">Request a Callback</button>
      </section>

    </main>
  );
}


