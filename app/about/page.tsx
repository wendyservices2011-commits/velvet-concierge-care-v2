import SiteNav from "@/app/components/SiteNav";
import SiteFooter from "@/app/components/SiteFooter";
import SiteContactCta from "@/app/components/SiteContactCta";

export const metadata = {
  title: "About Wendy Bien-Aime, RN — Velvet Concierge Care",
  description: "Velvet Concierge Care was founded by Wendy Bien-Aime, RN, a nurse with over 15 years in home-based care serving Palm Beach County families.",
};

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="pageHero">
          <p className="eyebrow">About</p>
          <h1>Built from<br /><em>personal experience.</em></h1>
          <p>
            Velvet Concierge Care exists because of a family that needed this
            kind of help and couldn't find it. That story shapes everything we do.
          </p>
        </section>

        <section className="aboutStory">
          <div className="aboutStoryLeft">
            <p className="eyebrow">Our Founder</p>
            <h2>Fifteen years in nursing.<br />Every one of them <em>at home.</em></h2>
            <p className="aboutCredential">Wendy Bien-Aime, RN</p>
            <p className="aboutCredential">Licensed since 2010</p>
            <p className="aboutCredential">Royal Palm Beach, Florida</p>
          </div>

          <div className="aboutStoryRight">
            <p>
              When my grandmother began needing more care at home — forgetting
              things, struggling with routines, needing someone there — our family
              faced what so many families face. We were scattered across states.
              We were working, raising children, living our lives. No one could be
              there the way she needed.
            </p>
            <p>
              We couldn't afford to hire someone qualified to stay with her.
              So she had to leave. She left the home she loved in Miami and moved
              across the country to live with my mother in New York. She never
              fully adjusted. She missed her home every single day.
            </p>
            <p>
              That experience never left me. I became a nurse in part because of
              her. And I built Velvet Concierge Care entirely because of her —
              for the families who have the means to give their loved one what
              mine couldn't.
            </p>
            <p>
              The ability to stay home. Safe, supported, and exactly where
              they want to be.
            </p>
            <p>
              I have spent my entire nursing career in home-based care — not
              because it was the path of least resistance, but because I believe
              it is where nursing matters most. When you care for one person at
              a time, in the place they call home, you can get it right. You
              notice the small things. You build real trust. You become part of
              something that actually helps.
            </p>
            <p>
              That is what Velvet Concierge Care is built on. Not a corporate
              model. Not a staffing agency. A nurse who chose this work
              deliberately, who understands what your family is going through,
              and who will show up with the competence and compassion
              the situation deserves.
            </p>
            <div className="aboutSignature">— Wendy Bien-Aime, RN</div>
          </div>
        </section>

        <section className="aboutMission">
          <p className="eyebrow" style={{ color: "var(--gold)" }}>Our Mission</p>
          <h2>
            To make it possible for the people you love
            to stay exactly where they want to be —
            <em> at home, with dignity, cared for properly.</em>
          </h2>
        </section>

        <section className="aboutValues">
          <div className="aboutValuesGrid">
            <div className="aboutValue">
              <p className="eyebrow">Discretion</p>
              <p>Your family's privacy matters. We operate with quiet professionalism — present without being intrusive, attentive without being overbearing.</p>
            </div>
            <div className="aboutValue">
              <p className="eyebrow">Honesty</p>
              <p>We tell families what they need to know, not what they want to hear. Clear communication is the foundation of real trust.</p>
            </div>
            <div className="aboutValue">
              <p className="eyebrow">Full Attention</p>
              <p>When we are with your loved one, they have our complete focus. No divided attention. No rushing. The kind of care that's only possible one patient at a time.</p>
            </div>
          </div>
        </section>

        <SiteContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
