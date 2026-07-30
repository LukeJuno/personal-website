"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { portfolioWork } from "./site-data";

function CaseModal({ item, onClose }) {
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
        aria-label={item.title}
        onClick={(event) => event.stopPropagation()}
      >
        <button className="pf-modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <p className="pf-work-brand">{item.brand}</p>
        <h3 className="pf-modal-title">{item.title}</h3>

        {item.websiteUrl ? (
          <a
            className="hp-inline-link"
            href={item.websiteUrl}
            target="_blank"
            rel="noreferrer"
          >
            Visit the website
          </a>
        ) : null}

        {item.gallery?.length ? (
          <div className="pf-modal-gallery">
            {item.gallery.map((media, index) => {
              if (media.type === "video") {
                return (
                  <div className="pf-modal-media pf-modal-media-wide" key={index}>
                    <div className="pf-modal-media-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${media.src}`}
                        title={media.title || item.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </div>
                );
              }
              if (media.type === "video-file") {
                return (
                  <div
                    className={`pf-modal-media${media.wide ? " pf-modal-media-wide" : ""}`}
                    key={index}
                  >
                    <video controls poster={media.poster} preload="metadata">
                      <source src={media.src} type="video/mp4" />
                    </video>
                  </div>
                );
              }
              return (
                <div
                  className={`pf-modal-media${media.wide ? " pf-modal-media-wide" : ""}`}
                  key={index}
                >
                  <Image
                    src={media.src}
                    alt={media.alt}
                    width={media.width}
                    height={media.height}
                    sizes="(max-width: 700px) 90vw, 45vw"
                    priority
                  />
                </div>
              );
            })}
          </div>
        ) : null}

        {item.relatedWork?.length ? (
          <div className="pf-modal-related">
            <p className="pf-work-label">Other work for {item.brand}</p>
            <ul>
              {item.relatedWork.map((work) => (
                <li key={work.title}>
                  <strong>{work.title}</strong>
                  {work.description ? <span> — {work.description}</span> : null}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function PortfolioWork() {
  const [openSlug, setOpenSlug] = useState(null);
  const openItem = portfolioWork.find((item) => item.slug === openSlug);

  return (
    <div className="pf-work-list">
      {portfolioWork.map((item, index) => (
        <article className="pf-work-row" key={item.slug}>
          <p className="pf-work-number">{String(index + 1).padStart(2, "0")}</p>
          <div
            className={`pf-work-grid${index % 2 === 1 ? " pf-work-grid-reverse" : ""}`}
          >
            <div className="pf-work-media">
              {item.video ? (
                <iframe
                  src={`https://www.youtube.com/embed/${item.video}`}
                  title={item.videoTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 820px) 100vw, 45vw"
                />
              )}
            </div>
            <div className="pf-work-copy">
              <p className="pf-work-brand">{item.brand}</p>
              <h3 className="pf-work-title">{item.title}</h3>
              <p className="pf-work-type">{item.type}</p>
              <div className="pf-work-blocks">
                <div>
                  <p className="pf-work-label">Background</p>
                  <p className="pf-work-text">{item.background}</p>
                </div>
                <div>
                  <p className="pf-work-label">Insight</p>
                  <p className="pf-work-text">{item.insight}</p>
                </div>
                <div>
                  <p className="pf-work-label">Idea</p>
                  <p className="pf-work-text">{item.idea}</p>
                </div>
              </div>
              {!item.video ? (
                <button
                  type="button"
                  className="hp-inline-link pf-work-more"
                  onClick={() => setOpenSlug(item.slug)}
                >
                  See more
                </button>
              ) : null}
            </div>
          </div>
        </article>
      ))}

      {openItem ? <CaseModal item={openItem} onClose={() => setOpenSlug(null)} /> : null}
    </div>
  );
}
