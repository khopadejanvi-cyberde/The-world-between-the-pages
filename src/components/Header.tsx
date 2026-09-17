import React from 'react';
import { ActiveView } from '../types';
import { BookOpen, Compass, ShieldCheck, Sun, Moon, Database } from 'lucide-react';
import { SCENE_METAS, RESEARCH_FREEZE_DATE } from '../data/researchData';

interface HeaderProps {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  activeScene: string;
  setActiveScene: (sceneId: string) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenSources: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  setActiveView,
  activeScene,
  setActiveScene,
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
        {/* Brand & Identity */}
        <div className="flex items-center gap-3">
          <button
            id="brand-home-btn"
            onClick={() => setActiveView('landing')}
            className="text-left group focus:outline-none"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl leading-none">📖</span>
              <span className="font-serif-display font-semibold tracking-wide text-base sm:text-lg text-[var(--text-primary)] group-hover:text-[var(--accent-crimson)] transition-colors">
                The World Between the Pages
              </span>
            </div>
            <p className="text-[11px] uppercase tracking-widest text-[var(--text-muted)] font-mono pl-7">
              Freeze {RESEARCH_FREEZE_DATE}
            </p>
          </button>
        </div>

        {/* View Switcher Tabs */}
        <nav className="hidden md:flex items-center gap-1 bg-[var(--bg-secondary)]/70 p-1 rounded-full border border-[var(--border-subtle)] text-xs font-medium">
          <button
            id="nav-library-btn"
            onClick={() => setActiveView('landing')}
            className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
              activeView === 'landing'
                ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-sm font-semibold'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Digital Library
          </button>
          <button
            id="nav-epic-fantasy-btn"
            onClick={() => setActiveView('epic-fantasy')}
            className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
              activeView === 'epic-fantasy'
                ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-sm font-semibold'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            Epic Fantasy
          </button>
          <button
            id="nav-asoiaf-btn"
            onClick={() => setActiveView('asoiaf-story')}
            className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
              activeView === 'asoiaf-story'
                ? 'bg-[var(--accent-crimson)] text-white shadow-sm font-semibold'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            A Song of Ice & Fire
          </button>
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Scene Selector in ASOIAF view */}
          {activeView === 'asoiaf-story' && (
            <div className="hidden lg:flex items-center">
              <select
                id="scene-quick-selector"
                value={activeScene}
                onChange={(e) => setActiveScene(e.target.value)}
                className="text-xs bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border-subtle)] rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-[var(--accent-crimson)] transition-colors cursor-pointer max-w-[190px] truncate"
                title="Jump directly to scene"
              >
                {SCENE_METAS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.num}. {s.title}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Sources / Evidence Explorer Button */}
          <button
            id="open-evidence-explorer-btn"
            onClick={onOpenSources}
            className="flex items-center gap-1.5 text-xs font-medium px-2.5 sm:px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[var(--accent-crimson)] transition-all shadow-xs"
            title="Open Evidence Registry & Citations (S01 - S24)"
          >
            <Database className="w-3.5 h-3.5 text-[var(--accent-crimson)]" />
            <span className="hidden sm:inline">Evidence Registry</span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--text-muted)]">
              24
            </span>
          </button>

          {/* Spoiler Policy Badge */}
          <div
            className="hidden xl:flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-md bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
            title="Policy: Introductory world elements are spoiler-light."
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Spoiler-Light</span>
          </div>

          {/* Mandatory Global Light/Dark Mode Switch */}
          <button
            id="theme-toggle-btn"
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[var(--accent-crimson)] text-xs font-mono tracking-wider transition-all"
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

      {/* Mobile Sub-Navigation Bar */}
      <div className="flex md:hidden items-center justify-center gap-2 mt-2 pt-2 border-t border-[var(--border-subtle)] text-xs">
        <button
          onClick={() => setActiveView('landing')}
          className={`px-3 py-1 rounded-full ${
            activeView === 'landing' ? 'bg-[var(--bg-surface)] font-semibold shadow-xs' : 'text-[var(--text-secondary)]'
          }`}
        >
          Library
        </button>
        <button
          onClick={() => setActiveView('epic-fantasy')}
          className={`px-3 py-1 rounded-full ${
            activeView === 'epic-fantasy' ? 'bg-[var(--bg-surface)] font-semibold shadow-xs' : 'text-[var(--text-secondary)]'
          }`}
        >
          Epic Fantasy
        </button>
        <button
          onClick={() => setActiveView('asoiaf-story')}
          className={`px-3 py-1 rounded-full ${
            activeView === 'asoiaf-story' ? 'bg-[var(--accent-crimson)] text-white font-semibold shadow-xs' : 'text-[var(--text-secondary)]'
          }`}
        >
          ASOIAF
        </button>
      </div>
    </header>
  );
};
