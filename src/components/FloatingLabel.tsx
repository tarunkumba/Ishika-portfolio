import type { CSSProperties, ReactNode } from "react";
import "./FloatingLabel.css";

export type FloatingLabelTone = "mint" | "peach" | "lavender" | "pink";
export type FloatingLabelMotion = "drift" | "bob" | "orbit" | "sway";
export type FloatingLabelPointer = "down" | "up" | "left" | "right" | "none";

type FloatingLabelProps = {
  label: string;
  tone: FloatingLabelTone;
  motion?: FloatingLabelMotion;
  icon?: ReactNode;
  statusDot?: boolean;
  pointer?: FloatingLabelPointer;
  className?: string;
  style?: CSSProperties;
};

export function FloatingLabel({
  label,
  tone,
  motion = "drift",
  icon,
  statusDot = false,
  pointer = "none",
  className = "",
  style,
}: FloatingLabelProps) {
  return (
    <div
      className={`float-tag float-tag--${tone} float-tag--${motion} ${className}`}
      style={style}
    >
      <span className="float-tag__chip">
        {icon ? <span className="float-tag__icon">{icon}</span> : null}
        {statusDot ? <span className="float-tag__dot" aria-hidden="true" /> : null}
        <span className="float-tag__text">{label}</span>
      </span>
      {pointer !== "none" ? (
        <span
          className={`float-tag__pointer float-tag__pointer--${pointer}`}
          aria-hidden="true"
        />
      ) : null}
    </div>
  );
}
