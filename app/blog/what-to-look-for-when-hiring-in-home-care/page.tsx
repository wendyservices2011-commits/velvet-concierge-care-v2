import SiteNav from "@/app/components/SiteNav";
import SiteFooter from "@/app/components/SiteFooter";
import SiteContactCta from "@/app/components/SiteContactCta";
import Link from "next/link";

export const metadata = {
  title: "What to Look for When Hiring In-Home Care — Velvet Concierge Care",
  description: "Not all in-home care is created equal. Here are the questions every family should ask before welcoming someone into their home.",
};

export default function Article() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="pageHero">
          <p className="eyebrow">July 2026 · Wendy Bien-Aime, RN</p>
          <h1>What to Look for When<br /><em>Hiring In-Home Care</em></h1>
        </section>

        <article className="blogArticle">
          <p>Inviting someone into your loved one's home is not a small decision. It requires trust — and trust requires information. Yet many families, under pressure and short on time, make this decision without asking the questions that matter most.</p>

          <p>Here's what I would want to know if I were hiring in-home care for someone I loved.</p>

          <h2>Are caregivers background-screened?</h2>
          <p>This should be non-negotiable. Any reputable in-home care provider will conduct thorough background checks on every caregiver before they enter a client's home. Ask specifically: what does the screening include? Criminal background? Driving record? Reference verification? If the answer is vague, that's a problem.</p>

          <p>At Velvet Concierge Care, all caregivers are background-screened before placement. We don't cut corners on this.</p>

          <h2>Who supervises the caregivers?</h2>
          <p>This is a question many families don't think to ask — and it's one of the most important. Is there a clinical professional overseeing care? Who do caregivers report to? What happens if a caregiver calls out sick? Is there a backup plan, or does your family scramble?</p>

          <p>Velvet Concierge Care is nurse-founded and nurse-supervised. That means every engagement is overseen by a registered nurse who can recognize changes in condition, guide caregivers, and communicate meaningfully with families and medical teams.</p>

          <h2>How is the care plan developed?</h2>
          <p>Generic care isn't really care. Before services begin, a good provider should want to learn about your loved one specifically — their routines, their preferences, their personality, their history. A care plan built around a real person looks very different from one pulled off a template.</p>

          <p>Ask: how do you learn about our loved one before care starts? What does the intake process look like? How is the plan adjusted over time?</p>

          <h2>How does communication work?</h2>
          <p>If something changes — if your loved one seems more confused than usual, or has a fall, or refuses to eat — how will you find out? How quickly? Through what channel?</p>

          <p>Clear, proactive communication isn't a luxury in in-home care. It's the difference between a family that feels informed and confident and one that worries constantly. Ask explicitly: what does communication with families look like? How often will we hear from you?</p>

          <h2>Is the agency licensed?</h2>
          <p>In Florida, home health agencies are regulated by the Agency for Health Care Administration (AHCA). Licensing means the agency has met state standards for operation, staffing, and oversight. It also means there's accountability — a licensed agency can be reported and held responsible in ways that an unlicensed individual cannot.</p>

          <p>Always confirm licensing status before engaging any in-home care provider in Florida.</p>

          <h2>What happens if things aren't working?</h2>
          <p>Even with the best intentions and careful matching, sometimes a caregiver and client aren't the right fit. How does the agency handle that? Is there flexibility to request a different caregiver? Is there a process for raising concerns without fear that care will be disrupted?</p>

          <p>The answer to this question tells you a lot about a provider's culture and values.</p>

          <h2>What's your instinct?</h2>
          <p>After all the practical questions, trust your gut. Did the person you spoke with listen carefully or rush through a sales pitch? Did they ask thoughtful questions about your loved one, or focus primarily on closing the agreement? Did they feel like someone who genuinely cares about families, or someone trying to fill a schedule?</p>

          <p>The relationship between a caregiver and a client is intimate. The relationship between a family and a care provider should feel trustworthy from the very first conversation.</p>

          <p>If you'd like to have that conversation with us, <Link href="/consultation">we'd love to hear from you</Link>. We're happy to answer every question on this list — and any others you bring.</p>
        </article>

        <SiteContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
