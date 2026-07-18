import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function Home() {
  const capabilityPreviews = [
    {
      num: "01",
      title: "Talent Management & Strategic HRM",
      desc: "Connect business strategy to people decisions with competency models, BARS-based systems, skills frameworks, and robust succession pipelines.",
    },
    {
      num: "02",
      title: "Talent & Leadership Assessment",
      desc: "Deploy scientifically validated tools for selection and development, including custom business simulations, 360° reviews, and executive psychometrics.",
    },
    {
      num: "03",
      title: "Organization Effectiveness & Workforce of Future",
      desc: "Reshape organizational structures and modernize workflows through organizational health diagnostics and the Future Ready Work Characteristics Model.",
    },
    {
      num: "04",
      title: "Learning & Leadership Development",
      desc: "Build compounding capabilities at every level of management through custom leadership curriculums, mentoring systems, and Kirkpatrick impact evaluations.",
    },
    {
      num: "05",
      title: "People & Talent Analytics",
      desc: "Turn workforce data into strategic business value using advanced reporting, predictive attrition modeling, employee listening surveys, and Generative AI.",
    },
  ];

  return (
    <>
      <Header />
      
      <main className={styles.main}>
        {/* Glow Effects */}
        <div className="glowing-bg" style={{ top: "10%", left: "10%" }}></div>
        <div className="glowing-bg" style={{ top: "40%", right: "10%" }}></div>

        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className="container">
            <div className={styles.heroContent}>
              <span className={styles.heroBadge}>Performance Dimensions Global</span>
              <h1 className={styles.heroTitle}>
                Architecting &<br />
                <span className={styles.highlightText}>Accelerating</span> Organizations
              </h1>
              <p className={styles.heroSubtitle}>
                PEOPLE-SCIENCE BASED &middot; TALENT & ORGANIZATION EFFECTIVENESS &middot; ANALYTICS-DRIVEN
              </p>
              
              {/* Quote Card */}
              <div className={styles.quoteCard}>
                <p className={styles.quoteText}>
                  &ldquo;Change is not a constant, it is accelerating&rdquo;
                </p>
                <p className={styles.quoteAuthor}>— Himank Priyadarshi, Ph.D.</p>
              </div>

              <div className={styles.heroActions}>
                <Link href="/services" className={styles.primaryButton}>
                  Explore Capabilities
                </Link>
                <Link href="/contact" className={styles.secondaryButton}>
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className={styles.metricsSection}>
          <div className="container">
            <div className={styles.metricsGrid}>
              <div className={styles.metricCard}>
                <h3 className={styles.metricVal}>30+</h3>
                <p className={styles.metricLabel}>Years of Global Practice & Research</p>
              </div>
              <div className={styles.metricCard}>
                <h3 className={styles.metricVal}>5</h3>
                <p className={styles.metricLabel}>Integrated Capability Clusters</p>
              </div>
              <div className={styles.metricCard}>
                <h3 className={styles.metricVal}>Global</h3>
                <p className={styles.metricLabel}>Footprint: US &middot; EU &middot; Asia &middot; ANZ</p>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className={styles.introSection}>
          <div className="container">
            <div className={styles.introGrid}>
              <div className={styles.introLeft}>
                <h2 className={styles.sectionTitle}>
                  Bridging organizational potential and performance.
                </h2>
              </div>
              <div className={styles.introRight}>
                <p className={styles.bodyText}>
                  Performance Dimensions Global (PDG) is a People-science based global Talent and Organization Effectiveness consulting firm. We partner with you to co-create and execute business outcome–oriented processes for superior performance.
                </p>
                <p className={styles.bodyText}>
                  We bring fresh perspectives and deep domain expertise grounded in rigorous research, benchmarks, and best-in-class case studies.
                </p>
                <Link href="/about" className={styles.textLink}>
                  Learn more about our vision and values &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Preview Section */}
        <section className={styles.capabilitiesSection}>
          <div className="container">
            <div className={styles.capabilitiesHeader}>
              <h2 className={styles.sectionTitleCenter}>Core Practice Areas</h2>
              <p className={styles.sectionSubtitleCenter}>
                An integrated portfolio spanning the full talent and organizational lifecycle.
              </p>
            </div>
            
            <div className={styles.capabilitiesGrid}>
              {capabilityPreviews.map((cap) => (
                <div key={cap.num} className={styles.capabilityCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardNum}>{cap.num}</span>
                    <h3 className={styles.cardTitle}>{cap.title}</h3>
                  </div>
                  <p className={styles.cardDesc}>{cap.desc}</p>
                  <Link href={`/services#cluster-${cap.num}`} className={styles.cardLink}>
                    View details
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>Ready to accelerate your organization's potential?</h2>
              <p className={styles.ctaDesc}>
                Let's start a conversation about customized organizational effectiveness, analytics, and leadership assessment models.
              </p>
              <Link href="/contact" className={styles.ctaButton}>
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
