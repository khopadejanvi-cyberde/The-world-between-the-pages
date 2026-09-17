import React, { useState } from 'react';
import { EPIC_FANTASY_COLLECTION } from '../../data/researchData';
import { Compass, BookOpen, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { ActiveView } from '../../types';

interface EpicFantasyViewProps {
  onSelectAsoiaf: () => void;
  onNavigateHome: () => void;
}

export const EpicFantasyView: React.FC<EpicFantasyViewProps> = ({
  onSelectAsoiaf,
  onNavigateHome,
}) => {
  const [filterType, setFilterType] = useState<'all' | 'completed' | 'ongoing'>('all');

  const filteredCollection = EPIC_FANTASY_COLLECTION.filter((item) => {
    if (filterType === 'all') return true;
    if (filterType === 'completed') {
      return (
        item.status === 'High Archival Classic' ||
        item.status === 'Epic Cycle' ||
        item.status === 'Classic Mythic Fantasy' ||
        item.status === 'Dragonrider Epic' ||
        item.status === 'Feminist High Fantasy' ||
        item.status === 'Slavic Dark Epic' ||
        item.status === 'Grimdark Military Fantasy'
      );
    }
    if (filterType === 'ongoing') {
      return (
        item.status === 'Featured Dedicated Experience' ||
        item.status === 'Cosmere Keystone' ||
        item.status === 'Frame Narrative'
      );
    }
    return true;
  });

  return (
    <div id="epic-fantasy-view" className="min-h-screen py-12 px-4 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-10 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--accent-crimson)] mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Fantastical Worlds • Subcategory</span>
          </div>
          <h1 className="font-serif-display text-3xl sm:text-5xl font-bold text-[var(--text-primary)]">
            Epic Fantasy Classics
          </h1>
          <p className="text-sm text-[var(--text-secondary)] mt-2 max-w-2xl">
            Ten landmark secondary-world epics that define modern speculative literature.
            Explore overarching mythologies, magic systems, and world architectures.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center gap-1.5 bg-[var(--bg-secondary)] p-1 rounded-xl border border-[var(--border-subtle)] text-xs self-start sm:self-auto">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              filterType === 'all'
                ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] font-semibold shadow-xs'
                : 'text-[var(--text-secondary)]'
            }`}
          >
            All 10 Epics
          </button>
          <button
            onClick={() => setFilterType('ongoing')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              filterType === 'ongoing'
                ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] font-semibold shadow-xs'
                : 'text-[var(--text-secondary)]'
            }`}
          >
            Active / Ongoing
          </button>
          <button
            onClick={() => setFilterType('completed')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              filterType === 'completed'
                ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] font-semibold shadow-xs'
                : 'text-[var(--text-secondary)]'
            }`}
          >
            Completed Cycles
          </button>
        </div>
      </div>

      {/* 10 Epics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCollection.map((book) => {
          return (
            <div
              key={book.id}
              id={`epic-book-${book.id}`}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 relative ${
                book.isPrimary
                  ? 'bg-gradient-to-br from-[var(--bg-surface)] to-[var(--bg-secondary)] border-2 border-[var(--accent-crimson)] shadow-xl ring-2 ring-[var(--accent-crimson)]/20'
                  : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-[var(--accent-bronze)] hover:-translate-y-1'
              }`}
            >
              <div>
                {/* Accent top stripe */}
                <div
                  className="h-1.5 w-full rounded-full mb-4"
                  style={{ backgroundColor: book.accentColor }}
                />

                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] tracking-wider">
                    {book.publicationSpan}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded uppercase font-semibold ${
                      book.isPrimary
                        ? 'bg-[var(--accent-crimson)] text-white'
                        : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)]'
                    }`}
                  >
                    {book.status}
                  </span>
                </div>

                <h3 className="font-serif-display font-bold text-xl text-[var(--text-primary)] mb-1">
                  {book.title}
                </h3>
                <span className="text-xs font-serif-literary text-[var(--text-secondary)] italic block mb-3">
                  by {book.author}
                </span>

                <div className="space-y-2 text-xs text-[var(--text-secondary)] mb-6">
                  <div>
                    <strong className="font-mono text-[var(--text-primary)]">Volumes:</strong>{' '}
                    {book.volumes}
                  </div>
                  <div>
                    <strong className="font-mono text-[var(--text-primary)]">Tonal Architecture:</strong>{' '}
                    {book.tone}
                  </div>
                </div>
              </div>

              <div>
                {book.isPrimary ? (
                  <button
                    onClick={onSelectAsoiaf}
                    className="w-full py-3 px-4 rounded-xl bg-[var(--accent-crimson)] hover:bg-[var(--accent-crimson-light)] text-white font-semibold text-xs transition-all shadow-md flex items-center justify-center gap-2 group"
                  >
                    <span>Launch 12-Scene Dedicated Experience</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <div className="pt-3 border-t border-[var(--border-subtle)]/70 flex items-center justify-between text-xs text-[var(--text-muted)] font-mono">
                    <span>Archival Shelf Record</span>
                    <span className="text-[var(--text-secondary)]">Catalogue Entry</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Return to Library */}
      <div className="mt-12 text-center">
        <button
          onClick={onNavigateHome}
          className="px-5 py-2.5 rounded-full bg-[var(--bg-surface)] hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border-subtle)] text-xs font-medium transition-all"
        >
          ← Return to Digital Library Overview
        </button>
      </div>
    </div>
  );
};
