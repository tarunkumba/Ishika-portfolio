import { cn } from "./utils"

export function VinylDisc({
  avatarSrc,
  voiceName,
  spinning,
}: {
  avatarSrc: string
  voiceName: string
  spinning: boolean
}) {
  return (
    <div className={cn("relative aspect-square w-[10.75rem] sm:w-[12rem]")} aria-hidden>
      <div
        className="pointer-events-none absolute -inset-2 rounded-full opacity-70 blur-xl sm:-inset-6 sm:blur-2xl"
        style={{
          background:
            "radial-gradient(circle at 45% 40%, rgba(196, 181, 253, 0.45) 0%, rgba(253, 233, 244, 0.4) 42%, rgba(249, 195, 131, 0.28) 68%, transparent 78%)",
        }}
      />

      <div
        className="absolute inset-[4%] rounded-full"
        style={{
          boxShadow:
            "0 28px 48px -24px rgba(24, 24, 27, 0.35), 0 12px 24px -16px rgba(139, 92, 246, 0.22)",
        }}
      />

      <div
        className="absolute inset-0 overflow-hidden rounded-full motion-safe:animate-[spin_8s_linear_infinite]"
        style={{
          animationPlayState: spinning ? "running" : "paused",
          background:
            "radial-gradient(circle at 38% 32%, #3f3f46 0%, #18181b 42%, #09090b 72%, #000 100%)",
        }}
      >
        <div
          className="absolute inset-[7%] rounded-full opacity-[0.55]"
          style={{
            background: `
              repeating-radial-gradient(
                circle at center,
                transparent 0 2px,
                rgba(255,255,255,0.045) 2px 3px
              )
            `,
          }}
        />
        <div
          className="absolute inset-[18%] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle at 30% 28%, rgba(255,255,255,0.12), transparent 55%)",
          }}
        />

        <div className="absolute inset-[32%] overflow-hidden rounded-full border border-white/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={avatarSrc} alt="" className="size-full object-cover object-[center_42%]" />
          <span className="sr-only">{voiceName}</span>
        </div>
      </div>
    </div>
  )
}
