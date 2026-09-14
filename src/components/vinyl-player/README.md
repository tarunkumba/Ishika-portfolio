# Vinyl Player

Self-contained vinyl disc + tonearm player UI for React + Tailwind.

## Copy into another project

```bash
cp -R src/components/vinyl-player /path/to/other-project/src/components/vinyl-player
```

Requirements:

- React 18+
- Tailwind CSS (spin animation + basic utilities)
- Optional: `tailwindcss-animate` (or drop `animate-in` classes)

## Usage

```tsx
import { VinylPlayer } from "@/components/vinyl-player"

export function Demo() {
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  return (
    <VinylPlayer
      avatarSrc="/avatars/maya.png"
      avatarAlt="Maya"
      title="Generated voiceover"
      subtitle="Maya · Natural · English"
      playing={playing}
      progress={progress}
      durationSec={32}
      onTogglePlay={() => setPlaying((v) => !v)}
      actions={[
        { id: "share", label: "Share", icon: "share" },
        { id: "regen", label: "Regenerate", icon: "refresh", onClick: () => {} },
        { id: "dl", label: "Download", icon: "download", onClick: () => {} },
      ]}
    />
  )
}
```

### Loading state

```tsx
<VinylPlayer
  avatarSrc="/avatars/maya.png"
  generating
  generatingSteps={[
    { title: "Fine-tuning your voice", detail: "Matching tone…" },
  ]}
/>
```

## Pieces

| Export | Purpose |
| --- | --- |
| `VinylPlayer` | Full player (disc, tonearm, progress, actions, loading) |
| `VinylDisc` | Disc only |
| `VinylTonearm` | Tonearm only |

No Kumba design-system imports — safe to drop into another app.
