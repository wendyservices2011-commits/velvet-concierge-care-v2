"use client";
import { useState } from "react";
import Link from "next/link";

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="siteNav">
        <Link href="/" className="logo">
          <span>VELVET</span>
          <small>CONCIERGE CARE</small>
        </Link>
        <nav className="siteNavLinks">
          <Link href="/services">Services</Link>
          <Link href="/who-we-help">Who We Help</Link>
          <Link href="/about">About</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <Link href="/#contact" className="navCta">Schedule a Conversation</Link>
        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </header>
      {menuOpen && (
        <div className="mobileMenu">
          <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/who-we-help" onClick={() => setMenuOpen(false)}>Who We Help</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
          <Link href="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/#contact" className="mobileMenuCta" onClick={() => setMenuOpen(false)}>
            Schedule a Conversation
          </Link>
        </div>
      )}
    </>
  );
}
