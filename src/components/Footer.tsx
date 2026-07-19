import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Our Approach", href: "/approach" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Company Intro column */}
          <div className={styles.infoCol}>
            <Link href="/" className={styles.logo} aria-label="Performance Dimensions Global — Home">
              <Logo variant="full" className={styles.logoMark} />
            </Link>
            <p className={styles.description}>
              Performance Dimensions Global (PDG) is a People-science based global Talent and Organization Effectiveness consulting firm.
            </p>
            <p className={styles.tagline}>
              Architecting & Accelerating Organizations.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className={styles.linksCol}>
            <h4 className={styles.title}>Sitemap</h4>
            <ul className={styles.linkList}>
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details Column */}
          <div className={styles.contactCol}>
            <h4 className={styles.title}>Contact</h4>
            <div className={styles.contactItem} style={{ display: "block" }}>
              <strong>Himank Priyadarshi, Ph.D.</strong><br />
              Founder and CEO
            </div>
            <p className={styles.contactItem}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <a href="mailto:Himank.Priyadarshi@pdglobal.net">Himank.Priyadarshi@pdglobal.net</a>
            </p>
            <p className={styles.contactItem}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <a href="tel:+14848811051">+1 (484) 881-1051</a>
            </p>
            <p className={styles.contactItem}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Chicago, IL, USA
            </p>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>© {currentYear} Performance Dimensions Global. All Rights Reserved.</p>
          <p className={styles.confidentiality}>
            Confidential — for client use only. No part of this site may be reproduced without prior written approval.
          </p>
        </div>
      </div>
    </footer>
  );
}
