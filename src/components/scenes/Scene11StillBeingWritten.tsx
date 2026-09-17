import React from 'react';
import { RESEARCH_FREEZE_DATE } from '../../data/researchData';
import { Feather, BookOpen, Sparkles, Database, ArrowUp } from 'lucide-react';

interface Scene11Props {
  onOpenSources: () => void;
  onBackToStart: () => void;
}

export const Scene11StillBeingWritten: React.FC<Scene11Props> = ({
  onOpenSources,
  onBackToStart,
}) => {
  return (
    <section
      id="scene-11-still-being-written"
      className="min-h-screen py-20 px-4 lg:px-12 max-w-5xl mx-auto flex flex-col justify-center text-center items-center"
    >
      {/* Decorative Heraldic Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-mono uppercase tracking-widest text-[var(--accent-crimson)] shadow-xs mb-6">
        <Feather className="w-3.5 h-3.5" />
        <span>Scene 11 — The Open Manuscript</span>
      </div>

      <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] leading-tight mb-6">
        Still Being Written
      </h2>

      <div className="h-0.5 w-20 mx-auto bg-gradient-to-r from-transparent via-[var(--accent-crimson)] to-transparent mb-6 opacity-60" />

      {/* Archival Open Manuscript Card */}
      <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-3xl p-8 sm:p-12 shadow-md max-w-3xl w-full text-left relative overflow-hidden mb-10">
        {/* Subtle watermark */}
        <div className="absolute -right-8 -bottom-8 opacity-5 text-8xl font-serif select-none pointer-events-none">
          ASOIAF
        </div>

        <p className="font-serif-literary text-lg sm:text-xl md:text-2xl text-[var(--text-primary)] leading-relaxed italic mb-6">
          "The story remains unfinished. Five published volumes stand in the library; two manuscript horizons—The Winds of Winter and A Dream of Spring—remain open to the future."
        </p>

        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6 font-sans-ui">
          As of the verified research freeze on <strong className="font-mono text-[var(--text-primary)]">{RESEARCH_FREEZE_DATE}</strong>, George R. R. Martin continues to write.
          The ending known to television audiences was constructed for television; the final chapters of the printed literature remain suspended in the space between the author’s pen and the reader’s imagination.
        </p>

        <div className="p-4 rounded-xl bg-[var(--bg-secondary)]/70 border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-muted)] space-y-1.5">
          <div className="flex justify-between">
            <span>Core Published Corpus:</span>
            <strong className="text-[var(--text-primary)]">5 Novels (1996 – 2011)</strong>
          </div>
          <div className="flex justify-between">
            <span>Verified Research Freeze Date:</span>
            <strong className="text-[var(--text-primary)]">{RESEARCH_FREEZE_DATE}</strong>
          </div>
          <div className="flex justify-between">
            <span>Next Manuscript Horizon:</span>
            <strong className="text-[var(--accent-crimson)]">The Winds of Winter (In Progress)</strong>
          </div>
        </div>
      </div>

      {/* Bottom Exploration Actions */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={onOpenSources}
          className="px-6 py-3 rounded-full bg-[var(--accent-crimson)] hover:bg-[var(--accent-crimson-light)] text-white font-medium text-sm transition-all shadow-md flex items-center gap-2"
        >
          <Database className="w-4 h-4" />
          <span>Examine Evidence Archive (S01–S24)</span>
        </button>

        <button
          onClick={onBackToStart}
          className="px-5 py-3 rounded-full bg-[var(--bg-surface)] hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border-subtle)] font-medium text-sm transition-all flex items-center gap-2"
        >
          <ArrowUp className="w-4 h-4" />
          <span>Return to The Threshold</span>
        </button>
      </div>

      <footer className="mt-16 text-xs text-[var(--text-muted)] font-mono">
        The World Between the Pages • ASOIAF Research Freeze {RESEARCH_FREEZE_DATE}
      </footer>
    </section>
  );
};
