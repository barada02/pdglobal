"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import OrgNetworkVisual from "@/components/OrgNetworkVisual";
import EditorialImage from "@/components/EditorialImage";
import styles from "./services.module.css";

export default function ServicesClient() {
  const [activeTab, setActiveTab] = useState("01");

  // Allow linking directly to clusters via URL hash
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.replace("#cluster-", "");
      if (["01", "02", "03", "04", "05"].includes(hash)) {
        setActiveTab(hash);
      }
    }
  }, []);

  const clusters = [
    {
      id: "01",
      title: "Talent Management & Strategic HRM",
      tagline: "Aligning human capital architectures with business strategy.",
      items: [
        "Competency Models (Techno-functional, behavioral, digital, and organizational)",
        "Behaviorally Anchored Rating Scales (BARS) design",
        "Skills-Based Organization (SBO) design and skills inventory frameworks",
        "Integrated HRM systems (acquisition, performance, learning, and succession)",
        "Job & position analysis, description crafting, and band/grade evaluations",
        "Senior management talent review, calibration, and high-potential (HiPo) fast-track programs",
        "Balanced Scorecard (BSC) & strategy mapping",
        "MBO and BSC-based performance management systems",
        "Succession management and leadership pipeline creation",
        "Career management systems, career tracks, and dominant cross-over mapping",
      ],
    },
    {
      id: "02",
      title: "Talent & Leadership Assessment",
      tagline: "Rigorous science-backed diagnostics for hiring and growth.",
      items: [
        "Assessment & Development Centers - custom design and expert delivery",
        "Behavioral Event Interviews (BEI) and structured interview guides",
        "Custom Business Simulations & In-basket / Inbox exercises",
        "Situational Judgment Exercises (SJE) tailored to role levels",
        "Global Psychometrics expertise: CPI, OPQ, 16-PF, Hogan (MVPI, HDS, HPI)",
        "Managerial Capability Assessment Inventory (MCAI) for selection & development",
        "360° feedback systems & Individual Development Plans (IDPs)",
        "Reliability, validity, and standardisation analyses",
        "Adverse impact analysis & EEOC legal/regulatory compliance audits",
        "Training for Talent Acquisition teams and hiring managers on assessment tools",
        "DEI Assessment tools: Intercultural Conflict Style & Development Inventory",
        "Delegation Assessment Questionnaire (DAQ) & Motivational Analysis (MAO-S)",
      ],
    },
    {
      id: "03",
      title: "Organization Effectiveness & Future of Work",
      tagline: "Designing resilient structures, workflows, and culture models.",
      items: [
        "Organizational Health Diagnostics & Studies (OHS)",
        "Organization design, operating model restructuring, and alignment",
        "Work and Job redesign for future-ready performance",
        "Workforce of the Future strategic planning",
        "Future Ready Work Characteristics Model (FRWCM) assessment & mapping",
        "Culture, climate, and psychological accessibility measurement",
        "Net Engagement Score (NES) and Employee Net Promoter Score (eNPS)",
        "Comprehensive employee listening strategies",
        "Support function and shared services effectiveness analysis",
        "Customer Satisfaction Index (CSI) modeling and research",
        "Role effectiveness & structured Change Management processes",
        "PCMM (People Capability Maturity Model) implementation & pre-assessments",
        "Organizational innovation maturity measurement",
      ],
    },
    {
      id: "04",
      title: "Learning & Leadership Development",
      tagline: "Building compounding leadership capabilities at all levels.",
      items: [
        "Leadership development systems, strategies, and curricula",
        "Leadership & Managerial Assessment Centers for developmental tracking",
        "360° feedback alignment and Individual Development Plans (IDPs)",
        "Corporate Learning & Development (L&D) strategy and training needs analyses",
        "Mentoring and coaching frameworks - mapping, mentoring action plans (MAP), and evaluations",
        "Custom construction of proprietary psychometric and competency assessment instruments",
        "Advanced leadership assessments: BEI, simulations, CPI, TAT, projective tests",
        "Training impact evaluation using the Kirkpatrick Model",
        "Career-fit guidance programs (e.g. 'Does Consulting Suit You?' frameworks)",
      ],
    },
    {
      id: "05",
      title: "People & Talent Analytics",
      tagline: "Translating complex workforce data into commercial business value.",
      items: [
        "People Analytics function design, setup, and governance",
        "HR data management, clean-up, and architecture advisory",
        "Talent metrics, KPIs, executive reporting, and interactive dashboards",
        "Advanced predictive modeling for attrition, recruitment, and succession planning",
        "Training analytics, NPS analytics, and competency maturity tracking",
        "Text analytics & data mining (NLP via IBM SPSS Modeler & python toolsets)",
        "Comprehensive employee listening systems (engagement, exit, and lifecycle surveys)",
        "Consulting project business impact assessment & ROI measurement",
        "Generative AI applications in talent management and predictive decision intelligence",
      ],
    },
  ];

  return (
    <>
      <Header />
      
      <main className={styles.main}>
        {/* Glow Effects */}
        <div className="glowing-bg" style={{ top: "15%", left: "5%" }}></div>
        <div className="glowing-bg" style={{ top: "50%", right: "5%" }}></div>

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroVisualWrap}>
            <OrgNetworkVisual variant="accent" />
          </div>
          <div className="container">
            <Reveal>
              <span className={styles.subtitle}>Capabilities & Services</span>
              <h1 className={styles.title}>Our Practice Clusters</h1>
              <p className={styles.lead}>
                An integrated portfolio of people science, assessment engines, and analytics consulting to accelerate organization maturity.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Overview Section */}
        <section className={styles.overviewSection}>
          <div className="container">
            <div className={styles.overviewGrid}>
              <Reveal className={styles.overviewContent}>
                <h2 className={styles.overviewTitle}>Built around your business outcomes, not our toolkit.</h2>
                <p className={styles.overviewText}>
                  Each cluster below is deployed independently or as an integrated program. We scope every engagement around the commercial outcomes you are accountable for — not a fixed methodology we ask you to adopt.
                </p>
                <p className={styles.overviewText}>
                  Explore the five practice areas to see the specific instruments, frameworks, and deliverables involved.
                </p>
              </Reveal>
              <Reveal delay={120} className={styles.overviewImage}>
                <EditorialImage
                  src="https://images.unsplash.com/photo-1758873269035-aae0e1fd3422?q=80&w=1600&auto=format&fit=crop"
                  alt="Consulting team working through a strategy session on a whiteboard"
                  aspect="4/3"
                  sizes="(max-width: 900px) 100vw, 45vw"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Tabs section */}
        <section className={styles.tabsSection}>
          <div className="container">
            <div className={styles.tabHeaders}>
              {clusters.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveTab(c.id)}
                  className={`${styles.tabBtn} ${activeTab === c.id ? styles.activeTabBtn : ""}`}
                >
                  <span className={styles.tabNum}>{c.id}</span>
                  <span className={styles.tabTitle}>{c.title}</span>
                </button>
              ))}
            </div>

            {/* Active Tab Panel */}
            <div className={styles.tabPanel}>
              {clusters.map((c) => {
                if (c.id !== activeTab) return null;
                return (
                  <Reveal as="div" key={c.id} className={styles.panelContent}>
                    <div className={styles.panelHeader}>
                      <span className={styles.panelNum}>{c.id}</span>
                      <h2 className={styles.panelTitle}>{c.title}</h2>
                      <p className={styles.panelTagline}>{c.tagline}</p>
                    </div>

                    <div className={styles.panelItemsGrid}>
                      {c.items.map((item, idx) => (
                        <div key={idx} className={styles.serviceItemCard}>
                          <div className={styles.bulletIcon}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span className={styles.serviceText}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* FRWCM Special Focus Callout */}
        <section className={styles.frwcmFocusSection}>
          <div className="container">
            <Reveal className={styles.frwcmBox}>
              <div className={styles.frwcmHeader}>
                <span className={styles.focusBadge}>Proprietary Framework Focus</span>
                <h2 className={styles.frwcmTitle}>
                  Future Ready Work Characteristics Model (FRWCM)
                </h2>
                <p className={styles.frwcmSubtitle}>
                  Measure the future-readiness of work at task, role, workflow, and operating system levels.
                </p>
              </div>

              <div className={styles.frwcmGrid}>
                <div className={styles.frwcmLeft}>
                  <h3 className={styles.blockTitle}>7 Core Work Characteristics</h3>
                  <ol className={styles.charList}>
                    <li><strong>Skill Portfolio Richness</strong>: Diversity & complexity of required capabilities.</li>
                    <li><strong>Outcome Ownership & Value Line of Sight</strong>: Visualizing impact on commercial outcomes.</li>
                    <li><strong>Adaptive Autonomy</strong>: Flexible agency and decentralized decision-making.</li>
                    <li><strong>Human-Machine Synergy</strong>: Seamless AI & cognitive collaboration models.</li>
                    <li><strong>Cognitive Sustainability & Flow</strong>: Minimizing work fatigue, maximizing mental flow.</li>
                    <li><strong>Developmental Trajectory & Mobility</strong>: Career progression & skill liquidity.</li>
                    <li><strong>Networked Collaboration & Inclusion</strong>: Cross-boundary accessibility & psychological safety.</li>
                  </ol>
                </div>

                <div className={styles.frwcmRight}>
                  <h3 className={styles.blockTitle}>Maturity Scoring Engine</h3>
                  <p className={styles.blockDesc}>
                    Individual and organizational item-level responses are aggregated and normalized to a 0-100 scale, mapping directly into four maturity levels:
                  </p>
                  
                  <div className={styles.maturityScale}>
                    <div className={styles.maturityLevel}>
                      <span className={`${styles.levelColor} ${styles.levelEmerging}`}></span>
                      <div className={styles.levelInfo}>
                        <strong>Emerging (0–39)</strong>
                        <span>Traditional, siloed, or high-friction workflows.</span>
                      </div>
                    </div>
                    
                    <div className={styles.maturityLevel}>
                      <span className={`${styles.levelColor} ${styles.levelFoundational}`}></span>
                      <div className={styles.levelInfo}>
                        <strong>Foundational (40–59)</strong>
                        <span>Basic modernization and standard structures.</span>
                      </div>
                    </div>

                    <div className={styles.maturityLevel}>
                      <span className={`${styles.levelColor} ${styles.levelAdvanced}`}></span>
                      <div className={styles.levelInfo}>
                        <strong>Advanced (60–79)</strong>
                        <span>Agile structures with high digital & skills liquidity.</span>
                      </div>
                    </div>

                    <div className={styles.maturityLevel}>
                      <span className={`${styles.levelColor} ${styles.levelLeading}`}></span>
                      <div className={styles.levelInfo}>
                        <strong>Leading (80–100)</strong>
                        <span>Self-governing synergy with optimized human-AI flow.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
