export default function Wordmark({ compact = false }) {
  return (
    <span className={`wordmark${compact ? " wordmark-compact" : ""}`}>
      <span className="wordmark-name">
        <span className="wordmark-first">Alexandra</span>
        <span className="wordmark-last">Colgan</span>
        <span className="wordmark-dot" aria-hidden="true" />
      </span>
      {!compact && (
        <span className="wordmark-descriptor">Creative + copywriter</span>
      )}
    </span>
  );
}
