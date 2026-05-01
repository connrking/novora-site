"use client";

import { useState } from "react";

const SECTORS = [
  "DeFi",
  "DePIN",
  "Consumer",
  "AI",
  "Infra",
  "Fintech/Payments",
];

const ECOSYSTEMS = [
  "Solana",
  "Ethereum",
  "Hyperliquid",
  "Base",
  "Arbitrum",
  "Native",
  "Monad",
  "Other",
];

const TOKEN_STAGES = ["Token (Live)", "Pre-TGE"];

const IR_PRACTICES = [
  "We have no formal IR",
  "Basic: blog/X updates only",
  "Moderate: regular reporting + community calls",
  "Advanced: dedicated IR page, investor materials, data dashboards",
];

export default function ApplyPage() {
  const [form, setForm] = useState({
    protocolName: "",
    ticker: "",
    website: "",
    contactName: "",
    contactEmail: "",
    sector: "",
    ecosystem: "",
    tokenStage: "",
    currentIR: "",
    improvementGoals: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  if (status === "success") {
    return (
      <main className="apply-page">
        <div className="apply-container">
          <div className="success-state">
            <div className="success-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="#7C6EF0" opacity="0.1" />
                <path
                  d="M16 24L22 30L32 18"
                  stroke="#7C6EF0"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1>Application received</h1>
            <p className="success-sub">
              Your IR Health Check is under review. We&apos;ll deliver your
              private score and pillar breakdown within 5 business days.
            </p>
            <p className="success-detail">
              Look for an email from{" "}
              <strong>connor@novora.co</strong> with your results.
            </p>
            <a href="/" className="back-link">
              &larr; Back to leaderboard
            </a>
          </div>
        </div>

        <style jsx>{`
          .apply-page {
            min-height: 100vh;
            background: #fafaf9;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem 1rem;
          }
          .apply-container {
            max-width: 560px;
            width: 100%;
          }
          .success-state {
            text-align: center;
            padding: 3rem 2rem;
          }
          .success-icon {
            margin-bottom: 1.5rem;
          }
          .success-state h1 {
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-size: 1.75rem;
            font-weight: 600;
            color: #1a1a1a;
            margin: 0 0 1rem;
          }
          .success-sub {
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-size: 1rem;
            line-height: 1.6;
            color: #555;
            margin: 0 0 0.75rem;
          }
          .success-detail {
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-size: 0.875rem;
            color: #888;
            margin: 0 0 2rem;
          }
          .success-detail strong {
            color: #555;
          }
          .back-link {
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-size: 0.875rem;
            color: #7c6ef0;
            text-decoration: none;
          }
          .back-link:hover {
            text-decoration: underline;
          }
        `}</style>
      </main>
    );
  }

  return (
    <>
      
    <main className="apply-page">
      <div className="apply-container">
        {/* Header */}
        <div className="apply-header">
          <div className="brand-mark">
            <a href="/ir" style={{display:"flex",alignItems:"center",gap:8,textDecoration:"none"}}>
              <svg height={18} viewBox="130 150 430 110" fill="#1A1A2E" xmlns="http://www.w3.org/2000/svg">
                <path d="M162.61,202.42c.68-14.62,12.72-26.27,27.51-26.27s26.82,11.65,27.51,26.27h12.54v-42.46h-80.09v42.46h12.54Z"/>
                <rect x="150.07" y="207.66" width="80.09" height="32.39"/>
                <path d="M294.29,198.84c0-10.47-4.84-14.13-10.08-14.13s-15.91,3.46-15.91,19.07v22.92h-9.58v-49.4h9.58v9.88c2.07-7.01,8.5-10.97,16.6-10.97,10.67,0,18.97,6.72,18.97,22.63v27.86h-9.58v-27.86Z"/>
                <path d="M336.46,176.21c14.33,0,25.99,11.66,25.99,25.79s-11.66,25.79-25.99,25.79-25.89-11.46-25.89-25.79,11.66-25.79,25.89-25.79ZM336.46,219.29c9.09,0,16.4-7.71,16.4-17.19s-7.31-17.39-16.4-17.39-16.3,7.81-16.3,17.39,7.31,17.19,16.3,17.19Z"/>
                <path d="M391.9,226.7h-10.87l-19.07-49.4h10.08l14.43,38.83,14.43-38.83h10.08l-19.07,49.4Z"/>
                <path d="M436.37,176.21c14.33,0,25.99,11.66,25.99,25.79s-11.66,25.79-25.99,25.79-25.89-11.46-25.89-25.79,11.66-25.79,25.89-25.79ZM436.37,219.29c9.09,0,16.4-7.71,16.4-17.19s-7.31-17.39-16.4-17.39-16.3,7.81-16.3,17.39,7.31,17.19,16.3,17.19Z"/>
                <path d="M479.34,188.46c1.68-7.81,7.11-12.25,13.24-12.25,1.78,0,3.16.49,4.54,1.09v9.39c-1.58-.89-3.46-1.28-5.24-1.28-3.26,0-12.55,1.58-12.55,22.63v18.67h-9.58v-49.4h9.58v11.17Z"/>
                <path d="M522.46,176.21c6.62,0,13.14,2.27,17.88,8.99v-7.9h9.58v49.4h-9.58v-7.9c-4.74,6.72-11.26,8.99-17.88,8.99-14.82,0-24.5-11.66-24.5-25.79s9.68-25.79,24.5-25.79ZM523.65,184.71c-10.28,0-16.11,7.9-16.11,17.29s5.83,17.29,16.11,17.29,16.8-7.31,16.89-17.29c-.1-9.98-6.92-17.29-16.89-17.29Z"/>
              </svg>
              <span style={{fontSize:13,fontWeight:500,color:"rgba(26,26,46,0.4)",letterSpacing:"0.02em",fontFamily:"'Helvetica Neue',Helvetica,Arial,sans-serif"}}>IR Score</span>
            </a>
          </div>
          <h1>Apply for Your Score</h1>
          <p className="subtitle">
            Request the Novora IR Score for your protocol.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="apply-form">
          {/* Protocol Info */}
          <fieldset>
            <legend>Protocol</legend>

            <div className="field-row">
              <div className="field">
                <label htmlFor="protocolName">Protocol name</label>
                <input
                  id="protocolName"
                  name="protocolName"
                  type="text"
                  required
                  placeholder="e.g. Meteora"
                  value={form.protocolName}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="ticker">Token ticker</label>
                <input
                  id="ticker"
                  name="ticker"
                  type="text"
                  required
                  placeholder="e.g. MET"
                  value={form.ticker}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="url"
                required
                placeholder="https://yourprotocol.xyz"
                value={form.website}
                onChange={handleChange}
              />
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="sector">Sector</label>
                <select
                  id="sector"
                  name="sector"
                  required
                  value={form.sector}
                  onChange={handleChange}
                >
                  <option value="">Select sector</option>
                  {SECTORS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="ecosystem">Ecosystem</label>
                <select
                  id="ecosystem"
                  name="ecosystem"
                  required
                  value={form.ecosystem}
                  onChange={handleChange}
                >
                  <option value="">Select ecosystem</option>
                  {ECOSYSTEMS.map((e) => (
                    <option key={e} value={e}>
                      {e}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="field">
              <label htmlFor="tokenStage">Token stage</label>
              <select
                id="tokenStage"
                name="tokenStage"
                required
                value={form.tokenStage}
                onChange={handleChange}
              >
                <option value="">Select stage</option>
                {TOKEN_STAGES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </fieldset>

          {/* Contact */}
          <fieldset>
            <legend>Your contact</legend>
            <div className="field-row">
              <div className="field">
                <label htmlFor="contactName">Name</label>
                <input
                  id="contactName"
                  name="contactName"
                  type="text"
                  required
                  placeholder="Full name"
                  value={form.contactName}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="contactEmail">Email</label>
                <input
                  id="contactEmail"
                  name="contactEmail"
                  type="email"
                  required
                  placeholder="you@protocol.xyz"
                  value={form.contactEmail}
                  onChange={handleChange}
                />
              </div>
            </div>
          </fieldset>

          {/* IR Assessment */}
          <fieldset>
            <legend>Current IR practices</legend>

            <div className="field">
              <label htmlFor="currentIR">
                How would you describe your IR today?
              </label>
              <select
                id="currentIR"
                name="currentIR"
                required
                value={form.currentIR}
                onChange={handleChange}
              >
                <option value="">Select one</option>
                {IR_PRACTICES.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="improvementGoals">
                What are you hoping to improve?
              </label>
              <textarea
                id="improvementGoals"
                name="improvementGoals"
                rows={4}
                placeholder="e.g. We want to attract institutional holders but don't know where to start with IR materials, reporting cadence, or investor communication."
                value={form.improvementGoals}
                onChange={handleChange}
              />
            </div>
          </fieldset>

          {/* Submit */}
          {status === "error" && <p className="error-msg">{errorMsg}</p>}

          <button
            type="submit"
            className="submit-btn"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Submitting..." : "Submit application"}
          </button>

          <p className="fine-print">
            Your score is delivered privately. Nothing is published without your
            consent.
          </p>
        </form>

        {/* Footer */}
        <footer className="apply-footer">
          <span>Novora Holdings LLC</span>
          <a href="/ir">novora.co/ir</a>
        </footer>
      </div>

      <style jsx>{`
        .apply-page {
          min-height: 100vh;
          background: #fafaf9;
          display: flex;
          justify-content: center;
          padding: 3rem 1rem 4rem;
        }
        .apply-container {
          max-width: 560px;
          width: 100%;
        }

        /* Header */
        .apply-header {
          margin-bottom: 2.5rem;
        }
        .brand-mark {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }
        .purple-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #7c6ef0;
        }
        .brand-text {
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: #7c6ef0;
        }
        .apply-header h1 {
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 1.75rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 0.75rem;
          line-height: 1.2;
        }
        .subtitle {
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 0.9375rem;
          line-height: 1.6;
          color: #666;
          margin: 0;
        }

        /* Form */
        .apply-form {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        fieldset {
          border: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        legend {
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #999;
          margin-bottom: 0.25rem;
        }
        .field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        @media (max-width: 480px) {
          .field-row {
            grid-template-columns: 1fr;
          }
        }
        .field {
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
        }
        label {
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 0.8125rem;
          font-weight: 500;
          color: #333;
        }
        input,
        select,
        textarea {
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 0.875rem;
          padding: 0.625rem 0.75rem;
          border: 1px solid #ddd;
          border-radius: 6px;
          background: #fff;
          color: #1a1a1a;
          transition: border-color 0.15s;
          outline: none;
        }
        input:focus,
        select:focus,
        textarea:focus {
          border-color: #7c6ef0;
          box-shadow: 0 0 0 3px rgba(124, 110, 240, 0.08);
        }
        input::placeholder,
        textarea::placeholder {
          color: #bbb;
        }
        textarea {
          resize: vertical;
          min-height: 80px;
        }
        select {
          cursor: pointer;
        }

        /* Submit */
        .error-msg {
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 0.8125rem;
          color: #d44;
          margin: 0;
          padding: 0.5rem 0.75rem;
          background: #fef2f2;
          border-radius: 6px;
        }
        .submit-btn {
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 0.9375rem;
          font-weight: 600;
          padding: 0.875rem 1.5rem;
          background: #7c6ef0;
          color: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.15s, opacity 0.15s;
        }
        .submit-btn:hover {
          background: #6b5ce0;
        }
        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .fine-print {
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 0.75rem;
          color: #aaa;
          text-align: center;
          margin: 0;
        }

        /* Footer */
        .apply-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid #eee;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 0.75rem;
          color: #aaa;
        }
        .apply-footer a {
          color: #7c6ef0;
          text-decoration: none;
        }
        .apply-footer a:hover {
          text-decoration: underline;
        }
      `}</style>
    </main>
    </>
  );
}
