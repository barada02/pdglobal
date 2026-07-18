# 📋 Project Development Proposal

## FRWCM Online Diagnostic Assessment Tool
### Digital Assessment Platform — Revised Client Proposal

---

> **Prepared for:** [Client Name]
> **Prepared by:** [Your Company/Name]
> **Date:** July 2026
> **Version:** 2.0 (Budget-Optimized)

---

## Executive Summary

We propose to design, develop, and deliver the **FRWCM Online Diagnostic Assessment Tool** — a complete digital platform for measuring organizational future-readiness — within a **lean, optimized budget of under $15,000 USD**, without compromising on core functionality.

This is achieved by leveraging **modern Backend-as-a-Service (BaaS) tools**, **pre-built UI component libraries**, and **efficient offshore development practices** to eliminate redundant build time while maintaining quality.

**Timeline: 12 Weeks (3 Months)**
**Team: 2 Developers (Full-time)**
**Total Budget: $13,500 – $14,900 USD**

---

## ⚡ Cost Optimization Strategy

Instead of building everything from scratch, we leverage best-in-class open platforms to dramatically cut development hours:

| Area | Instead of... | We use... | Time Saved |
|---|---|---|---|
| Backend + DB | Custom Node.js API + PostgreSQL | **Supabase** (BaaS — DB + REST APIs + Realtime) | ~3 weeks |
| Authentication | Custom auth system | **Firebase Auth / Supabase Auth** (Free tier) | ~1 week |
| UI Components | Custom CSS components | **Shadcn/UI + Tailwind** (pre-built) | ~2 weeks |
| Charts | Custom D3.js | **Recharts / Chart.js** (drop-in) | ~1 week |
| PDF Export | Custom renderer | **react-pdf / jsPDF** library | ~3 days |
| Deployment | Manual DevOps setup | **Vercel + Supabase** (1-click deploy) | ~4 days |

> 💡 **Result:** ~7 weeks saved → 16-week plan becomes a lean **12-week plan**

---

## 📐 Optimized Tech Stack

| Layer | Technology | Cost |
|---|---|---|
| Frontend | Next.js + Shadcn/UI + Tailwind | Free (open-source) |
| Backend / DB | Supabase (PostgreSQL + REST + Realtime) | Free tier |
| Authentication | Supabase Auth (Email + SSO) | Free tier |
| Charts | Recharts + Chart.js | Free |
| PDF Export | react-pdf / jsPDF | Free |
| CSV Export | Papa Parse | Free |
| Hosting | Vercel (Frontend) + Supabase (Backend) | Free tier |
| CI/CD | GitHub Actions | Free |

> 💰 **Infrastructure cost: $0 during development, ~$25–$50/month in production**

---

## 👥 Development Team

| Role | Responsibility | Rate |
|---|---|---|
| **Developer 1 — Full-Stack** | Supabase setup, scoring engine, APIs, admin console, exports | $22/hr |
| **Developer 2 — Frontend/UI** | Assessment UI, reporting dashboards, charts, responsive design | $18/hr |

---

## 📅 Project Plan — 12 Weeks

### Phase 1: Setup & Architecture *(Week 1)*
- Supabase project setup (DB schema, tables, RLS policies)
- Next.js project scaffolding with Shadcn/UI
- GitHub repo, CI/CD pipeline, Vercel deployment
- Authentication setup (email + SSO)
- Tokenized assessment link generation

**Dev 1:** 35 hrs | **Dev 2:** 30 hrs

---

### Phase 2: Assessment Engine *(Week 2–5)*
- 7 FRWCM characteristics with 5–7 Likert-scale questions each
- Optional open-text reflection per characteristic
- Step-by-step assessment flow with progress bar
- **Autosave every 5 seconds** (Supabase Realtime)
- **Resume capability** — return and continue anytime
- Mobile-responsive assessment UI

**Dev 1:** 85 hrs | **Dev 2:** 95 hrs

---

### Phase 3: Scoring Engine *(Week 6–7)*
- Normalize Likert responses (1–5 → 0–100)
- Per-characteristic weighted scoring logic
- Composite **FRWCM Index** calculation
- Maturity band mapping:
  - 🔴 Emerging (0–39)
  - 🟡 Foundational (40–59)
  - 🟢 Advanced (60–79)
  - 🏆 Leading (80–100)
- Auto-generated narrative interpretation

**Dev 1:** 75 hrs | **Dev 2:** 25 hrs

---

### Phase 4: Reporting & Analytics *(Week 8–10)*

**Individual Report:**
- FRWCM Index score display
- Characteristic-level breakdown
- Strengths & vulnerabilities section
- Personalized recommendations
- **Radar Chart** (Recharts)
- **PDF export** of individual report

