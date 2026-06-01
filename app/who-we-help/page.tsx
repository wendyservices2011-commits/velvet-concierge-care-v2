import SiteNav from "@/app/components/SiteNav";
import SiteFooter from "@/app/components/SiteFooter";
import SiteContactCta from "@/app/components/SiteContactCta";

export const metadata = {
  title: "Who We Help — Velvet Concierge Care",
  description: "We serve aging adults, post-surgical patients, families managing from afar, and those navigating new diagnoses across Palm Beach County.",
};

export default function WhoWeHelpPage() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="pageHero">
          <p className="eyebrow">Who We Help</p>
          <h1>Every family's situation<br />is <em>different.</em></h1>
          <p>We serve older adults who want to stay home, families navigating recovery, and the people who love them — wherever they are.</p>
        </section>

        <section className="portraitSection">
          <div className="portraitGrid">

            <div className="portrait">
              <span className="portraitNum">01</span>
              <h3>The parent who wants to stay home.</h3>
              <p>She's still sharp. Still herself. But the little things are getting harder — managing medications, keeping appointments, the daily rhythms that used to feel effortless. Her family worries. She refuses to leave.</p>
              <p>What she needs isn't a facility. It's the right person. Velvet provides discreet, professional support that preserves her independence and gives her family peace of mind.</p>
              <ul className="portraitServices">
                <li>Medication management</li>
                <li>Daily wellness monitoring</li>
                <li>Personal care support</li>
                <li>Companionship and routine</li>
                <li>Family communication and updates</li>
              </ul>
            </div>

            <div className="portrait">
              <span className="portraitNum">02</span>
              <h3>The patient coming home from the hospital.</h3>
              <p>Hip replacement. Cardiac procedure. Cancer surgery. The hospital says you're ready to go home — but home doesn't feel ready. The discharge papers are overwhelming. Someone needs to be there who actually knows what they're doing.</p>
              <p>We bridge the gap between inpatient care and true recovery, with RN-level oversight in the comfort of your own home.</p>
              <ul className="portraitServices">
                <li>Post-surgical wound care</li>
                <li>Medication administration</li>
                <li>Vital signs monitoring</li>
                <li>Physician care coordination</li>
                <li>Recovery support and education</li>
              </ul>
            </div>

            <div className="portrait">
              <span className="portraitNum">03</span>
              <h3>The family managing from another state.</h3>
              <p>Your mother lives in Palm Beach. You live in New York. You call every day but you can't be there. You need someone you trust absolutely — someone who notices when something is off, who calls you before you have to ask.</p>
              <p>We become your eyes, your hands, and your peace of mind — a real professional presence when you can't be there yourself.</p>
              <ul className="portraitServices">
                <li>Regular family check-in calls</li>
                <li>Medical appointment accompaniment</li>
                <li>Medication and health monitoring</li>
                <li>Errands and daily support</li>
                <li>Immediate family notification</li>
              </ul>
            </div>

            <div className="portrait">
              <span className="portraitNum">04</span>
              <h3>The patient navigating a new diagnosis.</h3>
              <p>Diabetes. Heart failure. Parkinson's. Early memory changes. A new diagnosis changes everything — the medications, the monitoring, the routines, the fear. Most families are not equipped to manage it alone.</p>
              <p>We bring clinical expertise and calm steadiness to the learning curve — educating, monitoring, adjusting, and advocating so your loved one can live as fully as possible.</p>
              <ul className="portraitServices">
                <li>Chronic disease management</li>
                <li>Patient and family education</li>
                <li>Medication management</li>
                <li>Specialist coordination</li>
                <li>Ongoing monitoring and adjustment</li>
              </ul>
            </div>

          </div>
        </section>

        <SiteContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
