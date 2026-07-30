"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { headerNav } from "./site-data";

export default function SiteNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="site-nav-shell">
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>{isOpen ? "Close" : "Menu"}</span>
        <span className="menu-toggle-lines" aria-hidden="true">
          <i />
          <i />
        </span>
      </button>
      <nav
        className={`site-nav${isOpen ? " is-open" : ""}`}
        id="primary-navigation"
        aria-label="Primary"
      >
        {headerNav.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={isActive ? "is-active" : undefined}
              aria-current={isActive ? "page" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
