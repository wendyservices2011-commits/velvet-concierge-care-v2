"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>

      {/* ── Navigation — dark text on ivory ───────── */}
      <header className="nav">
        <div className="logo">
          <span>VELVET</span>
          <small>CONCIERGE CARE</small>
        </div>
        <nav>
          <Link href="/services">Services</Link>
          <Link href="/who-we-help">Who We Help</Link>
          <Link href="/about">About</Link>
          <Link href="/faq">FAQ</Link>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="navCta">Schedule a Conversation</a>
        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        ><span /><span /><span /></button>
      </header>

      {menuOpen && (
        <div className="mobileMenu">
          <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/who-we-help" onClick={() => setMenuOpen(false)}>Who We Help</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="#contact" className="mobileMenuCta" onClick={() => setMenuOpen(false)}>
            Schedule a Conversation
          </a>
        </div>
      )}

      {/* ── Hero — split: warm ivory left, clean photo right ── */}
      <section className="hero">
        <div className="heroLeft">
          <p className="heroEyebrow">Private Duty Nursing · Palm Beach County</p>
          <h1>
            The comfort of home.<br />
            The confidence of{" "}
            <em>nursing expertise.</em>
          </h1>
          <p>
            Private in-home nursing care and lifestyle support
            for older adults and the families who love them.
          </p>
          <a href="#contact" className="goldButton">
            Schedule a Conversation <span>→</span>
          </a>
        </div>
        <div className="heroRight" />
      </section>

      {/* ── Three truths — editorial, no boxes ────── */}
      <section className="intro">
        <div className="introItem">
          <span className="num">01</span>
          <h3>One nurse.<br />One family.</h3>
          <p>Not a rotating roster of aides. One Registered Nurse who knows your loved one, builds real trust, and shows up with clinical competence every time.</p>
        </div>

        <div className="introItem">
          <span className="num">02</span>
          <h3>Clinical care and daily life.</h3>
          <p>From wound care and medication management to grocery runs and appointment accompaniment — everything your family needs, under one arrangement.</p>
        </div>

        <div className="introItem">
          <span className="num">03</span>
          <h3>Private pay.<br />No limits.</h3>
          <p>No insurance constraints. No agency schedules. Care designed entirely around your loved one's needs — for as long as you need it.</p>
        </div>
      </section>

      {/* ── Pull quote — elegant, light ────────────── */}
      <div className="pullQuoteWrap">
        <div className="pullQuoteInner">
          <span className="mark">&ldquo;</span>
          <p>
            We believe peace of mind begins with knowing someone thoughtful,
            capable, and attentive is there when your family needs support.
          </p>
          <cite>— The Velvet Concierge Care Team</cite>
        </div>
      </div>

      {/* ── Photo — clean, no overlay ──────────────── */}
      <div className="photoFull" />

      {/* ── Difference — editorial two-column ─────── */}
      <section id="services" className="difference">
        <div className="differenceLeft">
          <span className="eyebrowLabel">The Velvet Difference</span>
          <h2>
            Why families
            choose us
            over an agency.
          </h2>
        </div>

        <div className="differenceRight">
          <div className="differenceItem">
            <span className="itemNum">01</span>
            <div>
              <h3>RN-Led Oversight</h3>
              <p>Registered Nurse expertise guiding every care plan and clinical decision. Not an aide. Not a coordinator. A nurse.</p>
            </div>
          </div>

          <div className="differenceItem">
            <span className="itemNum">02</span>
            <div>
              <h3>Personalized Support</h3>
              <p>Care built around your loved one's actual life — their preferences, their routines, their goals — not a standardized care plan.</p>
            </div>
          </div>

          <div className="differenceItem">
            <span className="itemNum">03</span>
            <div>
              <h3>Clear Communication</h3>
              <p>Regular, honest updates so families near and far always know what's happening. You shouldn't have to ask.</p>
            </div>
          </div>

          <div className="differenceItem">
            <span className="itemNum">04</span>
            <div>
              <h3>No Agency Limitations</h3>
              <p>Private pay means no insurance-imposed visit limits, no rigid schedules, no strangers rotating through. One nurse, your family, your terms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact — clean close ──────────────────── */}
      <section id="contact" className="contactSection">
        <div className="dividerLine" />
        <h2>
          Let's talk about<br />
          <em>how we can help.</em>
        </h2>
        <p>Every family's situation is different. We'd love to learn about yours.</p>
        <a href="tel:8435327181" className="darkButton">
          Schedule a Conversation <span>→</span>
        </a>
      </section>

      {/* ── Footer ────────────────────────────────── */}
      <footer>
        <div className="footerLogo">
          <span>VELVET</span>
          <small>CONCIERGE CARE</small>
          <p>Exceptional care, right at home.</p>
        </div>
        <div className="footerLinks">
          <Link href="/services">Services</Link>
          <Link href="/who-we-help">Who We Help</Link>
          <Link href="/about">About</Link>
          <Link href="/faq">FAQ</Link>
          <a href="#contact">Contact</a>
        </div>
        <div className="footerContact">
          <p>(843) 532-7181</p>
          <p>Serving Palm Beach County, FL</p>
        </div>
      </footer>

    </main>
  );
}
