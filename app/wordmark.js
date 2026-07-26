import Image from "next/image";

export default function Wordmark({ compact = false }) {
  return (
    <span
      className={`wordmark wordmark-art${compact ? " wordmark-compact" : ""}`}
      aria-hidden="true"
    >
      <Image
        src="/alexandra-colgan-wordmark-light.png"
        alt=""
        fill
        priority
        sizes="112px"
      />
    </span>
  );
}
