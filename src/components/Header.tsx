import React from 'react';
import { ActiveView } from '../types';
import { Sun, Moon, Database } from 'lucide-react';

interface HeaderProps {
  activeView?: ActiveView;
  setActiveView?: (view: ActiveView) => void;
  activeScene?: string;
  setActiveScene?: (sceneId: string) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenSources: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  setActiveView,
  darkMode,
  setDarkMode,
  onOpenSources
}) => {
  return (
    <header
      id="app-header"
      className="sticky top-0 z-50 backdrop-blur-md bg-[var(--bg-primary)]/90 border-b border-[var(--border-subtle)] transition-colors duration-300 px-4 lg:px-8 py-3.5"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left Side: Clickable Text-Only Home Button */}
        <button
          id="nav-home-text-btn"
          onClick={() => {
            if (setActiveView) {
              setActiveView('landing');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer bg-transparent border-none p-0 focus:outline-none select-none text-left"
          title="Return to Home page"
        >
          THE WORLD BETWEEN BOOKS
        </button>

        {/* Right Side: Evidence Registry & Light/Dark Mode Switch */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Evidence Registry Button */}
          <button
            id="open-evidence-explorer-btn"
            onClick={onOpenSources}
            className="flex items-center gap-1.5 sm:gap-2 text-xs font-medium px-3 sm:px-3.5 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[var(--accent-crimson)] transition-all shadow-xs cursor-pointer group"
            title="Open Evidence Registry & Citations (S01 - S24)"
          >
            <Database className="w-4 h-4 text-[var(--accent-crimson)] group-hover:scale-105 transition-transform" />
            <span className="font-sans-ui hidden sm:inline">Evidence Registry</span>
            <span className="font-sans-ui sm:hidden">Registry</span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-[var(--bg-secondary)] text-[var(--text-muted)]">
              24
            </span>
          </button>

          {/* Theme Toggle Button */}
          <button
            id="theme-toggle-btn"
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[var(--accent-crimson)] text-xs font-mono tracking-wider transition-all cursor-pointer"
            title="Toggle theme (Default: Light Mode)"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <>
                <Moon className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline text-[11px]">DARK ◐</span>
              </>
            ) : (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-600" />
                <span className="hidden sm:inline text-[11px]">LIGHT ◑</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};


