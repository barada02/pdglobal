import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./about.module.css";

export default function About() {
  const values = [
    {
      title: "Integrity",
      desc: "We adhere to the highest ethical and professional standards, providing transparent, objective, and evidence-based guidance to our clients.",
    },
    {
      title: "Ownership of Results",
      desc: "We take full accountability for our interventions, ensuring our solutions align with your strategic and commercial business outcomes.",
    },
    {
      title: "Client Focus",
      desc: "Our clients are at the center of everything we do. We build deep, long-term partnerships based on mutual trust and shared objectives.",
    },
    {
      title: "Collaboration",
      desc: "We do not believe in off-the-shelf templates. We co-design all of our diagnostics and solutions in close partnership with your internal teams.",
    },
    {
      title: "Innovation",
      desc: "We actively incorporate the latest research, analytics methods, and Generative AI tools to solve complex, modern workforce challenges.",
    },
  ];

  return (
    <>
      <Header />
      
      <main className={styles.main}>
        {/* Glow Effects */}
        <div className="glowing-bg" style={{ top: "15%", right: "5%" }}></div>
        <div className="glowing-bg" style={{ top: "60%", left: "5%" }}></div>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.subtitle}>Who We Are</span>
            <h1 className={styles.title}>About Performance Dimensions Global</h1>
            <p className={styles.lead}>
              A global talent and organizational effectiveness consulting firm bridging people science, analytics, and business execution.
            </p>
          </div>
        </section>

        {/* Mission and Vision Section */}
        <section className={styles.missionVision}>
          <div className="container">
            <div className={styles.mvGrid}>
              <div className={styles.mvCard}>
                <div className={styles.mvIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h2 className={styles.mvTitle}>Our Vision</h2>
                <h3 className={styles.mvHighlight}>Unlocking client potential.</h3>
                <p className={styles.mvText}>
                  We help unlock our clients' potential to achieve their vision, mission, and core business objectives. We design processes that translate organizational ambition into sustainable performance.
                </p>
              </div>

              <div className={styles.mvCard}>
                <div className={styles.mvIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
                <h2 className={styles.mvTitle}>Our Mission</h2>
                <h3 className={styles.mvHighlight}>A trusted advisor.</h3>
                <p className={styles.mvText}>
                  We are committed to partnering, guiding, and serving our clients as trusted advisors — delivering best-in-class, customized Talent and Organizational Effectiveness solutions for excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className={styles.valuesSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Our Core Values</h2>
              <p className={styles.sectionSubtitle}>
                The principles that guide our client relationships, solution designs, and daily practice.
              </p>
            </div>

            <div className={styles.valuesGrid}>
              {values.map((val) => (
                <div key={val.title} className={styles.valueCard}>
                  <h3 className={styles.valueTitle}>{val.title}</h3>
                  <p className={styles.valueDesc}>{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className={styles.bioSection}>
          <div className="container">
            <div className={styles.bioGrid}>
              <div className={styles.bioLeft}>
                <div className={styles.avatarPlaceholder}>
                  <span className={styles.avatarInitials}>HP</span>
                </div>
                <div className={styles.bioMeta}>
                  <h3 className={styles.founderName}>Himank Priyadarshi, Ph.D.</h3>
                  <p className={styles.founderTitle}>Founder & Principal Consultant</p>
                  <div className={styles.badgeList}>
                    <span className={styles.bioBadge}>MIT Sloan Fellow</span>
                    <span className={styles.bioBadge}>TISS Alumnus</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.bioRight}>
                <h2 className={styles.bioTitle}>Meet Our Founder</h2>
                <p className={styles.bioParagraph}>
                  Himank Priyadarshi, Ph.D., has over 30 years of practice, research, training, and consultancy in People Science, Skills-based Organization (SBO), Org. Design & Effectiveness, AI Workforce Strategy & Organization Transformation, Talent Management & Assessment, and People Analytics.
                </p>
                <p className={styles.bioParagraph}>
                  His consulting engagements span the United States, Canada, Europe, Australia, and India, delivering business-aligned solutions to global Fortune 500 corporations, mid-sized enterprises, and public institutions.
                </p>
                <p className={styles.bioParagraph}>
                  Dr. Priyadarshi earned his Doctorate in Organizational Psychology from the Tata Institute of Social Sciences (TISS), Mumbai, and pursued postdoctoral research as a scholar at the Massachusetts Institute of Technology (MIT) Sloan School of Management. His research and frameworks focus on bridging design thinking with data analytics to create resilient, future-ready organizations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
