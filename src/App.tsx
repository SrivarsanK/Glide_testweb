import { useState } from 'react'
import './App.css'

// ── Simple child components ─────────────────────────────────────────
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-icon">◈</span>
        <span className="brand-name">GlideTest</span>
      </div>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="btn-primary">Get Started</button>
    </nav>
  )
}

function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-badge">🚀 Visual Design, Powered by Code</div>
      <h1 className="hero-title">
        Build <span className="highlight">Faster</span> with Glide
      </h1>
      <p className="hero-sub">
        A code-native visual workspace that lets you design and edit components
        directly inside your development environment.
      </p>
      <div className="hero-actions">
        <button className="btn-primary">Start Designing</button>
        <button className="btn-ghost">View Docs</button>
      </div>
      <div className="hero-stats">
        <div className="stat">
          <span className="stat-value">10x</span>
          <span className="stat-label">Faster iterations</span>
        </div>
        <div className="stat">
          <span className="stat-value">0px</span>
          <span className="stat-label">Design drift</span>
        </div>
        <div className="stat">
          <span className="stat-value">100%</span>
          <span className="stat-label">Code-first</span>
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  tag: string
}

function FeatureCard({ icon, title, description, tag }: FeatureCardProps) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <span className="feature-tag">{tag}</span>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-desc">{description}</p>
    </div>
  )
}

function FeaturesSection() {
  const features = [
    {
      icon: '🎯',
      title: 'Element Detection',
      description: 'Click any element to instantly detect its source file, line number, and column. Edit directly from the canvas.',
      tag: 'Core',
    },
    {
      icon: '📐',
      title: 'Layer Hierarchy',
      description: 'Full nested layers panel showing every JSX node — organized just like Figma, backed by your real source code.',
      tag: 'UI',
    },
    {
      icon: '✏️',
      title: 'Live Class Editing',
      description: 'Drag resize handles or type class names. Changes write back to your TypeScript source files instantly.',
      tag: 'Editor',
    },
    {
      icon: '🔌',
      title: 'Zero Config',
      description: 'Add the Vite plugin and run npx glide. No runtime overhead in production builds.',
      tag: 'DX',
    },
    {
      icon: '🧩',
      title: 'Framework Agnostic',
      description: 'Works with React, Astro, Vue JSX, Svelte. Any framework that processes JSX/TSX source.',
      tag: 'Compat',
    },
    {
      icon: '⚡',
      title: 'WebSocket Sync',
      description: 'Bi-directional WebSocket channel keeps canvas, layers panel, and source files in perfect sync.',
      tag: 'Sync',
    },
  ]

  return (
    <section id="features" className="features-section">
      <div className="section-header">
        <span className="section-label">Features</span>
        <h2 className="section-title">Everything you need</h2>
        <p className="section-sub">Built for developers who love their code editors.</p>
      </div>
      <div className="features-grid">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  )
}

function TeamSection() {
  const members = [
    { name: 'Srivarsan K', role: 'Lead Developer', avatar: '👨‍💻', tag: 'Core Team' },
    { name: 'Glide Bot', role: 'Plugin Engine', avatar: '🤖', tag: 'AI' },
    { name: 'Canvas UI', role: 'Design System', avatar: '🎨', tag: 'Design' },
  ]

  return (
    <section id="team" className="team-section">
      <div className="section-header">
        <span className="section-label">Team</span>
        <h2 className="section-title">Behind Glide</h2>
      </div>
      <div className="team-grid">
        {members.map((m) => (
          <div key={m.name} className="team-card">
            <div className="member-avatar">{m.avatar}</div>
            <span className="member-tag">{m.tag}</span>
            <h3 className="member-name">{m.name}</h3>
            <p className="member-role">{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <span className="section-label">Contact</span>
        <h2 className="section-title">Get in touch</h2>
        <p className="section-sub">Have feedback? We'd love to hear from you.</p>
      </div>
      {submitted ? (
        <div className="form-success">
          <span>✅</span>
          <p>Thanks! We'll be in touch.</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}>
          <div className="form-row">
            <input type="text" placeholder="Your name" required className="form-input" />
            <input type="email" placeholder="Email address" required className="form-input" />
          </div>
          <textarea placeholder="Your message..." rows={4} className="form-textarea" />
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      )}
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <span className="brand-icon">◈</span>
        <span className="brand-name">Glide</span>
      </div>
      <p className="footer-copy">© 2026 Srivarsan K. MIT License.</p>
      <div className="footer-links">
        <a href="https://github.com/SrivarsanK/Glide_testweb" target="_blank">GitHub</a>
        <a href="#features">Features</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  )
}

// ── Root ────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
