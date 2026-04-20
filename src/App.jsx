export default function QuanPortfolioSite() {
  const projects = [
    {
      title: "Smart Chess Board",
      period: "March 2025 – Present",
      summary:
        "A hardware-software project that detects chess piece locations using reed switches and gives real-time visual feedback with LEDs.",
      details:
        "I designed and simulated the detection circuit, connected the board logic to Raspberry Pi GPIO, tested the prototype in the lab, and created the PCB layout in KiCad. This project helped me grow in circuit design, PCB layout, GPIO interfacing, and full system integration.",
      impact:
        "Projects like this show how embedded systems can be used in education, interactive devices, and smart products that combine sensing with user feedback."
    },
    {
      title: "Dielectric Oil Tank Temperature Monitoring",
      period: "May 2025 – August 2025",
      summary:
        "A monitoring system for server, VM, and sensor data with a dashboard for easier observation and maintenance.",
      details:
        "I developed C programs to monitor metrics such as CPU, RAM, disk, and temperature, built backend APIs using Flask and FastAPI, connected MongoDB, and helped create a responsive dashboard. I also automated Linux deployment using systemd and Bash scripts.",
      impact:
        "Monitoring systems like this matter in data centers and industrial settings because they improve reliability, safety, and maintenance efficiency."
    },
    {
      title: "Smart Robot Car",
      period: "March 2025 – Present",
      summary:
        "An embedded systems project focused on robot movement, sensing, and real-time control.",
      details:
        "I configured TM4C123GH6PM registers for digital I/O, programmed UART communication for monitoring and control, studied datasheets to build correct firmware, and implemented logic for object tracking, collision detection, and obstacle avoidance.",
      impact:
        "This type of work connects directly to robotics, automation, autonomous navigation, and intelligent control systems."
    }
  ];

  const navItems = [
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  const contacts = [
    {
      label: "Email",
      value: "Sofh1725@gmail.com",
      href: "mailto:Sofh1725@gmail.com"
    },
    {
      label: "GitHub",
      value: "Nguyen-Nhut-Minh-Quan",
      href: "https://github.com/Nguyen-Nhut-Minh-Quan"
    },
    {
      label: "LinkedIn",
      value: "nguyễn-quân-82b4a5277",
      href: "https://www.linkedin.com/in/nguy%E1%BB%85n-qu%C3%A2n-82b4a5277/"
    }
  ];

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          font-family: Inter, Arial, Helvetica, sans-serif;
          background: #020617;
          color: #e2e8f0;
        }
        a { color: inherit; text-decoration: none; }

        .site {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(34,211,238,0.12), transparent 28%),
            radial-gradient(circle at 85% 15%, rgba(96,165,250,0.11), transparent 26%),
            linear-gradient(180deg, #020617 0%, #071226 100%);
        }

        .container {
          width: min(1140px, calc(100% - 40px));
          margin: 0 auto;
        }

        .header {
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(14px);
          background: rgba(2, 6, 23, 0.74);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .header-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 0;
        }

        .brand {
          font-size: 1.1rem;
          font-weight: 800;
          letter-spacing: 0.03em;
          color: #f8fafc;
        }

        .nav {
          display: flex;
          gap: 24px;
          color: #cbd5e1;
          font-size: 0.97rem;
        }

        .nav a {
          position: relative;
          transition: color 0.25s ease;
        }

        .nav a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 100%;
          height: 2px;
          border-radius: 999px;
          background: #67e8f9;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }

        .nav a:hover {
          color: #67e8f9;
        }

        .nav a:hover::after {
          transform: scaleX(1);
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 48px 0 72px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 42px;
          align-items: center;
        }

        .eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.32em;
          color: #67e8f9;
          font-size: 0.78rem;
          margin-bottom: 16px;
        }

        .hero h1 {
          font-size: clamp(2.9rem, 5vw, 5.1rem);
          line-height: 0.96;
          margin: 0;
          color: #ffffff;
          max-width: 760px;
          text-wrap: balance;
        }

        .hero p {
          color: #cbd5e1;
          font-size: 1.08rem;
          line-height: 1.85;
          max-width: 690px;
          margin-top: 24px;
        }

        .button-row {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 30px;
          justify-content: center;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 22px;
          border-radius: 999px;
          font-weight: 700;
          transition: transform 0.25s ease, border-color 0.25s ease, color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
        }

        .btn-primary {
          background: linear-gradient(135deg, #22d3ee, #60a5fa);
          color: #082f49;
          box-shadow: 0 10px 24px rgba(34, 211, 238, 0.18);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(34, 211, 238, 0.24);
        }

        .btn-secondary {
          border: 1px solid rgba(255,255,255,0.16);
          color: #e2e8f0;
          background: rgba(255,255,255,0.04);
        }

        .btn-secondary:hover {
          border-color: rgba(103,232,249,0.7);
          color: #67e8f9;
          transform: translateY(-2px);
        }

        .hero-card {
          background: linear-gradient(180deg, rgba(15,23,42,0.85), rgba(15,23,42,0.55));
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 32px;
          padding: 28px;
          box-shadow: 0 24px 50px rgba(0,0,0,0.34);
          backdrop-filter: blur(12px);
          animation: floatSlow 6s ease-in-out infinite;
        }

        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .mini-card {
          border-radius: 22px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 18px;
        }

        .mini-label {
          color: #94a3b8;
          font-size: 0.9rem;
        }

        .mini-value {
          margin-top: 8px;
          font-weight: 700;
          color: white;
          line-height: 1.4;
        }

        .section {
          padding: 96px 0;
        }

        .section-head {
          margin-bottom: 28px;
        }

        .section-tag {
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: #67e8f9;
          font-size: 0.78rem;
          margin-bottom: 10px;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3.4rem);
          margin: 0;
          color: #ffffff;
          text-wrap: balance;
        }

        .surface {
          background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(241,245,249,0.96));
          color: #0f172a;
          border-radius: 30px;
          padding: 30px;
          border: 1px solid rgba(255,255,255,0.3);
          box-shadow: 0 16px 42px rgba(0,0,0,0.22);
        }

        .surface p {
          font-size: 1.04rem;
          line-height: 1.9;
          margin: 0 0 16px 0;
        }

        .two-col {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 24px;
          align-items: stretch;
        }

        .surface h3 {
          margin-top: 0;
          margin-bottom: 16px;
          font-size: 1.55rem;
        }

        .surface ul {
          margin: 0;
          padding-left: 22px;
          line-height: 1.9;
        }

        .resume-card {
          background: linear-gradient(145deg, rgba(16,185,129,0.08), rgba(34,211,238,0.12), rgba(96,165,250,0.12));
          color: #e2e8f0;
          border-radius: 30px;
          padding: 30px;
          border: 1px solid rgba(103,232,249,0.18);
          box-shadow: 0 16px 42px rgba(0,0,0,0.24);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          text-align: center;
          min-height: 100%;
        }

        .resume-card h3 {
          margin: 0 0 14px 0;
          color: white;
          font-size: 1.55rem;
        }

        .resume-card p {
          margin: 0;
          color: #cbd5e1;
          line-height: 1.9;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .project-card {
          background: linear-gradient(180deg, rgba(15,23,42,0.72), rgba(15,23,42,0.55));
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 28px;
          padding: 24px;
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          min-height: 100%;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.35);
          border-color: rgba(103,232,249,0.35);
        }

        .project-period {
          color: #67e8f9;
          font-size: 0.9rem;
        }

        .project-card h3 {
          margin: 12px 0 0 0;
          font-size: 1.55rem;
          color: white;
        }

        .project-card p {
          color: #cbd5e1;
          line-height: 1.82;
        }

        .impact {
          margin-top: 18px;
          padding-top: 18px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .impact-label {
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 0.75rem;
        }

        .contact-box {
          border-radius: 34px;
          padding: 34px;
          background: linear-gradient(135deg, rgba(8,47,73,0.85), rgba(14,116,144,0.58));
          border: 1px solid rgba(103,232,249,0.2);
          box-shadow: 0 20px 50px rgba(0,0,0,0.28);
          text-align: center;
        }

        .contact-copy {
          color: #cbd5e1;
          line-height: 1.9;
          max-width: 760px;
          margin: 10px auto 0;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 28px;
        }

        .contact-link {
          display: block;
          padding: 18px 20px;
          border-radius: 22px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.1);
          transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
        }

        .contact-link:hover {
          transform: translateY(-4px);
          border-color: rgba(103,232,249,0.55);
          background: rgba(255,255,255,0.12);
        }

        .contact-label {
          color: #94a3b8;
          font-size: 0.84rem;
          text-transform: uppercase;
          letter-spacing: 0.18em;
        }

        .contact-value {
          margin-top: 10px;
          color: #ffffff;
          font-size: 1rem;
          line-height: 1.5;
          word-break: break-word;
        }

        .fade-up { animation: fadeUp 0.8s ease both; }
        .delay-1 { animation-delay: 0.12s; }
        .delay-2 { animation-delay: 0.24s; }
        .delay-3 { animation-delay: 0.36s; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @media (max-width: 950px) {
          .hero-grid,
          .two-col,
          .projects-grid,
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .header-inner {
            flex-direction: column;
            gap: 12px;
          }

          .hero {
            padding-top: 28px;
          }
        }

        @media (max-width: 640px) {
          .container { width: min(100% - 24px, 1140px); }
          .section { padding: 72px 0; }
          .hero h1 { font-size: 2.55rem; }
          .info-grid { grid-template-columns: 1fr; }
          .btn { width: 100%; }
          .button-row { flex-direction: column; }
          .nav { flex-wrap: wrap; justify-content: center; gap: 14px; }
        }
      `}</style>

      <div className="site">
        <header className="header">
          <div className="container header-inner">
            <a href="#hero" className="brand">Quan Nguyen</a>
            <nav className="nav">
              {navItems.map((item) => (
                <a key={item.id} href={`#${item.id}`}>{item.label}</a>
              ))}
            </nav>
          </div>
        </header>

        <section id="hero" className="hero">
          <div className="container hero-grid">
            <div className="fade-up">
              <div className="eyebrow">Portfolio Website</div>
              <h1>Computer Engineering Student Building Practical Hardware + Software Systems</h1>
              <p>
                I’m Quan Nguyen, a Computer Engineering student at Iowa State University interested in embedded systems,
                automation, backend development, and hardware-software integration.
              </p>
              <div className="button-row">
                <a href="#projects" className="btn btn-primary">View Projects</a>
                <a href="#resume" className="btn btn-secondary">Resume Section</a>
              </div>
            </div>

            <div className="hero-card fade-up delay-1">
              <div className="info-grid">
                <div className="mini-card">
                  <div className="mini-label">School</div>
                  <div className="mini-value">Iowa State University</div>
                </div>
                <div className="mini-card">
                  <div className="mini-label">Major</div>
                  <div className="mini-value">Computer Engineering</div>
                </div>
                <div className="mini-card">
                  <div className="mini-label">Interests</div>
                  <div className="mini-value">Embedded Systems</div>
                </div>
                <div className="mini-card">
                  <div className="mini-label">Focus</div>
                  <div className="mini-value">Hardware + Software</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="section-head fade-up">
              <div className="section-tag">About Me</div>
              <h2 className="section-title">A little about who I am</h2>
            </div>
            <div className="surface fade-up delay-1">
              <p>
                Hello, my name is <strong>Quan Nguyen</strong>, and I am a Computer Engineering student at Iowa State University.
                I enjoy building systems that connect software and hardware, especially projects involving embedded systems,
                sensors, circuit design, and backend development.
              </p>
              <p>
                Through coursework, research, and personal projects, I have developed experience in Python, C, MATLAB,
                Verilog, Linux, PCB design, microcontroller programming, and engineering problem solving. I am especially
                interested in practical designs that can be tested, improved, and applied outside the classroom.
              </p>
            </div>
          </div>
        </section>

        <section id="resume" className="section">
          <div className="container">
            <div className="section-head fade-up">
              <div className="section-tag">Resume</div>
              <h2 className="section-title">Experience, skills, and background</h2>
            </div>
            <div className="two-col">
              <div className="surface fade-up delay-1">
                <h3>Highlights</h3>
                <ul>
                  <li>Computer Engineering student at Iowa State University</li>
                  <li>Experience in embedded systems, backend development, and circuit design</li>
                  <li>Worked with Python, C, C++, MATLAB, Verilog, SQL, Linux, and microcontrollers</li>
                  <li>Research and internship experience involving monitoring systems and data analysis</li>
                </ul>
              </div>
              <div className="resume-card fade-up delay-2">
                <div>
                  <h3>Resume PDF</h3>
                  <p>
                    Open my full resume to see my education, skills, research experience, internship work, and engineering projects.
                  </p>
                </div>
                <div className="button-row" style={{ justifyContent: 'center', width: '100%' }}>
                  <a href={`${import.meta.env.BASE_URL}Resume.pdf`} target="_blank" rel="noreferrer" className="btn btn-primary">
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="section-head fade-up">
              <div className="section-tag">Projects</div>
              <h2 className="section-title">Work explained in plain language</h2>
            </div>
            <div className="projects-grid">
              {projects.map((project, idx) => (
                <article key={project.title} className={`project-card fade-up delay-${idx + 1}`}>
                  <div className="project-period">{project.period}</div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <p>{project.details}</p>
                  <div className="impact">
                    <div className="impact-label">Why it matters</div>
                    <p>{project.impact}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <div className="contact-box fade-up">
              <div className="section-tag">Contact</div>
              <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)' }}>Let’s connect</h2>
              <p className="contact-copy">
                Here are the best ways to reach me or view my professional profiles.
              </p>
              <div className="contact-grid">
                {contacts.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={contact.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                    className="contact-link"
                  >
                    <div className="contact-label">{contact.label}</div>
                    <div className="contact-value">{contact.value}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
