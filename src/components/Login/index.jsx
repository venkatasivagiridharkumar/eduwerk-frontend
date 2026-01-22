import "./index.css";
import eduwerkLogo from "../../assets/logos/Buhonox-logo.png";
import {Link} from "react-router-dom";

const stories = [
  { img:"https://live.staticflickr.com/65535/54913738248_61963c6ec9_w.jpg",name: "Malleshwar", role: "Frontend Developer", company: "Cognizant" },
  { img:"https://live.staticflickr.com/65535/54910433372_84b8d40174_w.jpg", name: "Venkata Siva", role: "Mern Developer", company: "Rinovo" },
  { img:"https://static.vecteezy.com/system/resources/previews/060/423/171/non_2x/professional-female-avatar-icon-with-brown-hair-and-blue-eyes-in-a-modern-flat-style-on-transparent-background-free-png.png", name: "Charitha", role: "Tech Analyst", company: "Eduwerk" },
  { img:"https://live.staticflickr.com/65535/54912744927_16ae3d78c1_n.jpg", name: "Sudheer", role: "Software Engineer", company: "Visiomatix" },
  { img:"https://live.staticflickr.com/65535/54913601756_7104eb52d9_n.jpg", name: "Siva", role: "Python Developer", company: "Reliance" },
  { img:"https://live.staticflickr.com/65535/54913827400_ddecd4036b_w.jpg", name: "Yugandhar", role: "Internship", company: "Visiomatix" },
  { img:"https://live.staticflickr.com/65535/54911305126_00692671ff_w.jpg", name: "Ram Charan", role: "Member Technical", company: "Mr Cooper" },
  { img:"https://live.staticflickr.com/65535/54912732437_7b4ee1497e_n.jpg", name: "Vaseem Basha", role: "ML Engineer", company: "Mango Music" },
  { img:"https://static.vecteezy.com/system/resources/previews/060/423/171/non_2x/professional-female-avatar-icon-with-brown-hair-and-blue-eyes-in-a-modern-flat-style-on-transparent-background-free-png.png", name: "Sunaina", role: "Backend Intern", company: "EduWerk" },
  { img:"https://live.staticflickr.com/65535/54908701162_ae0926c4e9_n.jpg", name: "Venkatesh", role: "Full Stack Engineer", company: "EET" },

];

const Login = () => {
  return (
    <div className="login-root">
      
      <section className="login-left">
        <img className="brand" src={eduwerkLogo} alt="EDUWERK"/>

        <h1>
          Skills first.
          <br />
          <span>Careers guaranteed.</span>
        </h1>

        <p className="subtitle">
          A placement-focused learning program built to get you hired.
        </p>

        <div className="highlights">
          <span>✔ 100% Placement-Focused Program</span>
          <span>✔ Industry-ready curriculum</span>
          <span>✔ Mentorship from working professionals</span>
        </div>

        
        <div className="stories-container">
          <div className="stories-track">
            {[...stories, ...stories].map((s, i) => (
              <div className="story-card" key={i}>
                <img className="avatar" alt={s.name} src={s.img}/>
                <div>
                  <div className="name">{s.name}</div>
                  <div className="role">
                    {s.role} · {s.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RIGHT ACTION */}
      <section className="login-right">
        <div className="login-card">
          <h2>Login/Sign in to Buhonox </h2>
          <p>Continue your career transformation</p>

          <label>Phone number</label>
          <div className="phone-input">
            <span className="code">+91</span>
            <input type="tel" placeholder="Mobile number" />
          </div>

         <button className="otp-button">Get Otp</button>

<div className="auth-divider">
  <span>New here?</span>
</div>

<div className="register-cta">
  Don’t have an account?
  <Link to="/register"><a href="/register">Register to start your learning journey</a></Link>
</div>

<div className="secure">We respect your privacy. No spam.</div>
</div>
      </section>
    </div>
  );
};

export default Login;
