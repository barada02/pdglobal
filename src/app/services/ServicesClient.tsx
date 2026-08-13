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
      tagline: "Integrated, competency-based systems that connect Business strategy to people decisions and actions.",
      items: [
        "Competency Models — Techno-functional, Behavioral, Digital, Organizational",
        "Behaviorally Anchored Rating Scales (BARS)",
        "Integrated HRM: Talent acquisition, Performance, Learning, Succession",
        "Skills-based Organization (SBO) and Skills frameworks & Ontology",
        "Job Architecture, Job & position analysis, Descriptions",
        "Talent Review and Calibration",
        "Balanced Scorecard (BSC) and strategy mapping",
        "MBO and BSC-based Performance Management Process",
        "Succession management and Leadership pipeline creation",
        "High-Potential (HiPo) identification and Fast-track programs",
        "Career management — career tracks and dominant cross-overs",
      ],
    },
    {
      id: "02",
      title: "Talent & Leadership Assessment",
      tagline: "Selection and developmental assessments — psychometrics, simulations, 360°, assessment centres.",
      items: [
        "Structured interview guides — Behavioral Event Interviews (BEI)",
        "Business simulation — In-basket / Inbox exercises",
        "Situational Judgment Exercises",
        "Assessment Centers",
        "Psychometrics: CPI, OPQ, 16-PF, Hogan MVPI",
        "Managerial Capability Assessment Inventory (MCAI)",
        "Reliability, validity & standardization analysis",
        "Adverse impact analysis — EEOC compliance",
        "Training for TA teams and hiring managers on assessment tools",
        "Assessment / Development Centers — design and delivery",
        "360° assessment and feedback",
        "Leadership Style Inventory / Leadership Index",
        "Personal Effectiveness (PE) Assessment Tool",
        "Motivational Analysis of Organization Style (MAO-S)",
        "Delegation Assessment Questionnaire (DAQ)",
        "Competency Assessment Tools — decision style, networking style",
        "DEI tools — Intercultural Conflict Style & Development Inventory",
      ],
    },
    {
      id: "03",
      title: "Organization Effectiveness & Workforce of Future",
      tagline: "Structured interventions that reshape how organizations operate and adapt in AI Era.",
      items: [
        "Organization Diagnostics & Health Studies (OHS)",
        "Organization Design, Operating model & Structure",
        "Work / job design",
        "Workforce of the Future strategy",
        "Skills-based Organization (SBO)",
        "Culture and climate measurement",
        "Workflows & Future Ready Work Characteristic Model",
        "Engagement measurement and Employee NPS",
        "Employee listening and Experience, Equity Variance Index (EVI)",
        "Support function effectiveness analysis",
        "Organizational Agility measurement",
        "Organizational Innovation measurement",
        "Role effectiveness & change management process",
        "PCMM implementation and assessment",
      ],
    },
    {
      id: "04",
      title: "Organizational Learning & Leadership Development",
      tagline: "Building capability that compounds — at every level of the organization.",
      items: [
        "Leadership development systems & strategies",
        "Leadership / managerial Assessment & Development Centers",
        "360° feedback and Individual Development Plans (IDPs)",
        "Learning & Development strategy and needs identification",
        "Mentoring & coaching framework — MAP, evaluation",
        "Construction of psychometric and competency assessment tools",
        "Leadership assessment — BEI, simulations, CPI, TAT, projective",
        "Impact evaluation via the Kirkpatrick Model",
        "Career-fit guidance — \"Does Consulting Suit You?\"",
      ],
    },
    {
      id: "05",
      title: "People & Talent Analytics",
      tagline: "Turning workforce data into business value — analytics, AI, and decision intelligence.",
      items: [
        "People Analytics and Predictive Modeling",
        "HR data management",
        "Talent, engagement & attrition analytics",
        "Predictive attrition modeling",
        "Training, NPS, performance & competency analytics",
        "Succession analytics",
        "HR metrics, KPIs, standard reporting and dashboards",
        "Advanced reporting",
        "Text analytics & data mining (NLP via IBM SPSS Modeler)",
        "Employee listening — engagement and Employee life-cycle surveys",
        "Impact assessment and business value measurement",
        "Generative AI applications for talent management",
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
                  Each cluster below is deployed independently or as an integrated program depending upon the requirements. We scope every engagement around the business commercial outcomes you are accountable for — not a fixed methodology we ask you to adopt.
                </p>
                <p className={styles.overviewText}>
                  Explore the five practice clusters areas to see the specific instruments, frameworks, and deliverables involved.
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

                    <div className={styles.panelNav}>
                      {clusters.findIndex((cl) => cl.id === activeTab) > 0 && (
                        <button
                          type="button"
                          className={styles.navLinkBtn}
                          onClick={() => setActiveTab(clusters[clusters.findIndex((cl) => cl.id === activeTab) - 1].id)}
                        >
                          &larr; Previous
                        </button>
                      )}
                      {clusters.findIndex((cl) => cl.id === activeTab) < clusters.length - 1 && (
                        <button
                          type="button"
                          className={styles.navLinkBtn}
                          onClick={() => setActiveTab(clusters[clusters.findIndex((cl) => cl.id === activeTab) + 1].id)}
                        >
                          Next <span className="arrow">&rarr;</span>
                        </button>
                      )}
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

            {/* AI Fluency Diagnostic Tool */}
            <Reveal delay={100} className={styles.aiFluencyBox}>
              <div className={styles.aiFluencyHeader}>
                <span className={styles.focusBadge}>Diagnostic Instrument</span>
                <h2 className={styles.aiFluencyTitle}>AI Fluency Diagnostic Tool</h2>
                <p className={styles.aiFluencySubtitle}>
                  <strong>Purpose:</strong> Measure readiness, confidence, responsible use, and day-to-day application of AI.
                </p>
              </div>

              <div className={styles.aiFluencyGrid}>
                <div className={styles.aiPanel}>
                  <h3 className={styles.aiPanelTitle}>5 Dimensions:</h3>
                  <ul className={styles.aiDimensionList}>
                    <li><strong>1. AI Foundations & Concepts</strong></li>
                    <li><strong>2. Workflow Application & Daily Use</strong></li>
                    <li><strong>3. Responsible AI, Trust & Judgment</strong></li>
                    <li><strong>4. Prompting & Interaction Skills</strong></li>
                    <li><strong>5. Performance Uplift & Adoption Behavior</strong></li>
                  </ul>
                </div>

                <div className={styles.aiPanel}>
                  <h3 className={styles.aiPanelTitle}>ENTERPRISE-LEVEL SCORE (Across All 5 Dimensions):</h3>
                  <div className={styles.aiScoreList}>
                    <div className={styles.aiScoreItem}>
                      <span className={styles.aiScoreHeader}>0-20 — Awareness</span>
                      <span className={styles.aiScoreDesc}>Minimal understanding; cannot apply independently</span>
                    </div>
                    <div className={styles.aiScoreItem}>
                      <span className={styles.aiScoreHeader}>21-40 — Basic Use</span>
                      <span className={styles.aiScoreDesc}>Simple tasks with guidance</span>
                    </div>
                    <div className={styles.aiScoreItem}>
                      <span className={styles.aiScoreHeader}>41-60 — Functional Use</span>
                      <span className={styles.aiScoreDesc}>Independent daily use</span>
                    </div>
                    <div className={styles.aiScoreItem}>
                      <span className={styles.aiScoreHeader}>61-80 — Advanced Use</span>
                      <span className={styles.aiScoreDesc}>Optimizes workflows; coaches others</span>
                    </div>
                    <div className={styles.aiScoreItem}>
                      <span className={styles.aiScoreHeader}>81-100 — Expert Use</span>
                      <span className={styles.aiScoreDesc}>Redesigns processes; drives adoption</span>
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
