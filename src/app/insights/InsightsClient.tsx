"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import OrgNetworkVisual from "@/components/OrgNetworkVisual";
import EditorialImage from "@/components/EditorialImage";
import styles from "./insights.module.css";

export default function InsightsClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const publications = [
    {
      date: "APR 2025",
      journal: "European Journal of Business and Management",
      title: "Net Engagement Score (NES): An Effective Model for Measuring Employee Engagement",
      category: "Employee Engagement",
      teaser:
        "Proposing a unified index (NES) to assess critical dimensions of workforce alignment and motivation, optimizing traditional survey frameworks for high-frequency measurements.",
    },
    {
      date: "JUL 2024",
      journal: "People Matters",
      title: "Beware of the S.T.A.R Method — it may not get you the STAR performers on the job",
      category: "Talent Assessments",
      teaser:
        "A critical evaluation of structured behavioral interviewing techniques, discussing limitations in predicting executive performance and recommending simulation-based alternates.",
    },
    {
      date: "FEB 2024",
      journal: "People Matters",
      title: "How 'critical' are critical positions for succession management effectiveness",
      category: "Succession Management",
      teaser:
        "Examining structural risks in succession modeling, showing why organizations over-index on specific roles and offering a skills-based liquidity approach to pipeline continuity.",
    },
    {
      date: "AUG 2019",
      journal: "Gartner Talent Analytics Quarterly",
      title: "Synthesizing Data Analytics and Design Thinking to Improve Employee Engagement",
      category: "Employee Engagement",
      teaser:
        "Bridging quantitative people metrics with user-centric workflows to design cohesive employee experiences that drive organizational performance and reduce attrition.",
    },
    {
      date: "JAN 2005",
      journal: "National HRD Network Newsletter",
      title: "Assessment Centre: Beyond the Corporate Domain",
      category: "Talent Assessments",
      teaser:
        "Exploring custom assessment center methodologies in non-traditional environments and public administration sectors to evaluate core behavioral competencies.",
    },
    {
      date: "SEP 1999",
      journal: "National HRD Network & Centre of HRD, XLRI",
      title: "Competency Based Human Resource Management System",
      category: "Competency Models",
      teaser:
        "A foundational blueprint for architecting end-to-end HR management systems connected directly to competency libraries and strategic business scorecards.",
    },
    {
      date: "SEP 1998",
      journal: "The Economic Times",
      title: "Star is Born: Recognize Him",
      category: "Competency Models",
      teaser:
        "A pioneer article outlining the psychological constructs of high-potential performers, and how organizations can identify and nurture fast-track leadership talent.",
    },
  ];

  const categories = [
    "All",
    "Employee Engagement",
    "Talent Assessments",
    "Succession Management",
    "Competency Models",
  ];

  const filteredPublications = publications.filter((pub) => {
    const matchesSearch =
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.teaser.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory =
      selectedCategory === "All" || pub.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Header />
      
      <main className={styles.main}>
        {/* Glow Effects */}
        <div className="glowing-bg" style={{ top: "15%", right: "10%" }}></div>
        <div className="glowing-bg" style={{ top: "60%", left: "5%" }}></div>

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroVisualWrap}>
            <OrgNetworkVisual variant="accent" />
          </div>
          <div className="container">
            <Reveal>
              <span className={styles.subtitle}>Research & Publications</span>
              <h1 className={styles.title}>Insights & Thought Leadership</h1>
              <p className={styles.lead}>
                Selected academic research, journal publications, and thought leadership articles in talent analytics and people science.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Overview Section */}
        <section className={styles.overviewSection}>
          <div className="container">
            <div className={styles.overviewGrid}>
              <Reveal className={styles.overviewContent}>
                <h2 className={styles.overviewTitle}>Research-backed, not opinion-backed.</h2>
                <p className={styles.overviewText}>
                  Our published research and frameworks — including the Net Engagement Score (NES) and the Future Ready Work Characteristics Model (FRWCM) — are grounded in peer-reviewed methodology and two decades of applied consulting data.
                </p>
              </Reveal>
              <Reveal delay={120} className={styles.overviewImage}>
                <EditorialImage
                  src="https://images.unsplash.com/photo-1686061593213-98dad7c599b9?q=80&w=1600&auto=format&fit=crop"
                  alt="Talent analytics dashboard showing workforce performance metrics"
                  aspect="4/3"
                  sizes="(max-width: 900px) 100vw, 45vw"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Search & Filter section */}
        <section className={styles.archiveSection}>
          <div className="container">
            <div className={styles.filterBar}>
              <div className={styles.searchWrapper}>
                <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input
                  type="text"
                  placeholder="Search articles by title, publisher or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                />
              </div>

              <div className={styles.categoryFilters}>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`${styles.filterBtn} ${selectedCategory === cat ? styles.activeFilterBtn : ""}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Grid */}
            {filteredPublications.length > 0 ? (
              <div className={styles.publicationsGrid}>
                {filteredPublications.map((pub, idx) => (
                  <Reveal as="article" key={idx} delay={(idx % 6) * 70} className={styles.pubCard}>
                    <div className={styles.pubMeta}>
                      <span className={styles.pubDate}>{pub.date}</span>
                      <span className={styles.pubCategory}>{pub.category}</span>
                    </div>
                    <h2 className={styles.pubTitle}>{pub.title}</h2>
                    <p className={styles.pubJournal}>Published in: <strong>{pub.journal}</strong></p>
                    <p className={styles.pubTeaser}>{pub.teaser}</p>
                    <div className={styles.pubFooter}>
                      <span className={styles.readMoreLink}>
                        Request full-text PDF
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="8 17 12 12 8 7"></polyline>
                          <polyline points="14 17 18 12 14 7"></polyline>
                        </svg>
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <svg className={styles.emptyIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
                <h3 className={styles.emptyTitle}>No matching articles found</h3>
                <p className={styles.emptyDesc}>Try adjusting your search terms or selecting a different category filter.</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className={styles.resetBtn}
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
