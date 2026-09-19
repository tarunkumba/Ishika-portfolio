"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import "./AboutSection.css";

const principles = [
  {
    title: "Starting with why, not what",
    note: "think first, draw later.",
    body: "Before jumping into wireframes, I want to understand what problem we’re actually solving. Sometimes the thing people ask for isn’t the thing they need.",
    tone: "cyan",
  },
  {
    title: "Designing for real constraints",
    note: "no perfect world here!",
    body: "Budgets are tight, timelines are aggressive, and legacy systems are messy. I’m comfortable making smart decisions with imperfect information.",
    tone: "yellow",
  },
  {
    title: "Collaboration over hero design",
    note: "we, not me.",
    body: "The best work happens when designers, engineers, and product folks are actually talking — not throwing things over the wall.",
    tone: "mint",
  },
  {
    title: "Making the invisible visible",
    note: "details build trust.",
    body: "Progress indicators, auto-save, helpful validation — the quiet pieces that keep people oriented and calm under pressure.",
    tone: "pink",
  },
] as const;

function InlineIcon({ src, round = false }: { src: string; round?: boolean }) {
  return (
    <span
      className={`about-section__inline-icon${round ? " about-section__inline-icon--round" : ""}`}
      aria-hidden="true"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" />
    </span>
  );
}

function FigmaFrame({ children }: { children: ReactNode }) {
  return (
    <div className="about-section__figma">
      <div className="about-section__figma-corners" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      {children}
    </div>
  );
}

type AboutSectionProps = {
  variant?: "home" | "page";
};

export function AboutSection({ variant = "home" }: AboutSectionProps) {
  const isPage = variant === "page";
  const shownPrinciples = isPage ? principles : principles.slice(0, 2);

  return (
    <section
      className={`about-section${isPage ? " about-section--page" : ""}`}
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="about-section__paper" aria-hidden="true" />

      <div className="about-section__inner">
        <div className="about-section__bio">
          <p className="about-section__tag">Bio</p>

          <FigmaFrame>
            <div className="about-section__figma-body">
              <h2 className="about-section__title" id="about-heading">
                I&apos;m Ishika{" "}
                <InlineIcon src="/assets/img/ishika-portrait.webp" round /> a
                product designer in Mumbai who gets excited{" "}
                <InlineIcon src="/assets/img/879e5ff02dd6933a.webp" /> about
                making complicated things simple{" "}
                <InlineIcon src="/assets/img/105ba28fe00f997a.webp" />.
              </h2>

              <div className="about-section__copy">
                <p>
                  I spend my days designing digital products where “just figure
                  it out” isn’t an option. The people using these tools are busy,
                  stressed, and have actual work to do. My job is to get out of
                  their way.
                </p>
                <p>
                  I’ve worked on teams of two and teams of twenty — with endless
                  research and with educated guesses. What stays consistent is
                  asking good questions, collaborating with people who know more
                  than me, and shipping things that actually help.
                </p>
              </div>

              <div className="about-section__note about-section__note--current">
                <p>
                  Currently, I’m at{" "}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="about-section__hownow"
                    src="/assets/img/hownow-logo.webp"
                    alt="HowNow"
                    width={160}
                    height={40}
                  />{" "}
                  designing learning experiences that feel clear and human.
                  Before that I worked on products where systems thinking
                  mattered as much as visual craft.
                </p>
              </div>

              <div className="about-section__note about-section__note--coffee">
                <p>
                  When I’m not designing, you’ll find me thinking about why some
                  interfaces feel intuitive and others make you want to throw
                  your laptop out a window. Usually with coffee.
                </p>
              </div>
            </div>

            <div className="about-section__cursor-tag" aria-hidden="true">
              <svg viewBox="0 0 28 26" width="16" height="15" aria-hidden="true">
                <path
                  d="M 0 0 L 12 26 L 14 13 L 28 9.5 Z"
                  fill="#f1e7b2"
                  stroke="#111212"
                  strokeWidth="2"
                />
              </svg>
              <span>Ishika</span>
            </div>
          </FigmaFrame>
        </div>

        <div className="about-section__story">
          <p className="about-section__tag about-section__tag--dark">My story</p>
          <h3 className="about-section__story-title">How I like to work</h3>

          <ul className="about-section__principles">
            {shownPrinciples.map((item) => (
              <li
                key={item.title}
                className={`about-section__principle about-section__principle--${item.tone}`}
              >
                <div className="about-section__principle-card">
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
                <aside className="about-section__sticky" aria-hidden="true">
                  {item.note}
                </aside>
              </li>
            ))}
          </ul>

          {isPage ? (
            <div className="about-section__experience">
              <h3 className="about-section__story-title">Experience</h3>
              <ul>
                <li>
                  <div>
                    <strong>HowNow</strong>
                    <span>Product Design</span>
                  </div>
                  <time>2025 — Current</time>
                </li>
                <li>
                  <div>
                    <strong>Searchless AI</strong>
                    <span>Product Design</span>
                  </div>
                  <time>Earlier</time>
                </li>
              </ul>
            </div>
          ) : (
            <p className="about-section__more">
              <Link href="/about">Read the full about →</Link>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
