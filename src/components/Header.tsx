import type { Theme } from "../types";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  theme: Theme;
  onThemeToggle: () => void;
}

export default function Header({ theme, onThemeToggle }: HeaderProps) {
  return (
    <header className="app-header">
      <div className="header-content">
        <div className="header-text">
          <h1>📝 My Notes</h1>
          <p>Capture your thoughts and ideas</p>
        </div>
        <ThemeToggle theme={theme} onToggle={onThemeToggle} />
      </div>
    </header>
  );
}
