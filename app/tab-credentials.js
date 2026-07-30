"use client";

import { useEffect, useState } from "react";

function isPdf(src) {
  return typeof src === "string" && src.toLowerCase().endsWith(".pdf");
}

function CredentialModal({ title, src, onClose }) {
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div className="pf-modal-backdrop" onClick={onClose}>
      <div
        className="pf-modal"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
      >
        <button className="pf-modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <h3 className="pf-modal-title">{title}</h3>

        {isPdf(src) ? (
          <iframe className="tab-credential-pdf" src={src} title={title} />
        ) : (
          <img className="tab-credential-image" src={src} alt={title} />
        )}

        <a className="hp-inline-link" href={src} target="_blank" rel="noreferrer">
          Open in a new tab
        </a>
      </div>
    </div>
  );
}

export default function TabCredentials({
  credentials,
  certificationLabel,
  certificationFile,
  resumeLabel,
  resumeFile,
}) {
  const [open, setOpen] = useState(null); // "cert" | "resume" | null

  if (!credentials && !certificationFile && !resumeFile) return null;

  return (
    <>
      {credentials ? (
        <p className="tab-page-credential">
          <strong>Credentials</strong>
          <span>{credentials}</span>
        </p>
      ) : null}

      {certificationFile || resumeFile ? (
        <div className="tab-credential-links">
          {certificationFile ? (
            <button
              type="button"
              className="hp-inline-link"
              onClick={() => setOpen("cert")}
            >
              {certificationLabel}
            </button>
          ) : null}
          {resumeFile ? (
            <button
              type="button"
              className="hp-inline-link"
              onClick={() => setOpen("resume")}
            >
              {resumeLabel}
            </button>
          ) : null}
        </div>
      ) : null}

      {open === "cert" && certificationFile ? (
        <CredentialModal
          title={certificationLabel}
          src={certificationFile}
          onClose={() => setOpen(null)}
        />
      ) : null}
      {open === "resume" && resumeFile ? (
        <CredentialModal
          title={resumeLabel}
          src={resumeFile}
          onClose={() => setOpen(null)}
        />
      ) : null}
    </>
  );
}
