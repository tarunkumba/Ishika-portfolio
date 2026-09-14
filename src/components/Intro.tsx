import { PhotoFrame } from "./PhotoFrame";
import { FilesFolder } from "./FilesFolder";
import { HeroVinyl } from "./HeroVinyl";
import { DisplacementGrid } from "./DisplacementGrid";
import "./Intro.css";

function HeroCopy() {
  return (
    <div className="intro__copy">
      <h1 className="intro__heading" id="intro-heading">
        <span className="intro__heading-line">Hey, I&apos;m Ishika Dixit</span>
      </h1>

      <p className="intro__sub">
        Product designer at{" "}
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
  return (
    <section
      className="intro intro--v1"
      id="top"
      aria-labelledby="intro-heading"
    >
      <DisplacementGrid />

      <div className="intro__decor intro__decor--folder">
        <FilesFolder />
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
    </section>
  );
}
