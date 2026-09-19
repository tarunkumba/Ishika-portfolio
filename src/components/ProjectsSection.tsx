"use client";

import { FramerCardStack } from "./FramerCardStack";
import "./ProjectsSection.css";

export function ProjectsSection() {
  return (
    <section className="projects-section" id="work" aria-labelledby="projects-heading">
      <div className="projects-section__intro">
        <p className="projects-section__eyebrow">Selected work</p>
        <h2 className="projects-section__title" id="projects-heading">
          Projects
        </h2>
        <p className="projects-section__lede">
          A stack of recent product stories — swipe through the cards to explore.
        </p>
      </div>
      <div className="projects-section__cards">
        <FramerCardStack />
      </div>
    </section>
  );
}
