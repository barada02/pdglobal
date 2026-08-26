"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import OrgNetworkVisual from "@/components/OrgNetworkVisual";
import EditorialImage from "@/components/EditorialImage";
import styles from "./approach.module.css";

export default function ApproachClient() {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      num: "01",
      title: "Inquiry & Exploration",
      tagline: "Understanding context and discovering opportunities.",
      description:
        "We begin with a deep exploration of the client’s current situation, operating challenges, and strategic goals. This phase focuses on alignment and surfacing meaningful, outcome-driven opportunities for intervention.",
      deliverable: "Discovery & Alignment Understanding and Brief",
    },
    {
      num: "02",
      title: "Diagnosis & Synthesis",
      tagline: "Collaborative fact-finding and science-backed auditing.",
      description:
        "We gather and synthesize data using our proprietary diagnostics, employee surveys, and structural analysis. We identify strengths, improvement areas, systemic challenges, and high-impact indicators.",
      deliverable: "Comprehensive Diagnostic Report & Insights Package",
    },
    {
      num: "03",
      title: "Insights & Recommendations",
      tagline: "Sharing findings, calibrating scope, and defining success factors and performance indicators.",
      description:
        "We share our detailed diagnostic findings with the executive leadership team. Together, we calibrate the project scope, prioritize focus areas, and define target performance indicators and success factors.",
      deliverable: "Strategic Roadmap",
    },
    {
      num: "04",
      title: "Engagement & Solutions",
      tagline: "Co-designing and executing custom organizational interventions.",
      description:
        "We co-design and execute custom interventions. We do not use cookie-cutter solutions; every structure, competency model, assessment guide, and analytics dashboard is custom-tailored.",
      deliverable: "Solutions, Process Frameworks, & Assets",
    },
    {
      num: "05",
      title: "Evaluation & Measurement",
      tagline: "Validating impact and recommendations for continuous growth.",
      description:
        "We assess project progress and operational health against target objectives and KSIs. We deliver quantitative value proofs and structured advice to sustain organizational performance.",
      deliverable: "Impact Measurement",
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
          <div className={styles.heroVisualWrap}>
            <OrgNetworkVisual variant="accent" />
          </div>
          <div className="container">
            <Reveal>
              <span className={styles.subtitle}>Approach</span>
              <h1 className={styles.title}>Our Engagement Model</h1>
              <p className={styles.lead}>
                A diagnostic & solutions-led engagement model.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Overview Section */}
        <section className={styles.overviewSection}>
          <div className="container">
            <div className={styles.overviewGrid}>
              <Reveal className={styles.overviewImage}>
                <EditorialImage
                  src="https://images.unsplash.com/photo-1573166826272-5acd0ef8f650?q=80&w=1600&auto=format&fit=crop"
                  alt="Consultant and client working through a diagnostic session"
                  aspect="4/3"
                  sizes="(max-width: 900px) 100vw, 45vw"
                />
              </Reveal>
              <Reveal delay={120} className={styles.overviewContent}>
                <h2 className={styles.overviewTitle}>Five phases. One continuous dialogue.</h2>
                <p className={styles.overviewText}>
                  Each phase below builds on the last, with your leadership and engagement team involved at every calibration point — from initial discovery through post-intervention measurement.
                </p>
                <p className={styles.overviewText}>
                  Select a phase to see the activities, deliverables, and time-scale involved.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Interactive Timeline Section */}
        <section className={styles.timelineSection}>
          <div className="container">
            {/* Timeline Progress Track */}
            <Reveal className={styles.trackWrapper}>
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
            </Reveal>

            {/* Display Active Phase Card */}
            <div className={styles.phaseCard} key={activePhase}>
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
                  Next Phase <span className="arrow">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
