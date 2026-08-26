import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import HeroParticles from "@/components/HeroParticles";
import EditorialImage from "@/components/EditorialImage";
import styles from "./page.module.css";

export default function Home() {
  const capabilityPreviews = [
    {
      num: "01",
      title: "Talent Management & Strategic HRM",
      desc: "Delivers future-ready leaders, high-performing teams, and a workforce engineered to accelerate business growth and execution.",
    },
    {
      num: "02",
      title: "Talent & Leadership Assessment",
      desc: "Enables precise identification of leadership strengths, role fit, and future-ready capability, so organizations can make confident, high-impact talent decisions that enhance business performance.",
    },
    {
      num: "03",
      title: "Organization Effectiveness & Workforce of Future",
      desc: "Builds Skills-based Organization (SBO), Workforce of Future, Org. Diagnostics, Org. Design that accelerate execution, adaptability, and long-term business growth.",
    },
    {
      num: "04",
      title: "Learning & Leadership Development",
      desc: "Builds capable, confident leaders and a continuously learning workforce that excels in execution and strengthens culture to drive sustained business growth.",
    },
    {
      num: "05",
      title: "People & Talent Analytics, AI-Application",
      desc: "HR data, predictive modeling, employee listening & experience, and Generative AI applications.",
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
          <HeroParticles className={styles.heroParticles} />
          <div className={styles.heroOverlay} aria-hidden="true" />
          <div className="container">
            <div className={styles.heroGrid}>
              <Reveal className={styles.heroContent}>
                <span className={styles.heroBadge}>Performance Dimensions Global</span>
                <h1 className={styles.heroTitle}>
                  Architecting & Accelerating Organizations
                </h1>
                <p className={styles.heroSubtitle}>
                  PEOPLE-SCIENCE BASED &middot; ANALYTICS & AI DRIVEN
                </p>

                {/* Quote Card */}
                <div className={styles.quoteCard}>
                  <p className={styles.quoteText}>
                    &ldquo;Change is not a constant, it is accelerating&rdquo;
                  </p>
                  <div className={styles.quoteAuthorRow}>
                    <span className={styles.quoteAvatar}>
                      <Image
                        src="/founder-square.jpg"
                        alt="Himank Priyadarshi, Ph.D."
                        fill
                        sizes="36px"
                        className={styles.quoteAvatarImg}
                      />
                    </span>
                    <p className={styles.quoteAuthor}>Himank Priyadarshi, Ph.D. — Founder and CEO</p>
                  </div>
                </div>

                <div className={styles.heroActions}>
                  <Link href="/services" className={styles.primaryButton}>
                    Explore Capabilities
                  </Link>
                  <Link href="/contact" className={styles.secondaryButton}>
                    Get in Touch
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className={styles.metricsSection}>
          <div className="container">
            <div className={styles.metricsGrid}>
              <Reveal as="div" className={styles.metricCard}>
                <h3 className={styles.metricVal}>30+</h3>
                <p className={styles.metricLabel}>Years of Global Practice & Research</p>
              </Reveal>
              <Reveal as="div" delay={100} className={styles.metricCard}>
                <h3 className={styles.metricVal}>5</h3>
                <p className={styles.metricLabel}>Integrated Capability Clusters</p>
              </Reveal>
              <Reveal as="div" delay={200} className={styles.metricCard}>
                <h3 className={styles.metricVal}>Global Footprint</h3>
                <p className={styles.metricLabel}>US &middot; EU &middot; Asia &middot; ANZ</p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className={styles.introSection}>
          <div className="container">
            <div className={styles.introGrid}>
              <Reveal className={styles.introLeft}>
                <span className={styles.sectionEyebrow}>O U R &nbsp; M A N T R A</span>
                <h2 className={styles.sectionTitle}>
                  Your Success is Our Success
                </h2>
              </Reveal>
              <Reveal delay={120} className={styles.introRight}>
                <p className={styles.bodyText}>
                  Performance Dimensions Global (PDG) is a People-science based global Talent and Organization Effectiveness consulting firm. We partner with you to co-create and execute business outcome–oriented Talent and Organization Development processes for superior performance by leveraging analytics, AI, and a data-driven approach.
                </p>
                <p className={styles.bodyText}>
                  We bring fresh perspectives and domain expertise grounded in research &amp; practice, benchmarks, and best-in-class case studies. We are the talent and organizational effectiveness Subject-matter experts, diagnosticians and process consultants who provide custom solutions for effective implementation in achieving key business goals.
                </p>
                <p className={styles.bodyText}>
                  Our focus is on client&rsquo;s achievement by making companies as successful and learning organizations.
                </p>
                <Link href="/about" className={styles.textLink}>
                  Learn more about our vision and values <span className="arrow">&rarr;</span>
                </Link>
              </Reveal>

              <Reveal delay={200} className={styles.introImageCol}>
                <EditorialImage
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600&auto=format&fit=crop"
                  alt="Executive adjusting his suit jacket in a modern corporate office"
                  aspect="16/10"
                  sizes="(max-width: 850px) 100vw, 45vw"
                  className={styles.introImage}
                  radius={14}
                  hoverScale={1.02}
                  transitionMs={300}
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Capabilities Preview Section */}
        <section className={styles.capabilitiesSection}>
          <div className="container">
            <Reveal className={styles.capabilitiesHeader}>
              <h2 className={styles.sectionTitleCenter}>Core Practice Areas</h2>
              <p className={styles.sectionSubtitleCenter}>
                An integrated portfolio spanning the full talent and organization lifecycle — from strategy and assessment to development, implementation, change, and analytics.
              </p>
            </Reveal>

            <div className={styles.capabilitiesGrid}>
              {capabilityPreviews.map((cap, idx) => (
                <Reveal as="div" key={cap.num} delay={idx * 80} className={styles.capabilityCard}>
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
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container">
            <Reveal className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>Ready to accelerate your organization&apos;s potential?</h2>
              <p className={styles.ctaDesc}>
                Let&apos;s start a conversation about customized organizational effectiveness, analytics, and leadership assessment models.
              </p>
              <Link href="/contact" className={styles.ctaButton}>
                Schedule a Consultation
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
