import type { Metadata } from "next";
import ApproachClient from "./ApproachClient";

export const metadata: Metadata = {
  title: "Our Approach & Engagement Model | Performance Dimensions Global",
  description:
    "A diagnostic, solutions-led engagement methodology across five phases — Inquiry, Diagnosis, Insights, Engagement, and Evaluation — designed to co-create sustainable organizational value.",
};

export default function Approach() {
  return <ApproachClient />;
}
