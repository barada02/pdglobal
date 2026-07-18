import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import styles from "./founder.module.css";

export const metadata: Metadata = {
  title: "Dr. Himank Priyadarshi | Founder, Performance Dimensions Global",
  description:
    "Dr. Himank Priyadarshi, Ph.D. (TISS Mumbai; Post-doctoral, MIT Sloan) — Founder & Principal Consultant of Performance Dimensions Global. 30+ years in Talent Management, Organization Development, People Analytics, and AI-Powered Workforce Strategy.",
};

const expertise = [
  "Skills-Based Organization (SBO)",
  "AI-Powered Talent Management",
  "Organizational Health Diagnostics",
  "Competency Models",
  "Performance Management",
  "Succession Management",
  "High Potential Program",
  "Talent Review Process",
  "Talent/Leadership Assessment",
  "Psychometric Tests",
  "AI-Driven Workforce of Future",
  "Organizational Effectiveness",
  "Change Management",
  "Organization Design",
  "Organization Health Index",
  "Employee Engagement",
  "Strategic Workforce Planning",
  "HR Scorecard",
  "360 Degree Assessment",
  "Role Effectiveness Strategy",
  "HR Strategy Map",
  "Leadership Development",
  "Executive Coaching",
  "Learning & Development",
  "Training Impact Evaluation",
  "Customer Satisfaction Index",
  "People Analytics (Predictive Modeling)",
  "e-NPS (Employee-Net Promoter Score)",
  "Assessment/Development Centres",
];

const career = [
  {
    role: "Group Head",
    detail: "Talent Management and Assessment Practice, Talent COE",
    org: "Macy's Inc.",
    location: "New York City",
  },
  {
    role: "US Head",
    detail: "Global People/Talent Analytics",
    org: "Siemens Corporation",
    location: "Iselin, New Jersey, USA",
  },
  {
    role: "Global Head",
    detail: "Talent Management & Organization Development",
    org: "Collabera",
    location: "Morristown, New Jersey, USA",
  },
  {
    role: "Global Head & AVP",
    detail: "Talent Management COE & OD",
    org: "Adani Group",
    location: "Ahmedabad, India",
  },
  {
    role: "Global Head & VP",
    detail: "Organization Development (OD) & Talent Management",
    org: "Hitachi Group",
    location: "McLean, Virginia, USA",
  },
  {
    role: "Head",
    detail: "Talent and Organization Development",
    org: "Aditya Birla Minacs",
    location: "Toronto",
  },
  {
    role: "Global Head",
    detail: "Talent Assessment & Leadership Development Practice (Infosys Leadership Institute)",
    org: "Infosys Technologies",
    location: "Bangalore and Chicago",
  },
  {
    role: "Sr. Manager",
    detail: "Talent Management & Organization Development (OD)",
    org: "Capgemini (Patni Computer Systems)",
    location: "Mumbai and Boston",
  },
  {
    role: "Head",
    detail: "Individual and Organizational Assessment Centre (IOAC)",
    org: "Academy of Human Resources Development (AHRD)",
    location: "Hyderabad",
  },
];

const focusAreas = [
  "Organizational Diagnostics, Analysis, Report Creation, Key Recommendations, and Action Plans",
  "Organization Design & Organizational Structure: Organizational Strategy, Operating Model",
  "Skills-Based Organization (SBO), Skills Architecture and Governance Framework",
  "HR Transformation Projects",
  "Job and Tasks Analysis, Role Profiles, Creation of Success Profiles",
  "Techno-Functional, Leadership and Digital Competency Models",
  "Talent Review Process, Performance & Potential Evaluation, Talent Calibration, 9-Box Grid Creation",
  "Design and Implementation of Assessment/Development Center (ADC), Simulation-based and 360 Assessment, CPI",
  "Performance Management: Goal Setting, KRAs/KPAs, Performance Execution, Quarterly Review & Feedback",
  "Succession Planning: Critical & Feeder Positions, Succession Readiness, Bench Strength",
  "Workforce for Future & Organization Effectiveness Interventions",
  "Employee Engagement Surveys, Organizational Culture Assessment, Employee Life-cycle Surveys",
  "People Analytics Projects",
];

