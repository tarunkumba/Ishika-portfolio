"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { VinylDisc, VinylTonearm } from "./vinyl-player";

const TRACK_SRC = "/assets/audio/training-season.mp3";
const ARTWORK = "/assets/img/vinyl/training-season-cover.png";

export function HeroVinyl() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.setAttribute("playsinline", "true");
    audio.setAttribute("webkit-playsinline", "true");
    audio.load();

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onError = () => setPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("playing", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onPause);
    audio.addEventListener("error", onError);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("playing", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onPause);
      audio.removeEventListener("error", onError);
      audio.pause();
    };
  }, []);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      setPlaying(false);
      return;
    }

    setPlaying(true);
    const attempt = audio.play();
    if (attempt !== undefined) {
      attempt.catch(() => setPlaying(false));
    }
  }, []);

  return (
    <button
      type="button"
      className="hero-vinyl"
      aria-label={playing ? "Pause Training Season" : "Play Training Season"}
      aria-pressed={playing}
      onClick={toggle}
    >
      <audio ref={audioRef} preload="auto" loop playsInline src={TRACK_SRC} />
      <VinylDisc
        avatarSrc={ARTWORK}
        voiceName="Dua Lipa — Training Season"
        spinning={playing}
      />
      <VinylTonearm playing={playing} />
    </button>
  );
}
