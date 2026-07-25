"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "alexandra-colgan-theme";

function getPreferredTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem(STORAGE_KEY);

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const nextTheme = getPreferredTheme();
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  function handleToggle() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={handleToggle}
      aria-label={`Activate ${theme === "dark" ? "light" : "dark"} mode`}
      aria-pressed={theme === "dark"}
    >
      <span className="theme-toggle-track">
        <span className="theme-toggle-thumb" />
      </span>
      <span className="theme-toggle-label">
        {theme === "dark" ? "Dark" : "Light"}
      </span>
    </button>
  );
}
