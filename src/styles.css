:root {
  --bg: #07111f;
  --bg-soft: #0d1a2b;
  --panel: rgba(15, 23, 42, 0.9);
  --panel-border: rgba(148, 163, 184, 0.2);
  --text: #e5eefb;
  --muted: #a2b3c9;
  --primary: #7c3aed;
  --secondary: #22d3ee;
  --accent: #f472b6;
  --shadow: 0 30px 80px rgba(15, 23, 42, 0.55);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top left, rgba(124, 58, 237, 0.28), transparent 28%),
    radial-gradient(circle at bottom right, rgba(34, 211, 238, 0.16), transparent 22%),
    var(--bg);
  color: var(--text);
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea,
select {
  font: inherit;
}

#root {
  width: 100%;
}

.page-shell {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
  padding: 24px 0 48px;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 24px;
  border: 1px solid var(--panel-border);
  border-radius: 18px;
  background: rgba(9, 15, 29, 0.72);
  backdrop-filter: blur(18px);
  box-shadow: 0 12px 32px rgba(3, 8, 20, 0.38);
}

.brand {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  font-weight: 800;
}

.nav {
  display: flex;
  align-items: center;
  gap: 26px;
  color: var(--muted);
  font-size: 0.95rem;
}

.nav a {
  transition: color 0.2s ease;
}

.nav a:hover {
  color: var(--text);
}

.nav-button,
.primary-btn,
.secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.nav-button,
.primary-btn {
  padding: 0.9rem 1.35rem;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--primary), #9b5cf2 45%, var(--secondary));
  color: white;
  font-weight: 600;
  box-shadow: 0 16px 32px rgba(124, 58, 237, 0.35);
}

.secondary-btn {
  padding: 0.85rem 1.3rem;
  border: 1px solid var(--panel-border);
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.04);
  color: var(--text);
}

.nav-button:hover,
.primary-btn:hover,
.secondary-btn:hover {
  transform: translateY(-2px);
}

.section {
  padding-top: 72px;
}

.hero {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 40px;
  min-height: 620px;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 16px;
  color: #bca6ff;
  letter-spacing: 0.08em;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2.8rem, 5vw, 5rem);
  line-height: 0.98;
  letter-spacing: -0.06em;
}

.hero-copy h1 span {
  background: linear-gradient(135deg, #c4b5fd 0%, #7dd3fc 45%, #f9a8d4 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-copy p {
  max-width: 620px;
  margin: 20px 0 0;
  color: var(--muted);
  font-size: 1.1rem;
  line-height: 1.8;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 30px;
}

.mini-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
  color: var(--muted);
  font-size: 0.95rem;
}

.hero-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 480px;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(10px);
}

.orb-one {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.72), rgba(124, 58, 237, 0.06) 55%, transparent 70%);
  top: 10%;
  left: 15%;
}

.orb-two {
  width: 240px;
  height: 240px;
  background: radial-gradient(circle, rgba(34, 211, 238, 0.52), rgba(34, 211, 238, 0.05) 60%, transparent 75%);
  right: 12%;
  bottom: 12%;
}

.glass-card {
  position: relative;
  z-index: 1;
  border: 1px solid rgba(148, 163, 184, 0.2);
  background: rgba(9, 16, 30, 0.76);
  backdrop-filter: blur(24px);
  box-shadow: var(--shadow);
}

.main-card {
  width: min(420px, 88%);
  padding: 18px 18px 14px;
  border-radius: 25px;
  transform: rotate(-8deg);
}

.mini-card {
  position: absolute;
  right: 0;
  bottom: 38px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 18px 20px;
  border-radius: 18px;
  transform: rotate(8deg);
  color: var(--muted);
}

.mini-card strong {
  color: var(--text);
  font-size: 1.05rem;
}

.card-topline {
  display: flex;
  gap: 8px;
  margin-bottom: 26px;
}

.dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot-pink {
  background: #f472b6;
}

.dot-blue {
  background: #60a5fa;
}

.dot-green {
  background: #34d399;
}

.card-content p {
  margin: 0;
  color: var(--muted);
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.card-content h3 {
  margin: 14px 0 18px;
  font-size: clamp(2.2rem, 4vw, 3rem);
  letter-spacing: -0.06em;
}

.bars {
  display: flex;
  align-items: flex-end;
  gap: 12px;
  height: 110px;
  padding: 18px 10px 0;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.2));
}

