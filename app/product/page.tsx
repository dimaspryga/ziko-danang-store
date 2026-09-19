'use client'

import { useMemo, useState } from "react"
import Link from "next/link"
import { products } from "../../lib/products"

const categories = ["All", "Stream Banner", "Thumbnail", "Branding", "Social Media", "Poster"]

export default function ProductPage() {
  const [category, setCategory] = useState("All")
  const [menuOpen, setMenuOpen] = useState(false)
  const [visible, setVisible] = useState(4)
  const filtered = useMemo(() => category === "All" ? products : products.filter((item) => item.category === category), [category])
  return <div className="site-shell product-shell"><div className="grain-overlay" />
    <header className="header"><Link className="logo" href="/">KARYA<span>*</span>STUDIO</Link>
    <nav className="product-nav" data-open={menuOpen} aria-label="Main navigation"><Link href="/product" className="mobile-product-link" onClick={() => setMenuOpen(false)}>Products <span>↗</span></Link><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link><Link href="/#about" onClick={() => setMenuOpen(false)}>About</Link><a href="https://wa.me/6281234567890" className="mobile-talk" onClick={() => setMenuOpen(false)}>Let&apos;s talk <span>↗</span></a></nav><div className="header-actions"><Link href="/product" className="product-nav-button active">Products <span>↗</span></Link><a href="https://wa.me/6281234567890" className="btn-cta header-cta">Let&apos;s talk <span>↗</span></a></div><button className="menu-toggle" type="button" aria-label="Toggle navigation menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}><span /><span /><span /></button></header>
    <main>
      <section className="product-hero"><p className="eyebrow">The collection / 2023—2025</p><h1 className="product-heading">ALL THE<br /><em>GOOD STUFF.</em></h1><p>Browse a mix of ready-made visual concepts and selected studio work. Find the one that feels like you.</p></section>
      <section className="catalog-section"><div className="filter-bar" aria-label="Filter products">{categories.map((item) => <button key={item} className={category === item ? "filter active" : "filter"} onClick={() => { setCategory(item); setVisible(4) }}>{item}</button>)}</div><div className="catalog-grid">{filtered.slice(0, visible).map((item, index) => <Link href={`/product/${item.id}`} className="catalog-card" key={item.id}><div className="catalog-image"><img src={item.image} alt={`${item.title} ${item.category}`} /><span>0{index + 1}</span></div><div className="catalog-meta"><div><h2>{item.title}</h2><p>{item.category}</p></div><strong>{item.price}</strong></div></Link>)}</div>{visible < filtered.length && <button className="view-more" onClick={() => setVisible((value) => value + 4)}>View more <span>↓</span></button>}</section>
    </main>
    <footer>
      <div className="footer-logo">KARYA<span>*</span>STUDIO</div><p>Good design, good energy.<br />© 2025 Karya Studio</p><div className="footer-links"><a href="https://instagram.com">Instagram</a><a href="https://behance.net">Behance</a></div>
    </footer>
  </div>
}

export { products }
