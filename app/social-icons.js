// Minimal line icons for the footer's "Find Me" links. Inline SVG (no
// image files, no icon-font dependency) so they inherit color via
// currentColor and stay crisp at any size.

const iconProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

export function LinkedInIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7.5" y1="10" x2="7.5" y2="17" />
      <circle cx="7.5" cy="6.7" r="0.35" fill="currentColor" />
      <line x1="12" y1="17" x2="12" y2="10" />
      <path d="M12 13c0-1.8 1-3 2.5-3s2.5 1.2 2.5 3v4" />
    </svg>
  );
}

export function EmailIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

export function InstagramIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.4" fill="currentColor" />
    </svg>
  );
}

export const socialIcons = {
  LinkedIn: LinkedInIcon,
  Email: EmailIcon,
  Instagram: InstagramIcon,
};
