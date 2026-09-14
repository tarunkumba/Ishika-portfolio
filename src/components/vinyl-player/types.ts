export type VinylGeneratingStep = {
  title: string
  detail: string
}

export type VinylPlayerAction = {
  id: string
  label: string
  /** Optional leading SVG path / icon key handled by the host if needed. */
  icon?: "share" | "refresh" | "download"
  onClick?: () => void
  loading?: boolean
  disabled?: boolean
}

export type VinylPlayerProps = {
  className?: string
  /** Center label artwork */
  avatarSrc: string
  avatarAlt?: string
  /** Eyebrow when ready (e.g. "Generated voiceover") */
  title?: string
  /** Subtitle / meta line when ready */
  subtitle?: string
  /** Disc spin + tonearm down */
  playing?: boolean
  /** Show loading chrome instead of play controls */
  generating?: boolean
  /** Rotating copy while generating */
  generatingSteps?: readonly VinylGeneratingStep[]
  /** 0–100 */
  progress?: number
  /** Total length in seconds */
  durationSec?: number
  onTogglePlay?: () => void
  actions?: VinylPlayerAction[]
}
