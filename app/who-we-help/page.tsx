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
          <p>We serve seniors who want to remain in their homes, adults recovering from surgery or illness, families navigating a new diagnosis, and the people who love them — wherever they are.</p>
        </section>

        <section className="portraitSection">
          <div className="portraitGrid">

            <div className="portrait">
              <span className="portraitNum">01</span>
              <h3>The parent who wants to stay home.</h3>
              <p>She's still sharp. Still herself. But the little things are getting harder — managing medications, keeping appointments, the daily rhythms that used to feel effortless. Her family worries. She refuses to leave.</p>
              <p>What she needs isn't a facility. It's the right person. Velvet provides discreet, professional support that preserves her independence and gives her family peace of mind.</p>
              <ul className="portraitServices">
                <li>Medication reminders</li>
                <li>Personal care support</li>
                <li>Companionship and routine</li>
                <li>Errands and household support</li>
                <li>Family communication and updates</li>
              </ul>
            </div>

            <div className="portrait">
              <span className="portraitNum">02</span>
              <h3>The patient coming home from the hospital.</h3>
              <p>Hip replacement. Cardiac procedure. Cancer surgery. The hospital says you're ready to go home — but home doesn't feel ready. The discharge papers are overwhelming. Someone needs to be there who actually knows what they're doing.</p>
              <p>We bridge the gap between inpatient care and true recovery, with attentive companion support in the comfort of your own home.</p>
              <ul className="portraitServices">
                <li>Personal care assistance</li>
                <li>Medication reminders</li>
                <li>Transportation to follow-up appointments</li>
                <li>Meal preparation and errands</li>
                <li>Family communication and updates</li>
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
              <p>We bring calm, steady support to the learning curve — showing up consistently, helping with daily routines, and keeping families informed every step of the way.</p>
              <ul className="portraitServices">
                <li>Companionship and emotional support</li>
                <li>Medication reminders</li>
                <li>Transportation to specialist appointments</li>
                <li>Meal preparation and household support</li>
                <li>Regular family updates</li>
              </ul>
            </div>

          </div>
        </section>

        <section className="signsSection">
          <div className="signsInner">
            <p className="eyebrow">Know the Signs</p>
            <h2>Sometimes the need for support<br /><em>sneaks up quietly.</em></h2>
            <p className="signsIntro">Families often notice small changes before they realize what they mean. If any of these sound familiar, it may be time to have a conversation.</p>
            <ul className="signsList">
              <li>Struggling to keep up with household tasks that used to feel effortless</li>
              <li>Missing medications or doctor appointments</li>
              <li>Changes in personal grooming or appearance</li>
              <li>Noticeable weight loss or skipping meals</li>
              <li>Withdrawing from friends, family, or activities they once enjoyed</li>
              <li>Increased forgetfulness or confusion</li>
              <li>Mail piling up, expired food, or a home that feels neglected</li>
              <li>Difficulty getting around safely or recovering after a hospital stay</li>
              <li>A family caregiver who is exhausted and needs relief</li>
              <li>A gut feeling that something has changed — even if you can't quite name it</li>
            </ul>
            <p className="signsClose">You don't need to have it all figured out to reach out. We're happy to listen and help you think it through.</p>
          </div>
        </section>

        <SiteContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