const aiPractice = [
  {
    title: "AI Across the Employee Lifecycle",
    text: "Workforce planning & strategy, attraction & recruitment, onboarding, retention & development, performance & rewards, Prompt Design fundamentals, the BRIEF Framework, ChatGPT for Excel, and AI strategy, roadmap & governance.",
  },
  {
    title: "Generative & Agentic AI Training",
    text: "Training leaders on ChatGPT, Perplexity, Google Notebook, and Julius AI — the PRAR Loop (Perceive–Reason–Act–Reflect), task decomposition, agentic workflow design, skills mapping, scenario modeling, and co-strategizing with AI.",
  },
];

const accomplishments = [
  "Designed and implemented Integrated Talent Management, Organizational Design, and OD processes in global companies ranging from $500M to $105B in size and 8,000 to 375,000 employees.",
  "Created Competency Models (techno-functional and behavioral/leadership) for 500+ roles — including BARS, predictive models for superior performance, competency-based HR processes, success profiles, and digital capability models.",
  "Led Leadership Assessment & Development and Learning & Development for top leadership teams at large global corporations.",
  "Mentored and guided leadership teams and HR Business Partners to implement Competency-Based HR Process for business growth, sustainability, and productivity.",
  "Established the People Analytics function in a $100B+ company.",
  "Global experience working with culturally diverse teams across North America, South America, India, Europe, and Australia.",
];

const publications = [
  {
    title: "Net Engagement Score (NES): An Effective Model for Measuring Employee Engagement",
    outlet: "European Journal of Business and Management (EJBM), Vol.17, No.3",
    date: "April 2025",
    href: "https://iiste.org/Journals/index.php/EJBM/article/view/63016/65102",
  },
  {
    title: "Beware of the S.T.A.R Method, It May Not Get You the STAR Performers on the Job",
    outlet: "People Matters",
    date: "July 2024",
    href: "https://www.peoplematters.in/article/talent-acquisition/beware-of-the-star-method-it-may-not-get-you-the-star-performers-on-the-job-41684",
  },
  {
    title: "How “critical” Are Critical Positions for Succession Management Effectiveness",
    outlet: "People Matters",
    date: "February 2024",
    href: "https://www.peoplematters.in/article/talent-management/how-critical-are-critical-positions-for-succession-management-effectiveness-40235",
  },
  {
    title: "Synthesizing Data Analytics and Design Thinking to Improve Employee Engagement",
    outlet: "Gartner, Talent Analytics Quarterly (Washington DC)",
    date: "August 2019",
  },
  {
    title: "Competency Based Human Resource Management System",
    outlet: "National HRD Network & Centre of HRD, XLRI Newsletter",
    date: "September 1999",
  },
  {
    title: "'Star Is Born: Recognize Him'",
    outlet: "The Economic Times, India",
    date: "September 1998",
  },
  {
    title: "Future-Ready Work Characteristics Model (FRWCM) & Workforce of Future Index (WFI)",
    outlet: "Under Publication",
    date: "",
  },
];

