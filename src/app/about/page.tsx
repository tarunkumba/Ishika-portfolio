import type { Metadata } from "next";
import { AboutSection } from "@/components/AboutSection";

export const metadata: Metadata = {
  title: "About — Ishika",
  description:
    "About Ishika — product designer in Mumbai. Currently at HowNow.",
};

export default function AboutPage() {
  return <AboutSection variant="page" />;
}
