import type { CSSProperties } from "react";
import { FloatingLabel } from "./FloatingLabel";
import "./Hero.css";

function BuildingIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3.2 13.5V4.1L8 2.3l4.8 1.8v9.4"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <path d="M6.2 13.5V8.2h3.6v5.3" stroke="currentColor" strokeWidth="1.35" />
      <path
        d="M5.8 5.6h.01M8 5.6h.01M10.2 5.6h.01M5.8 7.4h.01M10.2 7.4h.01"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.35" />
      <path
        d="m9.8 9.8 2.8 2.8"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="5.1" r="2.15" stroke="currentColor" strokeWidth="1.35" />
      <path
        d="M3.7 12.8c.75-2.15 2.25-3.25 4.3-3.25s3.55 1.1 4.3 3.25"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 13.3s3.7-3 3.7-5.9A3.7 3.7 0 1 0 4.3 7.4c0 2.9 3.7 5.9 3.7 5.9Z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="7.3" r="1.15" fill="currentColor" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8.8 2.5 4.2 9h3.1l-.7 4.5L12 7.2H8.7l1.1-4.7Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="m8 2.8 5.2 2.7L8 8.2 2.8 5.5 8 2.8Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="m2.8 8 5.2 2.7L13.2 8"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m2.8 10.5 5.2 2.7 5.2-2.7"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="6" cy="5.2" r="1.9" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="10.4" cy="5.8" r="1.55" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M2.6 12.5c.55-1.85 1.85-2.8 3.4-2.8 1.2 0 2.15.55 2.8 1.45"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M9.1 11.2c.45-.55 1.15-.9 2-.9 1.2 0 2.1.65 2.5 1.85"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-name">
      <div className="hero__atmosphere" aria-hidden="true">
        <span className="hero__blob hero__blob--tl" />
        <span className="hero__blob hero__blob--tr" />
        <span className="hero__blob hero__blob--br" />
        <span className="hero__dots" />
      </div>

      <div className="hero__stage">
        <div className="hero__labels" aria-label="Highlights">
          <FloatingLabel
            className="hero__label hero__label--current"
            label="Currently at Meridian Health"
            tone="mint"
            motion="bob"
            pointer="down"
            statusDot
            icon={<BuildingIcon />}
            style={
              {
                "--float-rot": "-4deg",
                "--float-delay": "0s",
                "--float-duration": "6.4s",
              } as CSSProperties
            }
          />
          <FloatingLabel
            className="hero__label hero__label--previous"
            label="Currently at HowNow"
            tone="peach"
            motion="drift"
            icon={<SearchIcon />}
            style={
              {
                "--float-rot": "5deg",
                "--float-delay": "0.7s",
                "--float-duration": "7.6s",
              } as CSSProperties
            }
          />
          <FloatingLabel
            className="hero__label hero__label--role"
            label="Product Designer"
            tone="lavender"
            motion="orbit"
            pointer="up"
            icon={<PersonIcon />}
            style={
              {
                "--float-rot": "-6deg",
                "--float-delay": "0.35s",
                "--float-duration": "8.8s",
              } as CSSProperties
            }
          />
          <FloatingLabel
            className="hero__label hero__label--location"
            label="Mumbai"
            tone="pink"
            motion="sway"
            pointer="left"
            icon={<PinIcon />}
            style={
              {
                "--float-rot": "4deg",
                "--float-delay": "1s",
                "--float-duration": "5.9s",
              } as CSSProperties
            }
          />
        </div>

        <div className="hero__core">
          <h1 className="hero__name" id="hero-name">
            ISHIKA
          </h1>

          <p className="hero__headline">
            I design outstanding{" "}
            <span className="hero__headline-mark">
              digital products.
              <span className="hero__spark" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </span>
            </span>
          </p>

          <ul className="hero__traits">
            <li>
              <BoltIcon />
              <span>User Centric</span>
            </li>
            <li>
              <LayersIcon />
              <span>Systems Thinking</span>
            </li>
            <li>
              <PeopleIcon />
              <span>Real World Impact</span>
            </li>
          </ul>

          <a className="hero__cta" href="#contact">
            <span className="hero__cta-orb" aria-hidden="true">
              <svg viewBox="0 0 16 16" fill="none">
                <path
                  d="M3.4 8h9.2M8.8 4.4 12.4 8l-3.6 3.6"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="hero__cta-label">Contact me</span>
          </a>
        </div>
      </div>
    </section>
  );
}
