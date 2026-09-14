import "./PhotoFrame.css";

type PhotoFrameProps = {
  src: string;
  alt: string;
  caption?: string;
};

export function PhotoFrame({ src, alt, caption }: PhotoFrameProps) {
  return (
    <div className="photo-frame">
      <span className="photo-frame__doodle" aria-hidden="true">
        <svg viewBox="0 0 28 24" fill="none">
          <path
            d="M4 18 L8 6"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M12 20 L14 5"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M20 17 L24 7"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </span>

      <div className="photo-frame__stack">
        <span className="photo-frame__back" aria-hidden="true" />
        <figure className="photo-frame__main">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} width={280} height={340} />
        </figure>
      </div>

      {caption ? (
        <p className="photo-frame__caption">{caption}</p>
      ) : null}
    </div>
  );
}
