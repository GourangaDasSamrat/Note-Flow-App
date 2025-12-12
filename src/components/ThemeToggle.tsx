import type { ThemeToggleProps } from "../types";

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <div className="theme-toggle-track">
        <div className="theme-toggle-thumb">
          {theme === "dark" ? "🌙" : "☀️"}
        </div>
      </div>
    </button>
  );
}
