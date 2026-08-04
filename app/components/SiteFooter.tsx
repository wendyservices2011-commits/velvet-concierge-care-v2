import Link from "next/link";

export default function SiteFooter() {
  return (
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
        <Link href="/#contact">Contact</Link>
      </div>
      <div className="footerContact">
        <p>(561) 524-0011</p>
        <p><a href="mailto:info@velvetconciergecare.com">info@velvetconciergecare.com</a></p>
        <p>Serving Palm Beach County, FL</p>
      </div>
    </footer>
  );
}
