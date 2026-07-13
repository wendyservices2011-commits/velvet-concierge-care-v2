import SiteNav from "@/app/components/SiteNav";
import SiteFooter from "@/app/components/SiteFooter";
import SiteContactCta from "@/app/components/SiteContactCta";

export const metadata = {
  title: "Services — Velvet Concierge Care",
  description: "Homemaker and companion services for seniors, adults recovering from surgery, and families across Palm Beach County, Florida — guided by a Registered Nurse.",
};

export default function ServicesPage() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="pageHero">
          <p className="eyebrow">Our Services</p>
          <h1>Thoughtful support.<br /><em>Delivered with care.</em></h1>
          <p>Every engagement begins with a private consultation. What follows is support designed entirely around you — not a package, not a template.</p>
        </section>

        <section className="servicesSection">
          <div className="servicesGrid" style={{ gridTemplateColumns: "1fr" }}>

            <div className="serviceCategory">
              <p className="eyebrow">Homemaker &amp; Companion Services</p>
              <h3>Everything your loved one needs<br /><em>to stay comfortably at home.</em></h3>
              <div className="serviceDivider" />

              <div className="serviceItem">
                <h4>Companionship &amp; Social Engagement</h4>
                <p>Meaningful conversation, shared activities, and genuine human connection — because wellbeing is about far more than physical health.</p>
              </div>
              <div className="serviceItem">
                <h4>Meal Planning &amp; Preparation</h4>
                <p>Home-cooked meals aligned with dietary preferences and nutritional needs — prepared fresh, with care, in your loved one's own kitchen.</p>
              </div>
              <div className="serviceItem">
                <h4>Grocery Shopping &amp; Errands</h4>
                <p>Weekly grocery runs, pharmacy pickups, and daily errands handled reliably — so nothing falls through the cracks.</p>
              </div>
              <div className="serviceItem">
                <h4>Light Housekeeping</h4>
                <p>Tidying, laundry, linen changes, and light household tasks that keep the home safe, comfortable, and manageable.</p>
              </div>
              <div className="serviceItem">
                <h4>Transportation to Appointments</h4>
                <p>Safe, reliable transportation to medical appointments, specialist visits, and other engagements — handled with care and patience.</p>
              </div>
              <div className="serviceItem">
                <h4>Medical Appointment Accompaniment</h4>
                <p>We attend appointments alongside your loved one — present, attentive, and ready to ask the right questions and follow through on what the doctor recommends.</p>
              </div>
              <div className="serviceItem">
                <h4>Medication Reminders</h4>
                <p>Consistent, timely reminders to take prescribed medications — so nothing is missed and families have one less thing to worry about.</p>
              </div>
              <div className="serviceItem">
                <h4>Wellness Checks</h4>
                <p>Scheduled visits that combine attentive observation with genuine connection — so families stay informed and loved ones stay safe.</p>
              </div>
              <div className="serviceItem">
                <h4>Family Communication &amp; Updates</h4>
                <p>Regular, honest updates to family members near and far — so everyone stays informed and no one is left wondering.</p>
              </div>
            </div>

            <div className="serviceCategory">
              <p className="eyebrow">Respite Care</p>
              <h3>Support for the<br /><em>family caregiver.</em></h3>
              <div className="serviceDivider" />

              <div className="serviceItem">
                <h4>Relief for Family Caregivers</h4>
                <p>Caring for a loved one is one of the most demanding responsibilities a family can take on. We step in so you can step away — for an afternoon, a few days, or longer — knowing your loved one is in capable, caring hands.</p>
              </div>
              <div className="serviceItem">
                <h4>Scheduled &amp; Flexible Coverage</h4>
                <p>Respite support can be arranged on a regular schedule or as needed. We work around your family's rhythm so you can rest without worry.</p>
              </div>
              <div className="serviceItem">
                <h4>Companionship &amp; Routine Maintenance</h4>
                <p>While you're away, your loved one's daily routines, meals, medication reminders, and social connection continue without interruption.</p>
              </div>
            </div>

            <div className="serviceCategory">
              <p className="eyebrow">Snowbird Season</p>
              <h3>Seasonal support for<br /><em>Palm Beach residents.</em></h3>
              <div className="serviceDivider" />

              <div className="serviceItem">
                <h4>Seasonal Companion Care</h4>
                <p>Whether you're arriving for the season or winding down before heading north, Velvet provides seamless companion and homemaker support tailored to your schedule — no long-term commitment required.</p>
              </div>
              <div className="serviceItem">
                <h4>Home Transition Support</h4>
                <p>We help you or your loved one settle in comfortably — grocery stocking, errand runs, appointment scheduling, and daily support from day one of your arrival.</p>
              </div>
              <div className="serviceItem">
                <h4>Flexible Engagement</h4>
                <p>Seasonal clients receive the same attentive, personalized care as year-round clients. We're here for the season — and ready to resume the moment you return.</p>
              </div>
            </div>

          </div>

          <div className="serviceNote">
            <div>
              <h4>The Velvet Advantage</h4>
              <p>Wendy's extensive background in home-based care means she brings a level of attentiveness, sound judgment, and professionalism that goes well beyond what a typical homemaker service can offer.</p>
            </div>
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