export default function FounderPage() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <div className="glowing-bg" style={{ top: "10%", right: "0%" }}></div>
        <div className="glowing-bg" style={{ top: "70%", left: "0%" }}></div>

        {/* Hero */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroGrid}>
              <Reveal as="div" className={styles.heroPortraitWrap}>
                <div className={styles.heroPortraitFrame}>
                  <Image
                    src="/founder-portrait.jpg"
                    alt="Dr. Himank Priyadarshi, Founder & Principal Consultant, Performance Dimensions Global"
                    fill
                    sizes="(max-width: 900px) 100vw, 420px"
                    className={styles.heroPortrait}
                    priority
                  />
                </div>
              </Reveal>

              <Reveal delay={100} className={styles.heroContent}>
                <span className={styles.eyebrow}>Founder &amp; Principal Consultant</span>
                <h1 className={styles.heroName}>Dr. Himank Priyadarshi</h1>
                <p className={styles.heroCredentials}>
                  Ph.D., Tata Institute of Social Sciences (TISS), Mumbai &middot; Post-Doctoral, Sloan School of Management, MIT, Boston &mdash; Industrial &amp; Organizational Psychology
                </p>
                <p className={styles.heroLead}>
                  CEO of Performance Dimensions Global (PDG), Chicago &mdash; a Human Resource and Organization Development global consultant serving Manufacturing, Engineering, IT, Retail, Financial, and Healthcare industries worldwide.
                </p>

                <div className={styles.heroStats}>
                  <div className={styles.heroStat}>
                    <span className={styles.heroStatNum}>30+</span>
                    <span className={styles.heroStatLabel}>Years of Practice</span>
                  </div>
                  <div className={styles.heroStat}>
                    <span className={styles.heroStatNum}>500+</span>
                    <span className={styles.heroStatLabel}>Roles Modeled</span>
                  </div>
                  <div className={styles.heroStat}>
                    <span className={styles.heroStatNum}>$105B</span>
                    <span className={styles.heroStatLabel}>Largest Engagement</span>
                  </div>
                  <div className={styles.heroStat}>
                    <span className={styles.heroStatNum}>5</span>
                    <span className={styles.heroStatLabel}>Continents Served</span>
                  </div>
                </div>

                <div className={styles.heroActions}>
                  <Link href="/contact" className={styles.primaryBtn}>
                    Get in Touch
                  </Link>
                  <a href="mailto:Himank.Priyadarshi@PDGlobal.net" className={styles.secondaryBtn}>
                    Himank.Priyadarshi@PDGlobal.net
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Expertise cloud */}
        <section className={styles.section}>
          <div className="container">
            <Reveal className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Core Areas of Expertise</span>
              <h2 className={styles.sectionTitle}>Three decades of people-science depth</h2>
            </Reveal>
            <Reveal delay={80} className={styles.chipCloud}>
              {expertise.map((item) => (
                <span key={item} className={styles.chip}>
                  {item}
                </span>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Career timeline */}
        <section className={styles.sectionAlt}>
          <div className="container">
            <Reveal className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Career Journey</span>
              <h2 className={styles.sectionTitle}>Roles &amp; organizations previously worked with</h2>
            </Reveal>

            <div className={styles.timeline}>
              {career.map((item, idx) => (
                <Reveal as="div" key={item.org} delay={idx * 60} className={styles.timelineItem}>
                  <div className={styles.timelineMarker}>
                    <span className={styles.timelineDot} />
                    {idx !== career.length - 1 && <span className={styles.timelineLine} />}
                  </div>
                  <div className={styles.timelineCard}>
                    <h3 className={styles.timelineRole}>{item.role}</h3>
                    <p className={styles.timelineDetail}>{item.detail}</p>
                    <div className={styles.timelineOrgRow}>
                      <span className={styles.timelineOrg}>{item.org}</span>
                      <span className={styles.timelineLocation}>{item.location}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Consulting focus areas */}
        <section className={styles.section}>
          <div className="container">
            <Reveal className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Recent Consulting Focus</span>
              <h2 className={styles.sectionTitle}>HR &amp; Organizational Effectiveness Consulting Areas</h2>
            </Reveal>

            <div className={styles.focusGrid}>
              {focusAreas.map((item, idx) => (
                <Reveal as="div" key={item} delay={idx * 50} className={styles.focusCard}>
                  <span className={styles.focusIndex}>{String(idx + 1).padStart(2, "0")}</span>
                  <p className={styles.focusText}>{item}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* AI practice */}
        <section className={styles.sectionAlt}>
          <div className="container">
            <Reveal className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>AI-Powered Talent Management</span>
              <h2 className={styles.sectionTitle}>Bringing Generative &amp; Agentic AI into HR practice</h2>
            </Reveal>

            <div className={styles.aiGrid}>
              {aiPractice.map((item, idx) => (
                <Reveal as="div" key={item.title} delay={idx * 100} className={styles.aiCard}>
                  <h3 className={styles.aiTitle}>{item.title}</h3>
                  <p className={styles.aiText}>{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Accomplishments */}
        <section className={styles.section}>
          <div className="container">
            <Reveal className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Selected Professional Accomplishments</span>
              <h2 className={styles.sectionTitle}>Impact at global scale</h2>
            </Reveal>

            <ul className={styles.accomplishList}>
              {accomplishments.map((item, idx) => (
                <Reveal as="li" key={item} delay={idx * 60} className={styles.accomplishItem}>
                  <span className={styles.accomplishMark}>&#10003;</span>
                  <p>{item}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Publications */}
        <section className={styles.sectionAlt}>
          <div className="container">
            <Reveal className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Research &amp; Publications</span>
              <h2 className={styles.sectionTitle}>Selected research, publications &amp; assessment tools</h2>
            </Reveal>

            <div className={styles.pubGrid}>
              {publications.map((pub, idx) => {
                const content = (
                  <>
                    <h3 className={styles.pubTitle}>{pub.title}</h3>
                    <p className={styles.pubOutlet}>{pub.outlet}</p>
                    {pub.date && <span className={styles.pubDate}>{pub.date}</span>}
                    {pub.href && (
                      <span className={styles.pubLink}>
                        Read Article <span className="arrow">&rarr;</span>
                      </span>
                    )}
                  </>
                );
                return (
                  <Reveal as="div" key={pub.title} delay={idx * 50} className={styles.pubCard}>
                    {pub.href ? (
                      <a href={pub.href} target="_blank" rel="noopener noreferrer" className={styles.pubCardInner}>
                        {content}
                      </a>
                    ) : (
                      <div className={styles.pubCardInner}>{content}</div>
                    )}
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={120} className={styles.note}>
              <p>
                Also credited with the design and construction of Managerial/Leadership Competencies Assessment Tools (CAT) &mdash; the Managerial Competency Assessment Inventory (MCAI), Decision Style Inventory, and Networking Style Inventory &mdash; and an approach paper on the Individual and Organizational Assessment Centre (IOAC) at the Academy of HRD, Hyderabad. Paper on &lsquo;Psychological Attributes of Entrepreneurship&rsquo; accepted for the Seventh Annual ENDEC World Conference on Globalization and Entrepreneurship, Singapore, 2000.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Guest lectures + CTA */}
        <section className={styles.closingSection}>
          <div className="container">
            <Reveal className={styles.closingGrid}>
              <div>
                <span className={styles.sectionEyebrow}>Academic Engagement</span>
                <h2 className={styles.sectionTitle}>Guest Lectures &amp; Executive Development</h2>
                <p className={styles.closingText}>
                  Guest lectures and Executive Development Programs on Human Resource Management topics at the Indian Institute of Management (IIM) Ahmedabad, IIM Bangalore, Nirma Institute of Management Ahmedabad, and the Center for Creative Leadership (CCL), North Carolina, USA.
                </p>
              </div>
              <div className={styles.closingCard}>
                <h3 className={styles.closingCardTitle}>Work with Dr. Priyadarshi</h3>
                <p className={styles.closingCardText}>
                  Connect directly to discuss talent strategy, organization design, or an AI-powered workforce engagement for your organization.
                </p>
                <div className={styles.closingActions}>
                  <Link href="/contact" className={styles.primaryBtn}>
                    Start a Conversation
                  </Link>
                  <a href="tel:+14848811051" className={styles.secondaryBtn}>
                    +1 484 881 1051
                  </a>
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
