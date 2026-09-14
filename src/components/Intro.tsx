"use client";

import { useState } from "react";
import { PhotoFrame } from "./PhotoFrame";
import { IdCard } from "./IdCard";
import { HeroVinyl } from "./HeroVinyl";
import { DisplacementGrid } from "./DisplacementGrid";
import { NudgeHero } from "./NudgeHero";
import { RoamingDragon } from "./RoamingDragon";
import { HangingFlowerPot } from "./HangingFlowerPot";
import "./Intro.css";

type HeroVersion = 1 | 2;

function HeroCopy() {
  return (
    <div className="intro__copy">
      <h1 className="intro__heading" id="intro-heading">
        <span className="intro__heading-line">Hey, I&apos;m Ishika Dixit</span>
      </h1>

      <p className="intro__sub">
        Product designer at{" "}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="intro__hownow"
          src="https://cdn.prod.website-files.com/646bb0b0d48c3722bf621e02/64818a0a5e3f2aa7627d64fb_Mask%20group.webp"
          alt="HowNow"
          width={1009}
          height={251}
        />
        , working across product{" "}
        <br className="intro__sub-break" />
        experiences, workflows, and systems.
      </p>

      <div className="intro__actions">
        <a className="intro__cta intro__cta--primary" href="#work">
          See my work
        </a>
        <a className="intro__cta intro__cta--secondary" href="#contact">
          Say hello
        </a>
      </div>
    </div>
  );
}

export function Intro() {
  const [version, setVersion] = useState<HeroVersion>(1);

  return (
    <>
      <section
        className={`intro intro--v${version}`}
        id="top"
        aria-labelledby="intro-heading"
      >
        <DisplacementGrid />
        <HangingFlowerPot />
        <RoamingDragon />

        {version === 1 ? (
          <>
            <div className="intro__decor intro__decor--id-card">
              <IdCard />
            </div>

            <div className="intro__stage">
              <PhotoFrame
                src="/assets/img/ishika-portrait.webp?v=2"
                alt="Ishika Dixit"
                caption="that's me"
              />
              <HeroCopy />
            </div>

            <div className="intro__decor intro__decor--music">
              <HeroVinyl />
            </div>
          </>
        ) : (
          <NudgeHero />
        )}
      </section>

      <div className="intro__toggle" role="group" aria-label="Hero layout">
        <button
          type="button"
          className={version === 1 ? "is-active" : undefined}
          aria-pressed={version === 1}
          onClick={() => setVersion(1)}
        >
          Hero 1
        </button>
        <button
          type="button"
          className={version === 2 ? "is-active" : undefined}
          aria-pressed={version === 2}
          onClick={() => setVersion(2)}
        >
          Hero 2
        </button>
      </div>
    </>
  );
}
