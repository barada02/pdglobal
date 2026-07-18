import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services & Practice Clusters | Performance Dimensions Global",
  description:
    "An integrated portfolio spanning Talent Management, Leadership Assessment, Organization Effectiveness, Learning & Development, and People Analytics — including our proprietary Future Ready Work Characteristics Model (FRWCM).",
};

export default function Services() {
  return <ServicesClient />;
}
