export function VinylTonearm({ playing }: { playing: boolean }) {
  return (
    <div
      className="pointer-events-none absolute top-[-4%] right-[-14%] z-10 h-[68%] w-[48%] origin-[84%_11%] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{
        transform: playing ? "rotate(22deg)" : "rotate(-24deg)",
      }}
      aria-hidden
    >
      <svg viewBox="0 0 120 200" className="h-full w-full drop-shadow-sm" fill="none">
        <rect
          x="78"
          y="8"
          width="28"
          height="22"
          rx="3"
          fill="url(#vinyl-tonearm-base)"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="0.8"
        />
        <path
          d="M92 30 L90 102 C89 118 82 132 66 144 L44 158"
          stroke="url(#vinyl-tonearm-arm)"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <path d="M44 158 L34 166" stroke="#A1A1AA" strokeWidth="3.5" strokeLinecap="round" />
        <rect
          x="24"
          y="162"
          width="16"
          height="12"
          rx="2"
          fill="#D4D4D8"
          stroke="rgba(24,24,27,0.2)"
          strokeWidth="0.6"
          transform="rotate(-28 32 168)"
        />
        <defs>
          <linearGradient id="vinyl-tonearm-base" x1="78" y1="8" x2="106" y2="30">
            <stop stopColor="#F4F4F5" />
            <stop offset="1" stopColor="#D4D4D8" />
          </linearGradient>
          <linearGradient id="vinyl-tonearm-arm" x1="92" y1="30" x2="44" y2="158">
            <stop stopColor="#E4E4E7" />
            <stop offset="0.55" stopColor="#A1A1AA" />
            <stop offset="1" stopColor="#71717A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
