"use client"

import * as React from "react"

import type { VinylGeneratingStep, VinylPlayerAction, VinylPlayerProps } from "./types"
import { cn, formatDuration } from "./utils"
import { VinylDisc } from "./vinyl-disc"
import { VinylTonearm } from "./vinyl-tonearm"

const DEFAULT_GENERATING_STEPS: readonly VinylGeneratingStep[] = [
  {
    title: "Warming up the studio",
    detail: "Getting your voice ready for the take…",
  },
  {
    title: "Fine-tuning your voice",
    detail: "Matching tone, pace, and warmth to the script…",
  },
  {
    title: "Polishing the final pass",
    detail: "Almost ready — locking clarity and cadence…",
  },
]

function ActionIcon({ name }: { name: NonNullable<VinylPlayerAction["icon"]> }) {
  const common = {
    width: 14,
    height: 14,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  }

  if (name === "share") {
    return (
      <svg {...common}>
        <path d="M22 2 11 13" />
        <path d="M22 2 15 22 11 13 2 9 22 2z" />
      </svg>
    )
  }
  if (name === "refresh") {
    return (
      <svg {...common}>
        <path d="M21 12a9 9 0 1 1-2.6-6.3" />
        <path d="M21 3v6h-6" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  )
}

function PlayPauseIcon({ playing }: { playing: boolean }) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      {playing ? (
        <path d="M7 5h3.5v14H7V5zm6.5 0H17v14h-3.5V5z" />
      ) : (
        <path d="M8 5.5v13l11-6.5L8 5.5z" />
      )}
    </svg>
  )
}

export function VinylPlayer({
  className,
  avatarSrc,
  avatarAlt = "Vinyl artwork",
  title = "Generated voiceover",
  subtitle,
  playing = false,
  generating = false,
  generatingSteps = DEFAULT_GENERATING_STEPS,
  progress = 0,
  durationSec = 0,
  onTogglePlay,
  actions,
}: VinylPlayerProps) {
  const [stepIndex, setStepIndex] = React.useState(0)
  const steps = generatingSteps.length > 0 ? generatingSteps : DEFAULT_GENERATING_STEPS

  React.useEffect(() => {
    if (!generating) {
      setStepIndex(0)
      return
    }
    const id = window.setInterval(() => {
      setStepIndex((current) => (current + 1) % steps.length)
    }, 900)
    return () => window.clearInterval(id)
  }, [generating, steps.length])

  const elapsed = Math.round((progress / 100) * durationSec)
  const step = steps[stepIndex] ?? steps[0]

  return (
    <section
      className={cn(
        "flex w-full max-w-[560px] flex-col items-center gap-5 text-center",
        "animate-in fade-in zoom-in-95 duration-500 fill-mode-both",
        className
      )}
      aria-busy={generating || undefined}
      aria-live={generating ? "polite" : undefined}
    >
      {generating ? (
        <div className="relative inline-flex items-center justify-center pt-2 pb-1">
          <VinylDisc avatarSrc={avatarSrc} voiceName={avatarAlt} spinning />
          <VinylTonearm playing={false} />
        </div>
      ) : (
        <button
          type="button"
          aria-label={playing ? "Pause" : "Play"}
          onClick={onTogglePlay}
          className="relative inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-0 pt-2 pb-1 outline-none transition-transform duration-200 hover:scale-[1.02] focus-visible:rounded-full focus-visible:shadow-[0_0_0_2px_rgba(167,139,250,0.35)] active:scale-[0.99]"
        >
          <VinylDisc avatarSrc={avatarSrc} voiceName={avatarAlt} spinning={playing} />
          <VinylTonearm playing={playing} />
        </button>
      )}

      {generating ? (
        <div className="min-h-[3.25rem] space-y-1.5 px-4">
          <p
            key={step.title}
            className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#A855A0] animate-in fade-in duration-300"
          >
            {step.title}
          </p>
          <p
            key={step.detail}
            className="text-[14px] leading-relaxed text-zinc-500 animate-in fade-in duration-300"
          >
            {step.detail}
          </p>
        </div>
      ) : (
        <div className="space-y-1.5">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#A855A0]">
            {title}
          </p>
          {subtitle ? (
            <p className="text-[14px] leading-relaxed text-zinc-500">{subtitle}</p>
          ) : null}
        </div>
      )}

      {!generating ? (
        <>
          <div className="flex w-full max-w-[22rem] items-center gap-3 px-1">
            <button
              type="button"
              aria-label={playing ? "Pause" : "Play"}
              onClick={onTogglePlay}
              className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl border-0 text-zinc-950 shadow-sm outline-none transition hover:brightness-105 focus-visible:ring-2 focus-visible:ring-violet-300"
              style={{
                background: "linear-gradient(125deg, #F3D4EF 0%, #F9C383 100%)",
              }}
            >
              <PlayPauseIcon playing={playing} />
            </button>

            <div className="min-w-0 flex-1 space-y-1.5">
              <div
                className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-200"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(progress)}
              >
                <div
                  className="h-full rounded-[inherit] transition-[width] duration-100 ease-linear"
                  style={{
                    width: `${Math.min(100, Math.max(0, progress))}%`,
                    background:
                      "linear-gradient(90deg, rgba(167,139,250,0.85) 0%, #f9c383 100%)",
                  }}
                />
              </div>
              <div className="flex justify-between">
                <span className="text-[12px] text-zinc-400">{formatDuration(elapsed)}</span>
                <span className="text-[12px] text-zinc-400">{formatDuration(durationSec)}</span>
              </div>
            </div>
          </div>

          {actions && actions.length > 0 ? (
            <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
              {actions.map((action) => (
                <button
                  key={action.id}
                  type="button"
                  disabled={action.disabled || action.loading}
                  onClick={action.onClick}
                  className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-[13px] font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 disabled:opacity-50"
                >
                  {action.icon ? <ActionIcon name={action.icon} /> : null}
                  {action.loading ? `${action.label}…` : action.label}
                </button>
              ))}
            </div>
          ) : null}
        </>
      ) : null}
    </section>
  )
}
