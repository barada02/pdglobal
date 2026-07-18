"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./approach.module.css";

export default function Approach() {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      num: "01",
      title: "Inquiry & Exploration",
      tagline: "Understanding context and discovering opportunities.",
      description:
        "We begin with a deep exploration of the client’s current situation, operating challenges, and strategic goals. This phase focuses on alignment and surfacing meaningful, outcome-driven opportunities for intervention.",
      actions: [
        "Initial leadership consultations & interviews",
        "Context and structural scoping",
        "Alignment analysis of current HRM & talent architectures",
        "Defining preliminary engagement boundaries & objectives",
      ],
      deliverable: "Discovery & Alignment Brief",
    },
    {
      num: "02",
      title: "Diagnosis & Synthesis",
      tagline: "Collaborative fact-finding and science-backed auditing.",
      description:
        "We gather and synthesize data using our proprietary diagnostics, employee surveys, and structural analysis. We identify strengths, improvement areas, systemic challenges, and high-impact indicators.",
      actions: [
        "Deploying Org Health Diagnostics & FRWCM models",
        "Employee surveys, structured focus groups, and interviews",
        "Socio-technical and workflow friction analysis",
        "Synthesizing qualitative & quantitative data inputs",
      ],
      deliverable: "Comprehensive Diagnostic Report & Insights Package",
    },
    {
      num: "03",
      title: "Insights & Guidance",
      tagline: "Aligning on findings and calibrating performance indicators.",
      description:
        "We share our detailed diagnostic findings with the executive leadership team. Together, we calibrate the project scope, prioritize focus areas, and define target performance indicators and success factors.",
      actions: [
        "Executive presentation of diagnostic findings",
        "Co-calibration of capability priority focus areas",
        "Establishing Key Success Indicators (KSIs) & baseline metrics",
        "Defining detailed project scope and governance boundary",
      ],
      deliverable: "Strategic Roadmap & KSI Agreement",
    },
    {
      num: "04",
      title: "Engagement & Solutions",
      tagline: "Co-designing and executing custom organizational interventions.",
      description:
        "We co-design and execute custom interventions. We do not use cookie-cutter solutions; every structure, competency model, assessment guide, and analytics dashboard is custom-tailored.",
      actions: [
        "Co-designing custom competency, skills, or assessment models",
        "Establishing operational workflows, RACI matrices, and schedules",
        "Implementing L&D interventions or coaching frameworks",
        "Creating custom dashboards and analytics engines",
      ],
      deliverable: "Functional Solutions, Process Frameworks, & Assets",
    },
    {
      num: "05",
      title: "Evaluation & Measurement",
      tagline: "Validating impact and recommendations for continuous growth.",
      description:
        "We assess project progress and operational health against target objectives and KSIs. We deliver quantitative value proofs and structured advice to sustain organizational performance.",
      actions: [
        "Assessing post-intervention progress against baseline metrics",
        "Measuring Net Engagement Score (NES) and eNPS deltas",
        "Kirkpatrick L&D impact evaluations",
        "Providing long-term strategic roadmaps for continuous optimization",
      ],
      deliverable: "Operational Impact & ROI Report",
    },
  ];

  return (
    <>
      <Header />
      
      <main className={styles.main}>
        {/* Glow Effects */}
        <div className="glowing-bg" style={{ top: "20%", left: "10%" }}></div>
        <div className="glowing-bg" style={{ top: "60%", right: "10%" }}></div>

        {/* Hero */}
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.subtitle}>Methodology</span>
            <h1 className={styles.title}>Our Engagement Model</h1>
            <p className={styles.lead}>
              A diagnostic, solutions-led engagement methodology designed to co-create sustainable organizational value.
            </p>
          </div>
        </section>

        {/* Interactive Timeline Section */}
        <section className={styles.timelineSection}>
          <div className="container">
            {/* Timeline Progress Track */}
            <div className={styles.trackWrapper}>
              <div className={styles.progressTrack}>
                <div
                  className={styles.progressBar}
                  style={{ width: `${(activePhase / (phases.length - 1)) * 100}%` }}
                ></div>
                {phases.map((phase, idx) => (
                  <button
                    key={phase.num}
                    className={`${styles.trackNode} ${
                      idx <= activePhase ? styles.activeNode : ""
                    } ${idx === activePhase ? styles.currentNode : ""}`}
                    onClick={() => setActivePhase(idx)}
                    aria-label={`Go to Phase ${phase.num}`}
                  >
                    <span className={styles.nodeNum}>{phase.num}</span>
                    <span className={styles.nodeTitle}>{phase.title.split(" & ")[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Display Active Phase Card */}
            <div className={styles.phaseCard}>
              <div className={styles.cardLeft}>
                <span className={styles.phaseBadge}>Phase {phases[activePhase].num}</span>
                <h2 className={styles.phaseTitle}>{phases[activePhase].title}</h2>
                <h3 className={styles.phaseTagline}>{phases[activePhase].tagline}</h3>
                <p className={styles.phaseDesc}>{phases[activePhase].description}</p>
                
                <div className={styles.deliverableBox}>
                  <span className={styles.delLabel}>Key Deliverable</span>
                  <span className={styles.delVal}>{phases[activePhase].deliverable}</span>
                </div>
              </div>

              <div className={styles.cardRight}>
                <h4 className={styles.listTitle}>Key Activities</h4>
                <ul className={styles.activityList}>
                  {phases[activePhase].actions.map((act, idx) => (
                    <li key={idx} className={styles.activityItem}>
                      <div className={styles.activityDot}></div>
                      <span className={styles.activityText}>{act}</span>
                    </li>
                  ))}
                </ul>

                {/* Phase navigation footer */}
                <div className={styles.navigationControls}>
                  <button
                    onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
                    disabled={activePhase === 0}
                    className={styles.navBtn}
                  >
                    &larr; Previous Phase
                  </button>
                  <button
                    onClick={() => setActivePhase(Math.min(phases.length - 1, activePhase + 1))}
                    disabled={activePhase === phases.length - 1}
                    className={styles.navBtn}
                  >
                    Next Phase &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
