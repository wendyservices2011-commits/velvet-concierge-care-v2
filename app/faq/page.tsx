import SiteNav from "@/app/components/SiteNav";
import SiteFooter from "@/app/components/SiteFooter";
import SiteContactCta from "@/app/components/SiteContactCta";

export const metadata = {
  title: "FAQ — Velvet Concierge Care",
  description: "Common questions about private nursing care and how Velvet Concierge Care works in Palm Beach County.",
};

export default function FaqPage() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="pageHero">
          <p className="eyebrow">Frequently Asked Questions</p>
          <h1>Questions we hear<br /><em>from families like yours.</em></h1>
          <p>If you don't find what you're looking for, please reach out. Every family's situation is different and we're happy to talk.</p>
        </section>

        <section className="faqSection">

          <details>
            <summary>What areas do you serve?</summary>
            <div className="faqAnswer">
              <p>We serve families throughout Palm Beach County — Royal Palm Beach, Wellington, West Palm Beach, Palm Beach, Palm Beach Gardens, Lake Worth, Boynton Beach, Delray Beach, and Boca Raton. If you're unsure whether we cover your area, please call.</p>
            </div>
          </details>

          <details>
            <summary>Do you accept health insurance or Medicare?</summary>
            <div className="faqAnswer">
              <p>Velvet Concierge Care operates on a private-pay basis. This allows us to focus entirely on your loved one's needs rather than insurance limitations or agency requirements.</p>
              <p style={{ marginTop: "12px" }}>If your family has a long-term care insurance policy, we provide detailed invoices that you may submit directly to your insurer for potential reimbursement. Many clients with long-term care coverage find this works well.</p>
            </div>
          </details>

          <details>
            <summary>How is Velvet different from a home health agency?</summary>
            <div className="faqAnswer">
              <p>Home health agencies typically send different staff members at different times, operate within Medicare or Medicaid frameworks, and focus on short-term skilled nursing visits.</p>
              <p style={{ marginTop: "12px" }}>Velvet is different in three ways. First, you work directly with a Registered Nurse — not a rotating roster of aides supervised from an office. Second, we offer both clinical nursing and lifestyle concierge support under one arrangement. Third, we have no insurance-imposed limitations on what we can do or how long we can do it.</p>
            </div>
          </details>

          <details>
            <summary>What does a typical engagement look like?</summary>
            <div className="faqAnswer">
              <p>Every engagement begins with a private consultation — a conversation about your loved one's situation, needs, preferences, and goals. From there we design a care plan together. Some families need clinical nursing visits a few times a week. Others want daily support across both nursing and lifestyle services. We build the arrangement around what's actually needed.</p>
            </div>
          </details>

          <details>
            <summary>Can you work alongside my loved one's existing doctors?</summary>
            <div className="faqAnswer">
              <p>Yes — and we actively encourage it. We are a complement to your existing medical team, not a replacement. We attend appointments when helpful, provide clinical observations that inform physician decisions, follow through on care plan changes, and communicate with providers when families authorize us to do so.</p>
            </div>
          </details>

          <details>
            <summary>What personal care services do you offer?</summary>
            <div className="faqAnswer">
              <p>We provide assistance with activities of daily living — including bathing, grooming, dressing, and mobility support — delivered with the discretion and dignity your loved one deserves. Because personal care needs are deeply individual, we discuss the full scope privately during the initial consultation.</p>
            </div>
          </details>

          <details>
            <summary>Are services available evenings and weekends?</summary>
            <div className="faqAnswer">
              <p>We understand that care needs don't follow a Monday-through-Friday schedule. Availability for evenings, weekends, and extended visits is discussed during the consultation. Please reach out to talk about your specific scheduling needs.</p>
            </div>
          </details>

          <details>
            <summary>How do I know my loved one will be safe?</summary>
            <div className="faqAnswer">
              <p>Velvet Concierge Care is led by a licensed Registered Nurse. Your loved one is in the care of a clinically trained professional. We monitor health status, notice changes, communicate with medical teams, and make sound clinical decisions when it matters. You can verify nursing licensure through the Florida Board of Nursing at any time.</p>
            </div>
          </details>

          <details>
            <summary>My family member has a specific device or condition. Can you help?</summary>
            <div className="faqAnswer">
              <p>We care for clients with a range of clinical needs including G-tube care, tracheostomy care, wound care, and complex medication regimens. The best way to find out if we're the right fit is to have a conversation. We'll be honest with you about what we can offer.</p>
            </div>
          </details>

          <details>
            <summary>How do I get started?</summary>
            <div className="faqAnswer">
              <p>Call us at (843) 532-7181 to schedule a private consultation. There's no obligation and no pressure. We'll listen to your family's situation, answer your questions honestly, and together decide whether Velvet Concierge Care is the right fit.</p>
            </div>
          </details>

        </section>

        <SiteContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
