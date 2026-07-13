"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
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
        <a href="tel:5168536445" className="navPhone">(516) 853-6445</a>
        <Link href="/consultation" className="navCta">Schedule a Consultation</Link>
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
          <Link href="/consultation" className="mobileMenuCta" onClick={() => setMenuOpen(false)}>
            Schedule a Consultation
          </Link>
        </div>
      )}

      {/* Hero */}
      <section className="hero">
        <div className="heroLeft">
          <p className="heroEyebrow">Homemaker &amp; Companion Services · Palm Beach County</p>
          <h1>
            The comfort of home.<br />
            The support of someone<br />
            <em>who truly knows care.</em>
          </h1>
          <p>
            Private homemaker and companion services for seniors, adults
            recovering from surgery, and the families who love them —
            guided by a Registered Nurse.
          </p>
          <Link href="/consultation" className="goldButton">
            Schedule a Consultation <span>→</span>
          </Link>
          <div className="acceptingClients">
            <span className="acceptingDot" />
            Now Accepting New Clients
          </div>
        </div>
        <div className="heroScroll"><span /></div>
      </section>

      {/* Trust bar */}
      <div className="trustBar">
        <div className="trustItem"><span className="trustDot" />Nurse-Founded &amp; Operated</div>
        <div className="trustItem"><span className="trustDot" />AHCA Licensed</div>
        <div className="trustItem"><span className="trustDot" />Background-Screened Caregivers</div>
        <div className="trustItem"><span className="trustDot" />Personalized Care Plans</div>
        <div className="trustItem"><span className="trustDot" />Serving Palm Beach County</div>
      </div>

      {/* Intro — enormous type */}
      <section className="intro">
        <h2>
          Home is where<br />
          life happens.<br />
          <em>We're here to help<br />you live it well.</em>
        </h2>
        <p>
          Whether you're aging at home, recovering from surgery, managing
          a new diagnosis, or simply need consistent expert support —
          we're here so your family can focus on what matters most.
        </p>
      </section>

      {/* Why Families Choose — two column: headline+photo left, list right */}
      <section id="services" className="whySection">
        <div className="whyLeft">
          <h2>
            Genuine support.<br />
            Thoughtful care.<br />
            <em>Unwavering attention.</em>
          </h2>
          <div className="whyPhoto" />
        </div>
        <div className="whyRight">
          <p className="eyebrow">Why Families Choose Velvet Concierge Care</p>
          <div className="whyList">
            <div className="whyItem">
              <span className="whyNum">01</span>
              <div>
                <h3>Attentive, Experienced Care</h3>
                <p>Our caregivers are background-screened, trained, and supervised by a Registered Nurse. Someone who notices what others miss — and knows what to do about it.</p>
              </div>
            </div>
            <div className="whyItem">
              <span className="whyNum">02</span>
              <div>
                <h3>Personalized Support</h3>
                <p>No two families are the same. Before care begins, we learn your loved one's routines, preferences, and needs — then build a plan around them, not the other way around.</p>
              </div>
            </div>
            <div className="whyItem">
              <span className="whyNum">03</span>
              <div>
                <h3>Clear Communication</h3>
                <p>You'll never wonder what's happening. We keep families informed, involved, and at ease — because peace of mind is part of the service.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder section — photo background with overlay */}
      <section className="storyImage">
        <div className="founderInner">
          <p className="eyebrow" style={{ color: "var(--gold)" }}>Meet the Founder</p>
          <h2 className="founderName">Wendy Bien-Aime, RN</h2>
          <p className="founderTitle">Founder, Velvet Concierge Care</p>
          <blockquote className="founderQuote">
            &ldquo;Our mission is not to replace the family — but to give them
            the freedom to simply be family again.&rdquo;
          </blockquote>
          <a href="/about" className="founderLink">Read My Story →</a>
        </div>
      </section>

      {/* Merged statement + contact */}
      <section id="contact" className="contactMerged">
        <p className="contactStatement">
          We don't fit families into care plans.{" "}
          <em>We build care plans around families.</em>
        </p>
        <div className="contactCta">
          <h2>Let's talk about<br /><em>how we can help.</em></h2>
          <p>Every family's situation is different.<br />We'd love to learn about yours.</p>
          <Link href="/consultation" className="darkButton">
            Schedule a Consultation <span>→</span>
          </Link>
          <p className="contactAlt">
            Prefer to call? <a href="tel:5168536445">(516) 853-6445</a>
          </p>
        </div>
      </section>

      {/* Services preview — summary cards above footer */}
      <section className="servicesPreview">
        <div className="servicesPreviewHead">
          <p className="eyebrow">Our Services</p>
          <Link href="/services" className="servicesPreviewLink">View All Services →</Link>
        </div>
        <div className="servicesPreviewGrid">
          <div className="servicesPreviewCard">
            <h3>Companionship</h3>
            <p>Meaningful connection and social engagement that supports emotional wellbeing.</p>
          </div>
          <div className="servicesPreviewCard">
            <h3>Personal Care</h3>
            <p>Dignified assistance with bathing, grooming, dressing, and daily living.</p>
          </div>
          <div className="servicesPreviewCard">
            <h3>Meal Preparation</h3>
            <p>Fresh, home-cooked meals tailored to dietary needs and preferences.</p>
          </div>
          <div className="servicesPreviewCard">
            <h3>Errands &amp; Transportation</h3>
            <p>Grocery runs, pharmacy pickups, and safe rides to appointments.</p>
          </div>
          <div className="servicesPreviewCard">
            <h3>Light Housekeeping</h3>
            <p>Tidying, laundry, and light tasks that keep the home safe and comfortable.</p>
          </div>
          <div className="servicesPreviewCard">
            <h3>Medication Reminders</h3>
            <p>Consistent reminders so prescriptions are never missed.</p>
          </div>
          <div className="servicesPreviewCard">
            <h3>Wellness Checks</h3>
            <p>Scheduled visits that keep families informed and loved ones safe.</p>
          </div>
          <div className="servicesPreviewCard">
            <h3>Respite Care</h3>
            <p>Relief for family caregivers — scheduled or as needed, with full continuity of care.</p>
          </div>
          <div className="servicesPreviewCard">
            <h3>Snowbird Support</h3>
            <p>Seasonal companion and homemaker care for Palm Beach residents — no long-term commitment required.</p>
          </div>
        </div>
      </section>

      {/* Floating call button */}
      <a href="tel:5168536445" className="floatCall">
        <span className="floatCallIcon">✆</span>
        <span className="floatCallText">Call Us</span>
      </a>

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
          <p>(516) 853-6445</p>
          <p><a href="mailto:info@velvetconciergecare.com">info@velvetconciergecare.com</a></p>
          <p>Serving Palm Beach County, FL</p>
        </div>
      </footer>
    </main>
  );
}
