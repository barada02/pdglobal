"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import OrgNetworkVisual from "@/components/OrgNetworkVisual";
import EditorialImage from "@/components/EditorialImage";
import styles from "./contact.module.css";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    interest: "General Inquiry",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Simulate API submission
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        org: "",
        interest: "General Inquiry",
        message: "",
      });
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Header />
      
      <main className={styles.main}>
        {/* Glow Effects */}
        <div className="glowing-bg" style={{ top: "10%", left: "5%" }}></div>
        <div className="glowing-bg" style={{ top: "50%", right: "5%" }}></div>

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroVisualWrap}>
            <OrgNetworkVisual variant="accent" />
          </div>
          <div className="container">
            <Reveal>
              <span className={styles.subtitle}>Get in Touch</span>
              <h1 className={styles.title}>Let&apos;s Start a Conversation</h1>
              <p className={styles.lead}>
                Partner with us to deploy people science and advanced talent analytics to accelerate your organization&apos;s potential.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Contact Layout */}
        <section className={styles.contactSection}>
          <div className="container">
            <div className={styles.contactGrid}>

              {/* Left Column: Info Card */}
              <Reveal as="div" className={styles.infoColumn}>
                <EditorialImage
                  src="https://images.unsplash.com/photo-1778961419928-2968ddd57c05?q=80&w=1600&auto=format&fit=crop"
                  alt="Modern professional office building"
                  aspect="16/10"
                  sizes="(max-width: 900px) 100vw, 40vw"
                  className={styles.infoImage}
                />
                <div className={styles.infoCard}>
                  <h3 className={styles.cardHeader}>Direct Contact</h3>
                  
                  <div className={styles.infoItem}>
                    <div className={styles.iconCircle}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div className={styles.itemText}>
                      <strong>Himank Priyadarshi, Ph.D.</strong>
                      <span>Founder and CEO</span>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <div className={styles.iconCircle}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div className={styles.itemText}>
                      <strong>Primary Email</strong>
                      <a href="mailto:Himank.Priyadarshi@pdglobal.net">Himank.Priyadarshi@pdglobal.net</a>
                      <a href="mailto:Himankemail@gmail.com" className={styles.subEmail}>Himankemail@gmail.com</a>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <div className={styles.iconCircle}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div className={styles.itemText}>
                      <strong>Phone Number</strong>
                      <a href="tel:+14848811051">+1 (484) 881-1051</a>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <div className={styles.iconCircle}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div className={styles.itemText}>
                      <strong>Office Location</strong>
                      <span>Chicago, IL, USA</span>
                    </div>
                  </div>
                </div>

                <div className={styles.noticeCard}>
                  <h4 className={styles.noticeTitle}>Confidentiality & Copyright</h4>
                  <p className={styles.noticeDesc}>
                    All communications and diagnostics shared are held under strict executive confidentiality. No part of our models, project proposals, or strategic guidance may be circulated without written approval from Performance Dimensions Global.
                  </p>
                </div>
              </Reveal>

              {/* Right Column: Inquiry Form */}
              <Reveal as="div" delay={120} className={styles.formColumn}>
                {formStatus === "success" ? (
                  <div className={styles.successBox}>
                    <div className={styles.successIcon}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <h3 className={styles.successTitle}>Inquiry Submitted Successfully</h3>
                    <p className={styles.successDesc}>
                      Thank you for starting a conversation with PD Global. Dr. Priyadarshi or a consulting representative will contact you within 24 business hours to discuss your organizational goals.
                    </p>
                    <button onClick={() => setFormStatus("idle")} className={styles.submitBtn}>
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.formCard}>
                    <h3 className={styles.formHeader}>Business Inquiry Form</h3>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.label}>Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className={styles.input}
                        placeholder="e.g. Sarah Jenkins"
                      />
                    </div>

                    <div className={styles.row}>
                      <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>Corporate Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className={styles.input}
                          placeholder="e.g. sjenkins@company.com"
                        />
                      </div>
                      
                      <div className={styles.formGroup}>
                        <label htmlFor="org" className={styles.label}>Organization</label>
                        <input
                          type="text"
                          id="org"
                          name="org"
                          required
                          value={formData.org}
                          onChange={handleInputChange}
                          className={styles.input}
                          placeholder="e.g. Acme Corp"
                        />
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="interest" className={styles.label}>Area of Strategic Interest</label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        className={styles.select}
                      >
                        <option value="General Inquiry">General Inquiry / Consultation</option>
                        <option value="Talent Management">Talent Management & Strategic HRM</option>
                        <option value="Leadership Assessment">Talent & Leadership Assessment</option>
                        <option value="Organization Effectiveness">Organization Effectiveness & FRWCM</option>
                        <option value="Learning Development">Learning & Leadership Development</option>
                        <option value="People Analytics">People & Talent Analytics</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="message" className={styles.label}>Brief Project Context / Inquiry Details</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={styles.textarea}
                        placeholder="Please describe your current organizational goals or challenges..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className={styles.submitBtn}
                    >
                      {formStatus === "submitting" ? "Submitting Inquiry..." : "Submit Inquiry"}
                    </button>
                  </form>
                )}
              </Reveal>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
