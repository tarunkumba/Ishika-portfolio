import { Just_Me_Again_Down_Here } from "next/font/google";
import { PlaygroundCanvas } from "@/components/PlaygroundCanvas";
import type { Metadata } from "next";

const hand = Just_Me_Again_Down_Here({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-playground-hand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Playground — Ishika",
  description: "A draggable scrapbook of tiny moments.",
};

export default function PlaygroundPage() {
  return (
    <div className={`playground-page ${hand.variable}`}>
      <h1 className="sr-only">Playground</h1>
      <PlaygroundCanvas />
    </div>
  );
}
