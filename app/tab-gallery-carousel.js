"use client";

import { useState } from "react";
import Image from "next/image";

export default function TabGalleryCarousel({ shots }) {
  const [index, setIndex] = useState(0);

  if (!shots?.length) return null;

  function go(delta) {
    setIndex((current) => (current + delta + shots.length) % shots.length);
  }

  return (
    <div className="tab-carousel" aria-roledescription="carousel">
      <div className="tab-carousel-viewport">
        <div
          className="tab-carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {shots.map((shot, shotIndex) => (
            <div
              className="tab-carousel-slide"
              key={shot.src}
              aria-hidden={shotIndex !== index}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                width={shot.width || 1000}
                height={shot.height || 1000}
                sizes="(max-width: 700px) 92vw, 700px"
              />
            </div>
          ))}
        </div>
      </div>

      {shots.length > 1 ? (
        <>
          <button
            type="button"
            className="tab-carousel-arrow tab-carousel-arrow-prev"
            onClick={() => go(-1)}
            aria-label="Previous photo"
          >
            ←
          </button>
          <button
            type="button"
            className="tab-carousel-arrow tab-carousel-arrow-next"
            onClick={() => go(1)}
            aria-label="Next photo"
          >
            →
          </button>
          <div className="tab-carousel-dots">
            {shots.map((shot, shotIndex) => (
              <button
                type="button"
                key={shot.src}
                className={`tab-carousel-dot${shotIndex === index ? " is-active" : ""}`}
                onClick={() => setIndex(shotIndex)}
                aria-label={`Go to photo ${shotIndex + 1}`}
                aria-current={shotIndex === index}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
