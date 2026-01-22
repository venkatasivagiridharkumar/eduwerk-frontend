import "./index.css";
import eduwerkLogo from "../../assets/logos/Buhonox-logo.png";


const StudentRegister = () => {
  return (
    <div className="register-root">
        
      <div className="register-card">

       <div className="register-logo-container"><img src={eduwerkLogo} alt="Buhonox Academy" className="register-logo"/></div>
         
        

        <h1>
          Student Registration
          <span> Join the next hiring cohort</span>
        </h1>

        <p className="register-subtitle">
          Fill in your details once. Our team will guide you through the rest.
        </p>

        <form className="register-form">
          <div className="field">
            <label>Full Name</label>
            <input placeholder="Enter your full name" />
          </div>

          <div className="two-col">
            <div className="field">
              <label>Email</label>
              <input type="email" placeholder="you@email.com" />
            </div>

            <div className="field">
              <label>Phone Number</label>
              <input placeholder="+91 XXXXX XXXXX" />
            </div>
          </div>

          <div className="two-col">
            <div className="field">
              <label>College / University</label>
              <input placeholder="Your college name" />
            </div>

            <div className="field">
              <label>City / Location</label>
              <input placeholder="Your city" />
            </div>
          </div>

          <div className="two-col">
            <div className="field">
              <label>WhatsApp Number</label>
              <input placeholder="Same or different number" />
            </div>

            <div className="field">
              <label>Preferred Time to Connect</label>
              <select>
                <option>Morning (9am – 12pm)</option>
                <option>Afternoon (12pm – 4pm)</option>
                <option>Evening (4pm – 8pm)</option>
              </select>
            </div>
          </div>

          <div className="field">
            <label>Anything you want us to know?</label>
            <textarea placeholder="Goals, background, expectations (optional)" />
          </div>

          <button className="register-btn">
            Submit Registration
          </button>

          <p className="privacy">
            We respect your privacy. No spam. Ever.
          </p>
        </form>
      </div>
    </div>
  );
};

export default StudentRegister;
