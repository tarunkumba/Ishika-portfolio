/**
 * Portable vinyl player — copy this folder into another React + Tailwind project.
 *
 * Peer deps: react, react-dom
 * Styling: Tailwind CSS (v3/v4). Uses only standard utilities + inline styles
 * (no design-system tokens required).
 */

export { VinylPlayer } from "./vinyl-player"
export { VinylDisc } from "./vinyl-disc"
export { VinylTonearm } from "./vinyl-tonearm"
export type {
  VinylPlayerProps,
  VinylGeneratingStep,
  VinylPlayerAction,
} from "./types"
