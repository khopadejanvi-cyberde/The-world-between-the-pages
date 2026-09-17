import React from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

interface Scene00Props {
  onExplore: () => void;
  onOpenSources: () => void;
}

export const Scene00Threshold: React.FC<Scene00Props> = ({ onExplore, onOpenSources }) => {
  return (
    <section
      id="scene-00-threshold"
      className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-16 paper-texture"
    >
      {/* Decorative Heraldic Motif */}
      <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-mono uppercase tracking-widest text-[var(--accent-crimson)] shadow-xs">
        <Sparkles className="w-3.5 h-3.5" />
        <span>Scene 00 — The Threshold</span>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="font-serif-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[var(--text-primary)] uppercase leading-none">
          A Song of <br className="hidden sm:inline" />
          <span className="text-[var(--accent-crimson)]">Ice and Fire</span>
        </h1>

        <div className="h-0.5 w-24 mx-auto bg-gradient-to-r from-transparent via-[var(--accent-crimson)] to-transparent my-4 opacity-70" />

        <h2 className="font-serif-literary text-2xl sm:text-3xl md:text-4xl italic text-[var(--text-secondary)] font-normal tracking-wide max-w-2xl mx-auto">
          The books behind Game of Thrones
        </h2>

        <p className="font-sans-ui text-sm sm:text-base text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed pt-2">
          An interactive archival exploration through the published literature, mosaic viewpoints,
          centuries of history, and the television phenomenon.
        </p>

        {/* Action Buttons */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
          <button
            id="begin-exploration-btn"
            onClick={onExplore}
            className="px-6 py-3 rounded-full bg-[var(--accent-crimson)] hover:bg-[var(--accent-crimson-light)] text-white font-medium text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <span>Begin the Journey</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>

          <button
            onClick={onOpenSources}
            className="px-5 py-3 rounded-full bg-[var(--bg-surface)] hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border-subtle)] font-medium text-sm transition-all"
          >
            Inspect Research Sources (S01–S24)
          </button>
        </div>
      </div>

      {/* Ambient Scroll Cue */}
      <div className="absolute bottom-6 flex flex-col items-center gap-1.5 opacity-60 text-xs font-mono text-[var(--text-muted)]">
        <span>Scroll to advance scenes</span>
        <div className="w-4 h-7 border-2 border-[var(--text-muted)] rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-1.5 bg-[var(--text-muted)] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
