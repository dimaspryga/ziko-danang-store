import Link from "next/link"
import { notFound } from "next/navigation"
import { products } from "../../../lib/products"

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = products.find((item) => item.id === id)
  if (!product) notFound()
  return <div className="site-shell product-shell"><div className="grain-overlay" /><header className="header"><Link className="logo" href="/">KARYA<span>*</span>STUDIO</Link><nav aria-label="Main navigation"><Link href="/">Home</Link><Link href="/product">Products</Link><Link href="/#about">About</Link></nav><a href="https://wa.me/6281234567890" className="btn-cta">Let&apos;s talk <span>↗</span></a></header><main><div className="detail-wrap"><Link href="/product" className="back-link">← Back to products</Link><div className="detail-grid"><div className="detail-image"><img src={product.image} alt={`${product.title} detail`} /></div><div className="detail-copy"><p className="eyebrow">{product.category} / Karya Studio</p><h1>{product.title}</h1><p className="detail-description">{product.description} Kami bisa menyesuaikan warna, ukuran, dan detail sesuai kebutuhan brand kamu.</p><div className="detail-price">{product.price}<small>starting from</small></div><div className="detail-actions"><a className="btn-cta btn-orange" href="https://wa.me/6281234567890">Order via WhatsApp <span>↗</span></a><a className="discord-link" href="https://discord.com">Chat on Discord ↗</a></div><div className="detail-note"><strong>What&apos;s included</strong><span>Creative direction · 2 revisions · Final files ready to use</span></div></div></div></div></main><footer><div className="footer-logo">KARYA<span>*</span>STUDIO</div><p>Good design, good energy.<br />© 2025 Karya Studio</p><div className="footer-links"><Link href="/product">All products</Link><a href="https://instagram.com">Instagram</a></div></footer></div>
}
