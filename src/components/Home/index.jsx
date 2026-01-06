import "./index.css";

export default function Home() {
  return (
    <main className="apple-page">

      {/* ANNOUNCEMENT BAR */}
      <section className="announce">
        <span className="tag">NEW</span>
        <p>
          Announcing OpenAI Academy x NxtWave Buildathon —
          India’s biggest GenAI challenge for students
        </p>
        <button className="link">Know more →</button>
      </section>

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Designed to transform you<br />
            into a highly skilled<br />
            Software Professional
          </h1>

          <p>
            Learn like top IITians and achieve high-paid
            software jobs with industry-ready programs.
          </p>

          <div className="hero-meta">
            <div>
              <strong>NEXT BATCH</strong>
              <span>Starts Soon</span>
            </div>
            <div>
              <strong>SEATS</strong>
              <span>Limited</span>
            </div>
          </div>

          <div className="hero-actions">
            <button className="primary">Request Callback</button>
            <button className="secondary">Know More</button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orb blue" />
          <div className="orb violet" />
        </div>
      </section>

      {/* PROGRAM CARDS */}
      <section className="programs">
        <ProgramCard
          title="Post 12th / Intermediate"
          subtitle="PCM • ICSE • CBSE • Any Board"
          desc="A structured journey into software engineering from day one."
        />
        <ProgramCard
          title="Graduates / Final Year"
          subtitle="Any Branch or Degree"
          desc="A proven program to make you a software developer."
        />
        <ProgramCard
          title="NIAT Universities"
          subtitle="At 10+ Universities Across India"
          desc="Industry-ready upskilling at collaborating universities."
        />
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

/* CARD COMPONENT */
function ProgramCard({ title, subtitle, desc }) {
  return (
    <div className="program-card">
      <h3>{title}</h3>
      <span>{subtitle}</span>
      <p>{desc}</p>
      <button className="link">Know More →</button>
    </div>
  );
}