**Team/Org Dashboard (Admin View):**
- Aggregated FRWCM Index
- Score distribution chart
- **Heatmap** by role, function, workflow
- Filter by team/department
- **CSV export**

**Dev 1:** 80 hrs | **Dev 2:** 95 hrs

---

### Phase 5: Admin Console *(Week 11)*
- Participant invite (email link)
- View completion status per participant
- Assessment management (publish/archive)
- Basic role-based access (Admin / Participant)

**Dev 1:** 35 hrs | **Dev 2:** 30 hrs

---

### Phase 6: Testing, Polish & Launch *(Week 12)*
- End-to-end testing (assessment → scoring → report)
- Cross-browser & mobile device testing
- Bug fixes & UI polish
- Production deployment
- Admin handover guide

**Dev 1:** 20 hrs | **Dev 2:** 25 hrs

---

## 📊 Hours & Budget Breakdown

| Phase | Dev 1 Hrs | Dev 2 Hrs | Total Hrs |
|---|---|---|---|
| Phase 1 — Setup & Architecture | 35 | 30 | 65 |
| Phase 2 — Assessment Engine | 85 | 95 | 180 |
| Phase 3 — Scoring Engine | 75 | 25 | 100 |
| Phase 4 — Reporting & Analytics | 80 | 95 | 175 |
| Phase 5 — Admin Console | 35 | 30 | 65 |
| Phase 6 — Testing & Launch | 20 | 25 | 45 |
| **TOTAL** | **330 hrs** | **300 hrs** | **630 hrs** |

---

## 💰 Final Budget

| Resource | Hours | Rate/hr | Amount |
|---|---|---|---|
| Developer 1 (Full-Stack) | 330 hrs | $22/hr | $7,260 |
| Developer 2 (Frontend) | 300 hrs | $18/hr | $5,400 |
| **Subtotal** | | | **$12,660** |
| Project Management (8%) | — | — | $1,013 |
| Contingency Buffer (10%) | — | — | $1,266 |
| **Total** | | | **~$14,939** |

---

> ## ✅ Total Quoted Price: **$13,500 – $14,900 USD**
> *Well within the $15,000 budget target*

---

### 🇮🇳 INR Equivalent (for reference)

| Item | Amount |
|---|---|
| Development (630 hrs) | ₹10,45,000 |
| PM + Buffer | ₹1,85,000 |
| **Total** | **₹11,20,000 – ₹12,40,000** |

---

## 🏗️ Infrastructure (Post-Launch)

| Service | Monthly Cost |
|---|---|
| Vercel (Hosting) | Free – $20/mo |
| Supabase (DB + Auth + API) | Free – $25/mo |
| Email (Resend / SendGrid) | Free – $20/mo |
| Domain + SSL | ~$15/yr |
| **Estimated Total** | **$0 – $65/mo** |

> Very low operational cost thanks to generous free tiers.

---

## 📦 What's Included

✅ Full source code (Git repository handover)
✅ All 7 FRWCM characteristics with Likert-scale scoring
✅ Automated scoring engine + maturity band classification
✅ Individual report with Radar Chart
✅ PDF export of individual report
✅ Org-level dashboard with heatmap & distribution chart
✅ CSV data export
✅ Admin console (invite, manage, track participants)
✅ Email-based authentication
✅ Autosave & resume capability
✅ Fully responsive (desktop + mobile)
✅ Deployed to production (Vercel + Supabase)
✅ Handover documentation

---

## ❌ Out of Scope

- Enterprise SSO (SAML/Okta) — adds ~$2,000 if needed
- Native mobile app (iOS/Android)
- HRIS / Workday integrations
- Multi-language support
- Ongoing maintenance retainer (quoted separately)
- Custom brand design / logo creation

---

## 💳 Payment Schedule

| Milestone | % | Approx. Amount | Trigger |
|---|---|---|---|
| Project Kickoff | 33% | ~$4,700 | Contract signed |
| Assessment + Scoring Complete | 33% | ~$4,700 | Phase 3 sign-off |
| Final Delivery + Launch | 34% | ~$4,900 | Go-live |

---

## ⚠️ Key Assumptions

> [!IMPORTANT]
> Scope must be frozen after Week 1. Changes after Phase 2 will require a change order.

> [!NOTE]
> Rates are based on offshore development. The timeline assumes full-time dedication (5 days/week) from both developers.

> [!NOTE]
> Enterprise SSO (Okta, SAML) is not included. Standard email login + Google/Microsoft OAuth is covered.

---

## ✅ Next Steps

1. ✅ Review this proposal
2. ✍️ Sign contract & initial payment
3. 📅 Schedule kickoff call
4. 🚀 Development starts — Week 1

---

*Proposal valid for 30 days. All rates in USD.*

---

**[Your Company Name]**
**Contact:** [your@email.com] | [Phone]
