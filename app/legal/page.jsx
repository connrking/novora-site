"use client";
import { C, F } from "@/components/tokens";
import FadeIn from "@/components/FadeIn";

const S = {
  h2: { fontFamily: F.h, fontSize: 20, fontWeight: 500, color: C.white, margin: "48px 0 16px", letterSpacing: "-0.01em" },
  p: { fontFamily: F.h, fontSize: 14, lineHeight: 1.8, color: C.gray300, fontWeight: 300, margin: "0 0 16px" },
};

export default function LegalPage() {
  return (
    <div>
      <section className="section-pad hero-v-pad" style={{ padding: "120px 80px 100px", background: C.bg }}>
        <FadeIn>
          <div style={{ maxWidth: 720 }}>
            <h1 className="legal-h1" style={{ fontFamily: F.h, fontSize: 48, fontWeight: 300, color: C.white, letterSpacing: "-0.02em", margin: "0 0 8px" }}>Legal</h1>
            <p style={{ fontFamily: F.h, fontSize: 13, color: C.gray400, margin: "0 0 60px" }}>Effective Date: May 1, 2025</p>

            <h2 style={S.h2}>No Representation or Warranties</h2>
            <p style={S.p}>Views expressed in posts (including podcasts, videos, articles, and social media) are those of the individual Novora Holdings LLC (&ldquo;Novora&rdquo;) personnel quoted therein and are not the views of Novora or its respective affiliates and/or subsidiaries.</p>
            <p style={S.p}>Novora is a trade name referring to a private holdings vehicle and personal entity, and does not make any representations that it is a licensed investment manager, registered investment advisor, or registered broker-dealer.</p>
            <p style={S.p}>The posts are not directed to any investor or potential investor, and do not constitute an offer to sell or a solicitation of an offer to buy any securities and may not be used or relied upon in evaluating the merits of any investment. The posts are not intended to be, and must not be taken as, a basis for any investment decision. Past performance is not indicative of future results. None of what we discuss publicly is meant to be construed as financial advice and we make our best efforts to disclose conflicts of interest where applicable.</p>
            <p style={S.p}>The contents herein — and available on all public Novora online social media accounts, platforms, and sites — should not be construed as or relied upon in any manner as investment, legal, tax, or other advice. You should consult your own advisers as to legal, business, tax, and other related matters concerning any investment.</p>
            <p style={{ ...S.p, fontSize: 12, color: C.gray400, letterSpacing: "0.01em" }}>THIS WEBSITE AND THE INFORMATION CONTAINED HEREIN ARE PROVIDED &ldquo;AS IS.&rdquo; NEITHER NOVORA NOR ANY OF ITS AFFILIATES IS PROVIDING ANY WARRANTIES AND REPRESENTATIONS REGARDING THIS WEBSITE. NOVORA AND ITS AFFILIATES DISCLAIM ALL WARRANTIES AND REPRESENTATIONS OF ANY KIND WITH REGARD TO THIS WEBSITE, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT OF THIRD-PARTY RIGHTS, FREEDOM FROM VIRUSES OR OTHER HARMFUL CODE, OR FITNESS FOR A PARTICULAR PURPOSE. NOVORA AND ITS AFFILIATES DO NOT WARRANT THE ACCURACY, ADEQUACY, OR COMPLETENESS OF THE INFORMATION AND MATERIALS CONTAINED ON THIS WEBSITE AND EXPRESSLY DISCLAIM LIABILITY FOR ERRORS OR OMISSIONS IN THE MATERIALS AND INFORMATION.</p>

            <h2 style={S.h2}>Advisory Services Only</h2>
            <p style={S.p}>Novora provides strategic advisory and consulting services only. Novora does not act as a broker-dealer, placement agent, or finder. Novora does not receive transaction-based compensation, success fees, or commissions tied to fundraising outcomes. Novora does not provide personalized investment advice or recommendations. Novora does not custody client assets or execute securities transactions. Novora does not guarantee fundraising results, token performance, or exchange listings.</p>
            <p style={S.p}>Engagements are structured on a fixed retainer, hourly, or project-based fee basis. Compensation is not contingent on capital raised, fundraising success, or securities transactions. Any advisory equity or token allocations received by Novora are compensation for ongoing strategic advisory services and are not contingent on, tied to, or a function of capital raised by the client. Novora does not solicit investors on behalf of clients and does not participate in the negotiation or structuring of securities transactions.</p>

            <h2 style={S.h2}>Important Disclosure</h2>
            <p style={S.p}>All investments listed reflect personal proprietary capital deployed by Novora leadership. Novora does not manage external capital and does not offer investment products or investment advisory services. Advisory services are provided independently of any investment activity.</p>
            <p style={S.p}>Novora does not trade around short-term announcements, investor relations deliverables, or market communications related to advisory clients. Where relevant, potential conflicts of interest are disclosed directly to partner teams. Our primary mandate is to help early-stage teams operate with discipline, clarity, and credibility in public crypto markets.</p>

            <h2 style={S.h2}>General Information Only</h2>
            <p style={S.p}>All materials, research, and investment theses provided by Novora are for informational and educational purposes only and do not constitute: investment, legal, tax, or financial advice; an offer to sell or solicitation to purchase securities or tokens; or a recommendation to buy, sell, or hold any asset.</p>

            <h2 style={S.h2}>No Guarantees</h2>
            <p style={S.p}>Past performance and case studies do not guarantee future results. Cryptocurrency and digital asset markets are highly volatile and risky. Recipients should conduct their own due diligence and consult with qualified professionals before making any investment or business decisions.</p>

            <h2 style={S.h2}>Forward-Looking Statements</h2>
            <p style={S.p}>This website and associated materials may contain forward-looking statements subject to risks and uncertainties. Actual results may differ materially from projections. Forward-looking statements are based on current expectations and assumptions as of their date of publication and Novora undertakes no obligation to update them.</p>

            <h2 style={S.h2}>Limitation of Liability</h2>
            <p style={S.p}>The information contained herein in this website shall be accessed and used at the user&apos;s own risk and to the fullest extent permissible and subject and pursuant to all applicable laws and regulations. Novora and its affiliates, subsidiaries, employees, agents, partners, principals, and representatives shall not be liable for any direct, indirect, incidental, special, exemplary, consequential, or other damages whatsoever (including but not limited to liability for loss of use, data, or profits), including but not limited to contract, negligence, or other tortious actions, arising out of or in connection with this site, even if any of Novora and its affiliates, subsidiaries, employees, agents, partners, principals, and representatives has been advised of the possibility of such damages or losses that were, are being, or will be incurred.</p>

            <h2 style={S.h2}>Intellectual Property</h2>
            <p style={S.p}>All content, trademarks, logos, and intellectual property displayed on this website are the property of Novora Holdings LLC or their respective owners. No license or right is granted by implication or otherwise to use any trademark, logo, or intellectual property without the prior written consent of the owner. The Novora IR Score framework, methodology, and associated scoring systems are proprietary to Novora.</p>

            <h2 style={S.h2}>Third-Party Links & Content</h2>
            <p style={S.p}>This website may contain links to third-party websites, platforms, or content. Novora does not endorse, control, or assume responsibility for the content, privacy policies, or practices of any third-party sites. Access to third-party content is at your own risk.</p>

            <h2 style={S.h2}>Indemnification</h2>
            <p style={S.p}>You agree to indemnify, defend, and hold harmless Novora Holdings LLC, its affiliates, officers, directors, employees, agents, and representatives from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or relating to your use of the website, violation of these terms, or infringement of any third-party rights.</p>

            <h2 style={S.h2}>Legal Notices</h2>
            <p style={S.p}>You are responsible for all information, content, and materials you contribute, disclose, or share in any manner on or through the website and its associated services and you represent and warrant you have all rights necessary to do so. You are responsible for all your activity in connection with the website and its associated services.</p>

            <h2 style={S.h2}>Governing Law</h2>
            <p style={S.p}>These terms and any disputes arising out of or related to this website shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law principles. Any legal action or proceeding shall be brought exclusively in the courts located in New York County, New York.</p>

            <h2 style={S.h2}>Modifications</h2>
            <p style={S.p}>Novora reserves the right to modify, update, or revise these terms at any time without prior notice. Continued use of this website following any changes constitutes acceptance of the revised terms. The most current version will always be available on this page.</p>

            <div style={{ marginTop: 60, paddingTop: 32, borderTop: `0.5px solid ${C.border}` }}>
              <p style={{ fontFamily: F.h, fontSize: 12, color: C.gray500 }}>© 2025–2026 Novora Holdings LLC. All rights reserved.</p>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
