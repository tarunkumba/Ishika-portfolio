"use client";

import "./FilesFolder.css";

const files = [
  { id: "cover-letter", label: "Cover letter" },
  { id: "resume", label: "Resume" },
] as const;

export function FilesFolder() {
  return (
    <div className="files-folder" aria-hidden="true">
      <div className="files-folder__stack">
        {files.map((file) => (
          <div
            key={file.id}
            className={`files-folder__paper files-folder__paper--${file.id}`}
          >
            <span>{file.label}</span>
          </div>
        ))}

        <svg
          className="files-folder__tab"
          viewBox="0 0 145.5 54.5"
          aria-hidden="true"
        >
          <path
            d="M 0 44.5 C 0 50.023 4.477 54.5 10 54.5 L 135.5 54.5 C 141.023 54.5 145.5 50.023 145.5 44.5 L 145.5 18.5 C 145.5 14.082 141.918 10.5 137.5 10.5 L 59.139 10.5 C 56.512 10.5 54.016 9.352 52.306 7.357 L 48.095 2.444 C 46.765 0.893 44.824 0 42.78 0 L 10 0 C 4.477 0 0 4.477 0 10 Z"
            fill="url(#folder-tab-fill)"
          />
          <defs>
            <linearGradient id="folder-tab-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5fc6f5" />
              <stop offset="100%" stopColor="#2bacee" />
            </linearGradient>
          </defs>
        </svg>

        <div className="files-folder__front">
          <span className="files-folder__shine" />
        </div>
      </div>
    </div>
  );
}
