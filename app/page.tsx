"use client"

import { useState } from "react"

const projects = [
  {
    title: "Neon Nights",
    type: "Stream Banner",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85",
    className: "tall",
  },
  {
    title: "Ruang Cerita",
    type: "YouTube Thumbnail",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1000&q=85",
    className: "wide",
  },
  {
    title: "After Hours",
    type: "Brand Identity",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1000&q=85",
    className: "standard",
  },
  {
    title: "Pixel Pop",
    type: "Social Media Kit",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=85",
    className: "standard",
  },
]

const services = ["Stream & gaming", "Creator branding", "Social media", "Campaign visuals"]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="site-shell">
      <div className="grain-overlay" />
      <header className="header">
        <a className="logo" href="#top" aria-label="Karya Studio home">KARYA<span>*</span>STUDIO</a>
        <nav data-open={menuOpen} aria-label="Main navigation">
          <a href="/product" className="mobile-product-link" onClick={() => setMenuOpen(false)}>Products <span>↗</span></a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" className="mobile-talk" onClick={() => setMenuOpen(false)}>Let&apos;s talk <span>↗</span></a>
        </nav>
        <div className="header-actions"><a href="/product" className="product-nav-button">Products <span>↗</span></a><a href="#contact" className="btn-cta header-cta">Let&apos;s talk <span>↗</span></a></div>
        <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /><span /></button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">Independent design studio · Jakarta</p>
            <h1 className="hero-title">MAKE IT <em>POP.</em></h1>
            <p className="hero-copy">Visuals for creators, brands, and ideas that refuse to blend in. We make good things look unforgettable.</p>
            <div className="hero-actions">
              <div className="hero-cta-row"><a href="#work" className="btn-cta btn-orange">See our work <span>↓</span></a><a href="/product" className="product-nav-button hero-product-button">Products <span>↗</span></a></div>
              <span className="availability"><i /> Available for new projects</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Colorful abstract studio artwork">
            <div className="sun-shape" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="pink-star">✦</div>
            <div className="art-card">
              <span>DESIGN<br />WITH<br /><b>FEELING</b></span>
            </div>
            <div className="sticker">GOOD<br />VIBES<br /><small>ONLY</small></div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true"><div className="marquee-content">✦ DESIGN THAT HITS DIFFERENT &nbsp; ✦ VISUALS WITH A POINT OF VIEW &nbsp; ✦ DESIGN THAT HITS DIFFERENT &nbsp; ✦ VISUALS WITH A POINT OF VIEW &nbsp;</div></div>

        <section id="work" className="section-padding work-section">
          <div className="section-header"><div><p className="eyebrow">Selected work / 2023—2025</p><h2 className="section-title">THE GOOD<br /><em>STUFF.</em></h2></div><p className="section-note">A little collection of things we&apos;ve made for people doing cool things.</p></div>
          <div className="work-grid">
            {projects.map((project, index) => <a href={`/product/${project.title.toLowerCase().replaceAll(" ", "-")}`} className={`project-card ${project.className}`} key={project.title}><div className="project-image"><img src={project.image} alt={`${project.title} ${project.type} project`} /><span className="project-number">0{index + 1}</span></div><div className="project-meta"><h3>{project.title}</h3><span>{project.type} ↗</span></div></a>)}
          </div>
        </section>

        <section id="services" className="services-section">
          <div className="services-intro"><p className="eyebrow">What we do</p><h2 className="section-title">BUILT FOR<br /><em>ATTENTION.</em></h2></div>
          <div className="service-list">{services.map((service, index) => <a href="#contact" className="service-row" key={service}><span>0{index + 1}</span><strong>{service}</strong><b>↗</b></a>)}</div>
        </section>

        <section id="about" className="about-section"><div className="about-mark">K<span>*</span></div><div><p className="eyebrow">A small studio with big energy</p><h2 className="about-title">WE BELIEVE<br />BORING IS A<br /><em>CHOICE.</em></h2><p className="about-copy">Karya is a design studio for the internet age. We mix sharp strategy, loud color, and a little bit of chaos to help your brand find its people.</p><a href="#contact" className="text-link">More about us →</a></div></section>

        <section id="contact" className="contact-section"><p className="eyebrow">Have a project in mind?</p><h2 className="contact-title">LET&apos;S MAKE<br /><em>SOMETHING.</em></h2><a className="contact-email" href="mailto:hello@karyastudio.id">hello@karyastudio.id ↗</a></section>
      </main>

      <footer><div className="footer-logo">KARYA<span>*</span>STUDIO</div><p>Good design, good energy.<br />© 2025 Karya Studio</p><div className="footer-links"><a href="#top">Instagram</a><a href="#top">Behance</a><a href="#top">Back to top ↑</a></div></footer>
    </div>
  )
}
