import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Performance Dimensions Global",
  description:
    "Start a conversation with Performance Dimensions Global about Talent Management, Leadership Assessment, Organization Effectiveness, or People Analytics consulting.",
};

export default function Contact() {
  return <ContactClient />;
}
