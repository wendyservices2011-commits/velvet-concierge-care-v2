"use client";

import { useState } from "react";
import Link from "next/link";
import SiteNav from "@/app/components/SiteNav";
import SiteFooter from "@/app/components/SiteFooter";

type Status = "idle" | "submitting" | "success" | "error";

type FormData = {
  name: string;
  phone: string;
  email: string;
  lovedOneAge: string;
  livingSituation: string;
  diagnoses: string;
  recentHospitalization: string;
  supportSystem: string;
  biggestChallenge: string;
  whatPrompted: string;
  situations: string[];
  biggestConcerns: string;
  successLooksLike: string;
  anythingElse: string;
};

const SITUATIONS = [
  "Medication management concerns",
  "Recent hospitalization",
  "Dementia or memory concerns",
  "Transportation to appointments",
  "Companion care",
  "Caregiver burnout",
  "Desire to age in place",
  "Post-surgical support",
  "Other",
];

const LIVING = [
  "Lives alone",
  "Lives with spouse or partner",
  "Lives with family",
  "In assisted living",
  "In a skilled nursing facility",
  "Other",
];

const empty: FormData = {
  name: "", phone: "", email: "",
  lovedOneAge: "", livingSituation: "", diagnoses: "", recentHospitalization: "",
  supportSystem: "", biggestChallenge: "", whatPrompted: "", situations: [],
  biggestConcerns: "", successLooksLike: "", anythingElse: "",
};

