"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import "./InteractiveFrame.css";

type Handle = "nw" | "n" | "ne" | "e" | "se" | "s" | "sw" | "w";

type FrameRect = {
  x: number;
  y: number;
  w: number;
  h: number;
};

const HANDLES: Handle[] = ["nw", "n", "ne", "e", "se", "s", "sw", "w"];

const DEFAULT_MIN_W = 160;
const DEFAULT_MIN_H = 72;
const ARROW_STEP = 1;
const ARROW_STEP_FAST = 10;

type Mode =
  | { type: "drag"; startX: number; startY: number; origin: FrameRect }
  | {
      type: "resize";
      handle: Handle;
      startX: number;
      startY: number;
      origin: FrameRect;
    }
  | null;

type InteractiveFrameProps = {
  children: ReactNode;
  className?: string;
  /** Extra class on the framed surface (keeps existing name-box styles) */
  surfaceClassName?: string;
  "aria-label"?: string;
  /** Sticker frames stay visually selected and skip L-corners */
  variant?: "default" | "sticker";
  minWidth?: number;
  minHeight?: number;
};

export function InteractiveFrame({
  children,
  className = "",
  surfaceClassName = "",
  "aria-label": ariaLabel = "Interactive frame",
  variant = "default",
  minWidth,
  minHeight,
}: InteractiveFrameProps) {
  const isSticker = variant === "sticker";
  const baseMinW = minWidth ?? (isSticker ? 40 : DEFAULT_MIN_W);
  const baseMinH = minHeight ?? (isSticker ? 40 : DEFAULT_MIN_H);

  const slotRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<FrameRect>({ x: 0, y: 0, w: 0, h: 0 });
  const minRef = useRef({ w: baseMinW, h: baseMinH });
  const modeRef = useRef<Mode>(null);
  const selectedRef = useRef(isSticker);
  const rafRef = useRef(0);
  const primedRef = useRef(false);

  const [selected, setSelected] = useState(isSticker);
  const labelId = useId();

  const applyRect = useCallback((rect: FrameRect) => {
    const frame = frameRef.current;
    if (!frame) return;
    rectRef.current = rect;
    frame.style.width = `${rect.w}px`;
    frame.style.height = `${rect.h}px`;
    frame.style.transform = `translate3d(${rect.x}px, ${rect.y}px, 0)`;
  }, []);

  const clampToBounds = useCallback((rect: FrameRect): FrameRect => {
    const slot = slotRef.current;
    if (!slot) return rect;

    const slotBox = slot.getBoundingClientRect();
    const maxW = Math.max(minRef.current.w, window.innerWidth * 0.92);
    const maxH = Math.max(minRef.current.h, window.innerHeight * 0.55);
    const w = Math.min(Math.max(rect.w, minRef.current.w), maxW);
    const h = Math.min(Math.max(rect.h, minRef.current.h), maxH);

    const absLeft = slotBox.left + rect.x;
    const absTop = slotBox.top + rect.y;
    const pad = 24;
    let x = rect.x;
    let y = rect.y;

    if (absLeft + w < pad) x += pad - (absLeft + w);
    if (absTop + h < pad) y += pad - (absTop + h);
    if (absLeft > window.innerWidth - pad) {
      x -= absLeft - (window.innerWidth - pad);
    }
    if (absTop > window.innerHeight - pad) {
      y -= absTop - (window.innerHeight - pad);
    }

    return { x, y, w, h };
  }, []);

  const primeFromDom = useCallback(() => {
    const frame = frameRef.current;
    const slot = slotRef.current;
    if (!frame || !slot) return;

    // Measure natural size once on first load — don't re-stretch later
    if (primedRef.current) return;

    const box = frame.getBoundingClientRect();
    const w = Math.ceil(box.width);
    const h = Math.ceil(box.height);
    if (w < 40 || h < 40) return;

    minRef.current = {
      w: Math.max(baseMinW, Math.round(w * (isSticker ? 0.7 : 0.85))),
      h: Math.max(baseMinH, Math.round(h * (isSticker ? 0.7 : 0.85))),
    };
    slot.style.width = `${w}px`;
    slot.style.height = `${h}px`;
    frame.style.position = "absolute";
    frame.style.left = "0";
    frame.style.top = "0";
    applyRect({ x: 0, y: 0, w, h });
    primedRef.current = true;
  }, [applyRect, baseMinH, baseMinW, isSticker]);

  useEffect(() => {
    let cancelled = false;

    const run = () => {
      if (cancelled) return;
      primeFromDom();
    };

    run();
    // Retry after fonts in case first measure was too early / zero
    void document.fonts?.ready.then(run);
    const t = window.setTimeout(run, 120);

    const onResize = () => {
      if (!primedRef.current) return;
      applyRect(clampToBounds(rectRef.current));
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
      window.removeEventListener("resize", onResize);
    };
  }, [applyRect, clampToBounds, primeFromDom]);

  const setSelectedState = useCallback((next: boolean) => {
    selectedRef.current = next;
    setSelected(next);
  }, []);

  const deselect = useCallback(() => {
    modeRef.current = null;
    setSelectedState(false);
  }, [setSelectedState]);

  useEffect(() => {
    if (!selected) return;

    const onPointerDown = (event: PointerEvent) => {
      if (isSticker) return;
      const frame = frameRef.current;
      if (!frame) return;
      if (frame.contains(event.target as Node)) return;
      deselect();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (!selectedRef.current) return;
      if (event.key !== "Escape") return;
      if (isSticker) return;
      event.preventDefault();
      deselect();
      frameRef.current?.blur();
    };

    window.addEventListener("pointerdown", onPointerDown, true);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("pointerdown", onPointerDown, true);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected, deselect, isSticker]);

  const resizeFromHandle = (
    handle: Handle,
    origin: FrameRect,
    dx: number,
    dy: number,
  ): FrameRect => {
    let { x, y, w, h } = origin;

    const left = handle === "w" || handle === "nw" || handle === "sw";
    const right = handle === "e" || handle === "ne" || handle === "se";
    const top = handle === "n" || handle === "nw" || handle === "ne";
    const bottom = handle === "s" || handle === "sw" || handle === "se";

    if (left) {
      const nextW = Math.max(minRef.current.w, origin.w - dx);
      x = origin.x + (origin.w - nextW);
      w = nextW;
    }
    if (right) {
      w = Math.max(minRef.current.w, origin.w + dx);
    }
    if (top) {
      const nextH = Math.max(minRef.current.h, origin.h - dy);
      y = origin.y + (origin.h - nextH);
      h = nextH;
    }
    if (bottom) {
      h = Math.max(minRef.current.h, origin.h + dy);
    }

    if (
      (handle === "nw" || handle === "ne" || handle === "sw" || handle === "se") &&
      origin.w > 0 &&
      origin.h > 0
    ) {
      const aspect = origin.w / origin.h;
      if (Math.abs(dx) * origin.h > Math.abs(dy) * origin.w) {
        h = Math.max(minRef.current.h, w / aspect);
        if (top) y = origin.y + origin.h - h;
      } else {
        w = Math.max(minRef.current.w, h * aspect);
        if (left) x = origin.x + origin.w - w;
      }
    }

    return { x, y, w, h };
  };

  const onPointerMove = useCallback(
    (event: PointerEvent) => {
      const mode = modeRef.current;
      if (!mode) return;

      event.preventDefault();
      const dx = event.clientX - mode.startX;
      const dy = event.clientY - mode.startY;

      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (mode.type === "drag") {
          applyRect(
            clampToBounds({
              ...mode.origin,
              x: mode.origin.x + dx,
              y: mode.origin.y + dy,
            }),
          );
          return;
        }

        applyRect(
          clampToBounds(
            resizeFromHandle(mode.handle, mode.origin, dx, dy),
          ),
        );
      });
    },
    // resizeFromHandle closes over minRef — safe across renders
    [applyRect, clampToBounds],
  );

  const endInteraction = useCallback(
    (event: PointerEvent) => {
      if (!modeRef.current) return;
      modeRef.current = null;
      const frame = frameRef.current;
      try {
        frame?.releasePointerCapture?.(event.pointerId);
      } catch {
        /* already released */
      }
      frame?.classList.remove("is-dragging", "is-resizing");
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", endInteraction);
      window.removeEventListener("pointercancel", endInteraction);
    },
    [onPointerMove],
  );

  const beginInteraction = (event: ReactPointerEvent, mode: Mode) => {
    event.preventDefault();
    event.stopPropagation();
    primeFromDom();
    setSelectedState(true);
    modeRef.current = mode;
    const frame = frameRef.current;
    try {
      frame?.setPointerCapture?.(event.pointerId);
    } catch {
      /* ignore */
    }
    frame?.focus({ preventScroll: true });
    frame?.classList.add(
      mode?.type === "resize" ? "is-resizing" : "is-dragging",
    );
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", endInteraction);
    window.addEventListener("pointercancel", endInteraction);
  };

  const onSurfacePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("[data-frame-handle]")) return;
    beginInteraction(event, {
      type: "drag",
      startX: event.clientX,
      startY: event.clientY,
      origin: { ...rectRef.current },
    });
  };

  const onHandlePointerDown = (
    event: ReactPointerEvent<HTMLSpanElement>,
    handle: Handle,
  ) => {
    beginInteraction(event, {
      type: "resize",
      handle,
      startX: event.clientX,
      startY: event.clientY,
      origin: { ...rectRef.current },
    });
  };

  const onKeyDownFrame = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      if (isSticker) return;
      event.preventDefault();
      deselect();
      return;
    }

    const arrows: Record<string, [number, number]> = {
      ArrowLeft: [-1, 0],
      ArrowRight: [1, 0],
      ArrowUp: [0, -1],
      ArrowDown: [0, 1],
    };
    const delta = arrows[event.key];
    if (!delta) return;
    event.preventDefault();
    const step = event.shiftKey ? ARROW_STEP_FAST : ARROW_STEP;
    applyRect(
      clampToBounds({
        ...rectRef.current,
        x: rectRef.current.x + delta[0] * step,
        y: rectRef.current.y + delta[1] * step,
      }),
    );
  };

  const rootClass = [
    "interactive-frame",
    isSticker ? "interactive-frame--sticker" : "",
    selected || isSticker ? "is-selected" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClass} ref={slotRef}>
      <div
        ref={frameRef}
        className={`interactive-frame__surface ${surfaceClassName}`.trim()}
        role="button"
        tabIndex={0}
        aria-pressed={selected || isSticker}
        aria-labelledby={labelId}
        aria-label={ariaLabel}
        onPointerDown={onSurfacePointerDown}
        onKeyDown={onKeyDownFrame}
        onDoubleClick={(event) => event.preventDefault()}
        style={
          {
            touchAction: "none",
          } satisfies CSSProperties
        }
      >
        <span id={labelId} className="interactive-frame__sr">
          {ariaLabel}
        </span>

        {!isSticker ? (
          <div className="interactive-frame__corners" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
        ) : null}

        <div className="interactive-frame__content">{children}</div>

        <div
          className="interactive-frame__handles"
          aria-hidden={!(selected || isSticker)}
        >
          {HANDLES.map((handle) => (
            <span
              key={handle}
              data-frame-handle={handle}
              className={`interactive-frame__handle interactive-frame__handle--${handle}`}
              onPointerDown={(event) => onHandlePointerDown(event, handle)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
