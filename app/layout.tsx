import "./globals.css";
import { Cormorant_Garamond, Inter } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Velvet Concierge Care — Private Duty Nursing, Palm Beach County",
  description:
    "RN-led private in-home nursing and concierge care for seniors, adults recovering from surgery, and families across Palm Beach County, Florida.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Velvet Concierge Care",
  "description": "Private duty nursing and concierge care services led by a Registered Nurse. Serving seniors, post-surgical patients, and adults managing chronic illness across Palm Beach County, Florida.",
  "url": "https://velvet-concierge-care-v2.vercel.app",
  "telephone": "+18435327181",
  "email": "info@velvetconciergecare.com",
  "priceRange": "$$$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Royal Palm Beach",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "areaServed": [
    "Royal Palm Beach", "Wellington", "West Palm Beach", "Palm Beach",
    "Palm Beach Gardens", "Lake Worth", "Boynton Beach", "Delray Beach", "Boca Raton"
  ],
  "founder": {
    "@type": "Person",
    "name": "Wendy Bien-Aime",
    "jobTitle": "Registered Nurse"
  },
  "medicalSpecialty": [
    "Private Duty Nursing",
    "Post-Surgical Care",
    "Chronic Disease Management",
    "Medication Management",
    "Care Coordination"
  ],
  "sameAs": [
    "https://github.com/wendyservices2011-commits/velvet-concierge-care-v2"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${cormorant.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
