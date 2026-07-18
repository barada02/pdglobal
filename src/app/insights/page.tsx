import type { Metadata } from "next";
import InsightsClient from "./InsightsClient";

export const metadata: Metadata = {
  title: "Insights & Thought Leadership | Performance Dimensions Global",
  description:
    "Research, journal publications, and thought leadership from Dr. Himank Priyadarshi on employee engagement, talent assessment, succession management, and competency models.",
};

export default function Insights() {
  return <InsightsClient />;
}