export default function ConsultationPage() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState<FormData>(empty);

  const set = (field: keyof FormData, value: string) =>
    setForm(prev => ({ ...prev, [field]: value }));

  const toggle = (s: string) =>
    setForm(prev => ({
      ...prev,
      situations: prev.situations.includes(s)
        ? prev.situations.filter(x => x !== s)
        : [...prev.situations, s],
    }));

  const submit = async () => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const firstName = form.name.split(" ")[0] || "you";

  /* ── Success screen ─────────────────────────── */
  if (status === "success") {
    return (
      <>
        <SiteNav />
        <main className="consultSuccess">
          <div className="consultSuccessInner">
            <span className="consultSuccessMark">✦</span>
            <h1>Thank you, {firstName}.</h1>
            <p>
              We've received your information and will be in touch within 24 hours
              to schedule your complimentary consultation.
            </p>
            <p className="consultSuccessSub">
              If your need is urgent, please call us directly at{" "}
              <a href="tel:8435327181">(843) 532-7181</a>.
            </p>
            <Link href="/" className="darkButton" style={{ marginTop: "36px", display: "inline-flex" }}>
              Return Home <span>→</span>
            </Link>
          </div>
        </main>
        <SiteFooter />
      </>
    );
  }

  /* ── Form ───────────────────────────────────── */
  return (
    <>
      <SiteNav />
      <main>

        <section className="consultHero">
          <p className="eyebrow">Private Consultation</p>
          <h1>Tell us about<br /><em>your family.</em></h1>
          <p>
            This helps us prepare so our first conversation is meaningful,
            not introductory.
          </p>
        </section>

        <section className="consultSection">

          {/* Progress bar */}
          <div className="consultProgress" aria-label={`Step ${step} of 4`}>
            {[1, 2, 3, 4].map(n => (
              <div key={n} className="consultProgressItem">
                <div className={`consultProgressDot ${step >= n ? "done" : ""}`} />
                {n < 4 && (
                  <div className={`consultProgressLine ${step > n ? "done" : ""}`} />
                )}
              </div>
            ))}
          </div>

          <div className="consultCard">

            {/* ─── Step 1: About You ─────────── */}
            {step === 1 && (
              <div className="consultStep">
                <div className="consultStepHead">
                  <p className="consultStepNum">01 of 04</p>
                  <h2>About you</h2>
                  <p>We'll use this to reach out and confirm your consultation.</p>
                </div>

                <div className="consultFields">
                  <div className="consultField">
                    <label>Your full name</label>
                    <input
                      className="consultInput"
                      type="text"
                      value={form.name}
                      onChange={e => set("name", e.target.value)}
                      placeholder="First and last name"
                    />
                  </div>
                  <div className="consultField">
                    <label>Best phone number</label>
                    <input
                      className="consultInput"
                      type="tel"
                      value={form.phone}
                      onChange={e => set("phone", e.target.value)}
                      placeholder="(000) 000-0000"
                    />
                  </div>
                  <div className="consultField">
                    <label>Email address</label>
                    <input
                      className="consultInput"
                      type="email"
                      value={form.email}
                      onChange={e => set("email", e.target.value)}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="consultNav">
                  <div />
                  <button
                    className="goldButton"
                    onClick={() => setStep(2)}
                    disabled={!form.name || !form.phone || !form.email}
                  >
                    Continue <span>→</span>
                  </button>
                </div>
              </div>
            )}

            {/* ─── Step 2: Loved One ─────────── */}
            {step === 2 && (
              <div className="consultStep">
                <div className="consultStepHead">
                  <p className="consultStepNum">02 of 04</p>
                  <h2>About your loved one</h2>
                  <p>Help us understand who we'll be caring for.</p>
                </div>

                <div className="consultFields">
                  <div className="consultField">
                    <label>Their age</label>
                    <input
                      className="consultInput"
                      type="text"
                      value={form.lovedOneAge}
                      onChange={e => set("lovedOneAge", e.target.value)}
                      placeholder="e.g. 78"
                    />
                  </div>

                  <div className="consultField">
                    <label>Current living situation</label>
                    <div className="consultChips">
                      {LIVING.map(opt => (
                        <button
                          key={opt}
                          type="button"
                          className={`consultChip ${form.livingSituation === opt ? "selected" : ""}`}
                          onClick={() => set("livingSituation", opt)}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="consultField">
                    <label>
                      Existing diagnoses or health concerns
                      <span className="consultFieldNote">Optional</span>
                    </label>
                    <textarea
                      className="consultInput consultTextarea"
                      value={form.diagnoses}
                      onChange={e => set("diagnoses", e.target.value)}
                      placeholder="Share anything relevant — diagnoses, medications, mobility, memory concerns..."
                    />
                  </div>

                  <div className="consultField">
                    <label>
                      Recent hospitalizations or procedures
                      <span className="consultFieldNote">Optional</span>
                    </label>
                    <textarea
                      className="consultInput consultTextarea"
                      value={form.recentHospitalization}
                      onChange={e => set("recentHospitalization", e.target.value)}
                      placeholder="If any — what happened, when, and how recovery is going..."
                    />
                  </div>
                </div>

                <div className="consultNav">
                  <button className="consultBack" onClick={() => setStep(1)}>← Back</button>
                  <button
                    className="goldButton"
                    onClick={() => setStep(3)}
                    disabled={!form.lovedOneAge || !form.livingSituation}
                  >
                    Continue <span>→</span>
                  </button>
                </div>
              </div>
            )}

            {/* ─── Step 3: Situation ─────────── */}
            {step === 3 && (
              <div className="consultStep">
                <div className="consultStepHead">
                  <p className="consultStepNum">03 of 04</p>
                  <h2>Your situation</h2>
                  <p>We want to understand what your family is navigating right now.</p>
                </div>

                <div className="consultFields">
                  <div className="consultField">
                    <label>
                      Current support system
                      <span className="consultFieldNote">Optional</span>
                    </label>
                    <textarea
                      className="consultInput consultTextarea"
                      value={form.supportSystem}
                      onChange={e => set("supportSystem", e.target.value)}
                      placeholder="Who is currently helping? Family nearby, other caregivers, friends..."
                    />
                  </div>

                  <div className="consultField">
                    <label>What is the biggest challenge right now?</label>
                    <textarea
                      className="consultInput consultTextarea"
                      value={form.biggestChallenge}
                      onChange={e => set("biggestChallenge", e.target.value)}
                      placeholder="Be as honest as you'd like — we've heard it all and we're here to help."
                    />
                  </div>

                  <div className="consultField">
                    <label>What prompted you to reach out today?</label>
                    <textarea
                      className="consultInput consultTextarea"
                      value={form.whatPrompted}
                      onChange={e => set("whatPrompted", e.target.value)}
                      placeholder="Something specific that happened, or a feeling that things need to change..."
                    />
                  </div>

                  <div className="consultField">
                    <label>
                      What best describes your situation?
                      <span className="consultFieldNote">Select all that apply</span>
                    </label>
                    <div className="consultChips">
                      {SITUATIONS.map(s => (
                        <button
                          key={s}
                          type="button"
                          className={`consultChip ${form.situations.includes(s) ? "selected" : ""}`}
                          onClick={() => toggle(s)}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="consultNav">
                  <button className="consultBack" onClick={() => setStep(2)}>← Back</button>
                  <button
                    className="goldButton"
                    onClick={() => setStep(4)}
                    disabled={!form.biggestChallenge || !form.whatPrompted}
                  >
                    Continue <span>→</span>
                  </button>
                </div>
              </div>
            )}

            {/* ─── Step 4: Goals ─────────────── */}
            {step === 4 && (
              <div className="consultStep">
                <div className="consultStepHead">
                  <p className="consultStepNum">04 of 04</p>
                  <h2>Your goals</h2>
                  <p>
                    Help us understand what a meaningful outcome looks like
                    for your family.
                  </p>
                </div>

                <div className="consultFields">
                  <div className="consultField">
                    <label>What are your biggest concerns right now?</label>
                    <textarea
                      className="consultInput consultTextarea"
                      value={form.biggestConcerns}
                      onChange={e => set("biggestConcerns", e.target.value)}
                      placeholder="Safety, dignity, family stress, medical management — whatever is weighing on you most."
                    />
                  </div>

                  <div className="consultField">
                    <label>What would a successful outcome look like for your family?</label>
                    <textarea
                      className="consultInput consultTextarea"
                      value={form.successLooksLike}
                      onChange={e => set("successLooksLike", e.target.value)}
                      placeholder="Describe what life looks like when things are better..."
                    />
                  </div>

                  <div className="consultField">
                    <label>
                      Is there anything else you'd like us to know?
                      <span className="consultFieldNote">Optional</span>
                    </label>
                    <textarea
                      className="consultInput consultTextarea"
                      value={form.anythingElse}
                      onChange={e => set("anythingElse", e.target.value)}
                      placeholder="Anything at all — the more we know, the better prepared we'll be."
                    />
                  </div>
                </div>

                <div className="consultPrivacy">
                  <span>✦</span>
                  <p>
                    Everything you share is held in complete confidence.
                    This information is seen only by Wendy Bien-Aime, RN,
                    and is used solely to prepare for your consultation.
                  </p>
                </div>

                <div className="consultNav">
                  <button className="consultBack" onClick={() => setStep(3)}>← Back</button>
                  <button
                    className="goldButton"
                    onClick={submit}
                    disabled={status === "submitting" || !form.biggestConcerns || !form.successLooksLike}
                  >
                    {status === "submitting" ? "Sending..." : "Submit Request →"}
                  </button>
                </div>

                {status === "error" && (
                  <p className="consultError">
                    Something went wrong. Please call us directly at{" "}
                    <a href="tel:8435327181">(843) 532-7181</a>.
                  </p>
                )}
              </div>
            )}

          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
