"use client";

import { DisplacementGrid } from "./DisplacementGrid";
import { NudgeHero } from "./NudgeHero";
import { RoamingDragon } from "./RoamingDragon";
import { HangingFlowerPot } from "./HangingFlowerPot";
import "./Intro.css";

export function Intro() {
  return (
    <section
      className="intro intro--v2"
      id="top"
      aria-labelledby="intro-heading"
    >
      <DisplacementGrid />
      <HangingFlowerPot />
      <RoamingDragon />
      <NudgeHero />
    </section>
  );
}