.bars span {
  display: block;
  flex: 1;
  border-radius: 999px 999px 0 0;
  background: linear-gradient(180deg, #c4b5fd 0%, #60a5fa 45%, #22d3ee 100%);
  box-shadow: 0 10px 22px rgba(96, 165, 250, 0.38);
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(160px, 1fr));
  gap: 18px;
}

.stat-box {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 28px 22px;
  border: 1px solid var(--panel-border);
  border-radius: 20px;
  background: rgba(15, 23, 42, 0.48);
}

.stat-box strong {
  font-size: clamp(1.8rem, 4vw, 2.7rem);
  letter-spacing: -0.06em;
}

.stat-box span {
  color: var(--muted);
  line-height: 1.6;
}

.section-heading {
  max-width: 720px;
  margin-bottom: 26px;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(2rem, 3.1vw, 3rem);
  line-height: 1.1;
  letter-spacing: -0.05em;
}

.about-grid,
.skills-grid,
.projects-grid,
.process-grid {
  display: grid;
  gap: 22px;
}

.about-grid {
  grid-template-columns: 1.2fr 0.8fr;
  align-items: stretch;
}

.about-text,
.highlight-panel,
.skill-card,
.project-card,
.process-card {
  border: 1px solid var(--panel-border);
  border-radius: 22px;
  background: rgba(15, 23, 42, 0.48);
}

.about-text {
  padding: 30px;
}

.about-text p {
  margin: 0;
  color: var(--muted);
  line-height: 1.9;
  font-size: 1.02rem;
}

.about-text p + p {
  margin-top: 20px;
}

.highlight-panel {
  padding: 30px 28px;
}

.highlight-panel span {
  color: #c4b5fd;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.highlight-panel ul {
  margin: 20px 0 0;
  padding-left: 18px;
  color: var(--muted);
  line-height: 1.9;
}

.skills-grid {
  grid-template-columns: repeat(4, minmax(180px, 1fr));
}

.skill-card {
  padding: 26px 22px;
}

.skill-card h3 {
  margin: 0 0 18px;
  font-size: 1.3rem;
}

.skill-card ul {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
  line-height: 2;
}

.projects-grid {
  grid-template-columns: repeat(3, minmax(220px, 1fr));
}

.project-card {
  padding: 24px 22px;
}

.project-tag {
  display: inline-flex;
  margin-bottom: 14px;
  padding: 0.45rem 0.7rem;
  border-radius: 999px;
  background: rgba(124, 58, 237, 0.16);
  color: #d8c7ff;
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.project-card h3 {
  margin: 0;
  font-size: 1.5rem;
  letter-spacing: -0.04em;
}

.project-card p {
  margin: 16px 0 0;
  color: var(--muted);
  line-height: 1.8;
}

.project-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.project-stack span {
  display: inline-flex;
  padding: 0.5rem 0.72rem;
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.04);
  color: var(--text);
  font-size: 0.8rem;
}

.process-grid {
  grid-template-columns: repeat(3, minmax(200px, 1fr));
}

.process-card {
  padding: 24px 22px;
}

.step-number {
  display: inline-flex;
  margin-bottom: 18px;
  color: #9ad7ff;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.process-card h3 {
  margin: 0 0 14px;
  font-size: 1.4rem;
}

.process-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.8;
}

.footer {
  padding-top: 84px;
}

.footer-top {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
  padding: 30px 0 18px;
  border-top: 1px solid var(--panel-border);
}

.footer-top h2 {
  max-width: 640px;
  margin: 0;
  font-size: clamp(2rem, 3vw, 2.7rem);
  line-height: 1.1;
  letter-spacing: -0.05em;
}

.footer-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 20px 0 0;
  color: var(--muted);
}

.socials {
  display: flex;
  gap: 20px;
}

@media (max-width: 960px) {
  .hero,
  .about-grid {
    grid-template-columns: 1fr;
  }

  .skills-grid,
  .projects-grid,
  .process-grid {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }

  .footer-top {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 720px) {
  .page-shell {
    width: min(100% - 20px, 1200px);
  }

  .topbar {
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav {
    flex-wrap: wrap;
    justify-content: center;
  }

  .stats,
  .skills-grid,
  .projects-grid,
  .process-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    min-height: auto;
    padding-top: 52px;
  }

  .hero-copy h1 {
    letter-spacing: -0.05em;
  }

  .mini-card {
    position: relative;
    right: auto;
    bottom: auto;
    margin-top: 20px;
    transform: none;
  }

  .main-card {
    transform: none;
  }

  .footer-meta {
    flex-direction: column;
    align-items: flex-start;
  }
}
