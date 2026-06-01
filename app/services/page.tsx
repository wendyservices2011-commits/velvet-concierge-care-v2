import SiteNav from "@/app/components/SiteNav";
import SiteFooter from "@/app/components/SiteFooter";
import SiteContactCta from "@/app/components/SiteContactCta";

export const metadata = {
  title: "Services — Velvet Concierge Care",
  description: "Private RN-led nursing care and lifestyle concierge services for older adults and families across Palm Beach County, Florida.",
};

export default function ServicesPage() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="pageHero">
          <p className="eyebrow">Our Services</p>
          <h1>Clinical expertise.<br /><em>Thoughtfully delivered.</em></h1>
          <p>Every engagement begins with a private consultation. What follows is care designed entirely around you — not a package, not a template.</p>
        </section>

        <section className="servicesSection">
          <div className="servicesGrid">

            <div className="serviceCategory">
              <p className="eyebrow">Clinical Nursing Care</p>
              <h3>RN-led.<br />Precise. Personal.</h3>
              <div className="serviceDivider" />

              <div className="serviceItem">
                <h4>Medication Management &amp; Administration</h4>
                <p>Oversight of complex medication regimens, administration of oral, intramuscular, and subcutaneous medications, and education for patients and families on safe medication practices.</p>
              </div>
              <div className="serviceItem">
                <h4>Wound Assessment &amp; Care</h4>
                <p>Professional wound evaluation, cleaning, dressing changes, and healing monitoring — supporting recovery from surgery, injury, or chronic conditions.</p>
              </div>
              <div className="serviceItem">
                <h4>G-Tube Care</h4>
                <p>Gastrostomy tube management including feedings, site care, and troubleshooting for patients who rely on enteral nutrition at home.</p>
              </div>
              <div className="serviceItem">
                <h4>Tracheostomy Care</h4>
                <p>Trach cleaning, suctioning, and airway management for patients living with a tracheostomy at home.</p>
              </div>
              <div className="serviceItem">
                <h4>Vital Signs &amp; Health Monitoring</h4>
                <p>Routine and ongoing assessment of blood pressure, heart rate, oxygen saturation, blood glucose, and other key indicators — with immediate family notification of any concerns.</p>
              </div>
              <div className="serviceItem">
                <h4>Chronic Disease Management</h4>
                <p>Ongoing support for diabetes, heart failure, COPD, Parkinson's, and other conditions — including monitoring, medication adherence, and lifestyle guidance.</p>
              </div>
              <div className="serviceItem">
                <h4>Post-Surgical Recovery Support</h4>
                <p>RN oversight during critical weeks after hospital discharge — wound care, medication management, and coordination with the surgical team.</p>
              </div>
              <div className="serviceItem">
                <h4>Patient &amp; Family Education</h4>
                <p>Clear, compassionate education on diagnoses, medications, procedures, and warning signs — so families feel equipped, not overwhelmed.</p>
              </div>
              <div className="serviceItem">
                <h4>Physician Care Coordination</h4>
                <p>Communication with your loved one's medical team, preparation for appointments, and follow-through on care plan changes.</p>
              </div>
            </div>

            <div className="serviceCategory">
              <p className="eyebrow">Concierge &amp; Daily Support</p>
              <h3>Everything else<br /><em>taken care of.</em></h3>
              <div className="serviceDivider" />

              <div className="serviceItem">
                <h4>Medical Appointment Accompaniment</h4>
                <p>We attend appointments alongside your loved one — taking notes, asking questions, and ensuring nothing is missed or misunderstood.</p>
              </div>
              <div className="serviceItem">
                <h4>Transportation &amp; Errands</h4>
                <p>Safe, reliable transportation to appointments, pharmacy pickups, and daily errands — handled with care and discretion.</p>
              </div>
              <div className="serviceItem">
                <h4>Grocery Shopping &amp; Nutrition Support</h4>
                <p>Weekly grocery shopping aligned with dietary needs, plus meal preparation support to ensure proper nutrition at home.</p>
              </div>
              <div className="serviceItem">
                <h4>Personal Care Assistance</h4>
                <p>Sensitive, dignified assistance with activities of daily living. The full scope of personal care is discussed privately during your initial consultation.</p>
              </div>
              <div className="serviceItem">
                <h4>Family Communication &amp; Updates</h4>
                <p>Regular, honest updates to family members near and far — so everyone stays informed and no one is left wondering.</p>
              </div>
              <div className="serviceItem">
                <h4>Medication Pickup</h4>
                <p>Pharmacy coordination and pickup so prescriptions are never missed and medications are always on hand.</p>
              </div>
              <div className="serviceItem">
                <h4>Wellness Checks &amp; Companionship</h4>
                <p>Scheduled visits that combine clinical assessment with genuine human connection — because wellbeing is more than vital signs.</p>
              </div>
              <div className="serviceItem">
                <h4>Household Task Support</h4>
                <p>Light household assistance to keep the home environment safe, comfortable, and manageable.</p>
              </div>
            </div>

          </div>

          <div className="serviceNote">
            <div>
              <h4>Private Pay</h4>
              <p>Velvet Concierge Care operates on a private-pay basis, allowing us to focus entirely on your loved one rather than insurance requirements. We provide detailed invoices that clients may submit independently to their long-term care insurance provider for potential reimbursement.</p>
            </div>
            <div>
              <h4>Service Area</h4>
              <p>We serve families throughout Palm Beach County — including Royal Palm Beach, Wellington, West Palm Beach, Palm Beach, Palm Beach Gardens, Lake Worth, Boynton Beach, Delray Beach, and Boca Raton.</p>
            </div>
          </div>
        </section>

        <SiteContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
