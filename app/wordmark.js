import Image from "next/image";

// Lockup artwork is 3909 x 960 (ratio 4.072). The CSS sets the height and the
// aspect-ratio derives the width, so the mark never gets stretched or cropped.
const LOCKUP_WIDTH = 3909;
const LOCKUP_HEIGHT = 960;

export default function Wordmark({ compact = false }) {
  return (
    <span
      className={`wordmark${compact ? " wordmark-compact" : ""}`}
      aria-hidden="true"
    >
      <Image
        className="wordmark-light"
        src="/brand/ac-lockup.svg"
        alt=""
        width={LOCKUP_WIDTH}
        height={LOCKUP_HEIGHT}
        priority
      />
      <Image
        className="wordmark-dark"
        src="/brand/ac-lockup-dark.svg"
        alt=""
        width={LOCKUP_WIDTH}
        height={LOCKUP_HEIGHT}
        priority
      />
    </span>
  );
}
