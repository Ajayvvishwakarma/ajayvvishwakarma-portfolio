const skills = [
  {
    title: 'Frontend',
    items: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Responsive UI'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'Auth', 'Database Design'],
  },
  {
    title: 'Design & UX',
    items: ['Figma', 'UI Systems', 'Wireframing', 'Interaction Design', 'Branding'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Vite', 'Postman', 'VS Code', 'SEO Basics'],
  },
];

const projects = [
  {
    title: 'AI Commerce Dashboard',
    type: 'SaaS Product',
    description:
      'A modern analytics platform focused on conversion insights, product performance, and customer behavior tracking.',
    stack: ['React', 'Node', 'MongoDB', 'Charts'],
  },
  {
    title: 'Creative Portfolio Experience',
    type: 'Brand Website',
    description:
      'An immersive digital portfolio with elegant motion, scalable content blocks, and strong storytelling structure.',
    stack: ['React', 'CSS', 'Motion', 'UX'],
  },
  {
    title: 'Business Workflow App',
    type: 'Productivity Tool',
    description:
      'A task and workflow dashboard built for operational visibility, role-based views, and real-time updates.',
    stack: ['React', 'API', 'State Mgmt', 'UI Design'],
  },
];

const stats = [
  { value: '3+', label: 'Years building digital products' },
  { value: '12+', label: 'Projects shipped' },
  { value: '5+', label: 'Core technologies mastered' },
];

const process = [
  {
    title: 'Discover',
    text: 'I translate business needs into clear product goals, user flow, and valuable experiences.',
  },
  {
    title: 'Design',
    text: 'I craft refined interfaces with thoughtful structure, rhythm, and polished interaction details.',
  },
  {
    title: 'Develop',
    text: 'I build clean, scalable interfaces using modern React workflows and maintainable code patterns.',
  },
];

export default function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">AJ</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="nav-button">
          Let’s Talk
        </a>
      </header>

      <main>
        <section className="hero section">
          <div className="hero-copy">
            <span className="eyebrow">Full-Stack Developer & UI Enthusiast</span>
            <h1>
              Hi, I’m <span>Ajay Vishwakarma</span>
            </h1>
            <p>
              I design and build immersive web experiences that blend clean code, elegant UI,
              and strong product thinking.
            </p>
            <div className="actions">
              <a href="#projects" className="primary-btn">
                View Projects
              </a>
              <a href="mailto:ajayvishwakarma.dev@gmail.com" className="secondary-btn">
                Hire Me
              </a>
            </div>
            <div className="mini-row">
              <span>Available for freelance work</span>
              <span>•</span>
              <span>Based in India</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Portfolio showcase panel">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="glass-card main-card">
              <div className="card-topline">
                <span className="dot dot-pink" />
                <span className="dot dot-blue" />
                <span className="dot dot-green" />
              </div>
              <div className="card-content">
                <p>Creative build</p>
                <h3>Portfolio</h3>
                <div className="bars">
                  <span style={{ height: '35%' }} />
                  <span style={{ height: '52%' }} />
                  <span style={{ height: '74%' }} />
                  <span style={{ height: '90%' }} />
                  <span style={{ height: '68%' }} />
                </div>
              </div>
            </div>
            <div className="glass-card mini-card">
              <span>UX + Frontend</span>
              <strong>Modern & scalable</strong>
            </div>
          </div>
        </section>

        <section className="stats section">
          {stats.map((stat) => (
            <div className="stat-box" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section id="about" className="section about-block">
          <div className="section-heading">
            <span className="eyebrow">About Me</span>
            <h2>I build experiences that feel premium, useful, and memorable.</h2>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I’m a frontend-focused developer with a passion for product design, user-centered
                interfaces, and high-performing web apps. I enjoy turning ideas into polished digital
                experiences that look strong and work smoothly across devices.
              </p>
              <p>
                My approach combines visual design, clean architecture, and practical engineering so
                the final product is not only appealing but also fast, scalable, and maintainable.
              </p>
            </div>
            <div className="highlight-panel">
              <span>Core focus</span>
              <ul>
                <li>React & component-driven interfaces</li>
                <li>Modern UI systems and responsive design</li>
                <li>Conversion-focused experience design</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-block">
          <div className="section-heading">
            <span className="eyebrow">Skills</span>
            <h2>Tools and strengths that power modern products.</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skillGroup) => (
              <div className="skill-card" key={skillGroup.title}>
                <h3>{skillGroup.title}</h3>
                <ul>
                  {skillGroup.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <span className="eyebrow">Projects</span>
            <h2>Selected work with real product impact.</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-tag">{project.type}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section process-block">
          <div className="section-heading">
            <span className="eyebrow">Workflow</span>
            <h2>How I build digital products from idea to launch.</h2>
          </div>
          <div className="process-grid">
            {process.map((step, index) => (
              <div className="process-card" key={step.title}>
                <span className="step-number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="footer-top">
          <div>
            <span className="eyebrow">Let’s work together</span>
            <h2>Available for exciting product and design collaborations.</h2>
          </div>
          <a href="mailto:ajayvishwakarma.dev@gmail.com" className="primary-btn">
            ajayvishwakarma.dev@gmail.com
          </a>
        </div>
        <div className="footer-meta">
          <span>© 2026 Ajay Vishwakarma</span>
          <div className="socials">
            <a href="https://github.com/Ajayvvishwakarma" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
