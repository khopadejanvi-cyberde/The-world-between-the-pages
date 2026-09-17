import React from 'react';
import { GENRE_FAMILIES, RESEARCH_FREEZE_DATE } from '../../data/researchData';
import { BookOpen, Compass, ArrowRight, Sparkles, Database, Layers } from 'lucide-react';
import { ActiveView } from '../../types';

interface LandingViewProps {
  onNavigate: (view: ActiveView) => void;
  onOpenSources: () => void;
}

export const LandingView: React.FC<LandingViewProps> = ({ onNavigate, onOpenSources }) => {
  return (
    <div id="landing-view" className="min-h-screen py-12 px-4 lg:px-8 max-w-7xl mx-auto">
      {/* Editorial Hero */}
      <section className="text-center py-12 sm:py-20 relative">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-mono uppercase tracking-widest text-[var(--accent-crimson)] shadow-xs mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Archival Digital Library • Freeze {RESEARCH_FREEZE_DATE}</span>
        </div>

        <h1 className="font-serif-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[var(--text-primary)] max-w-4xl mx-auto leading-tight">
          The World Between <br className="hidden sm:inline" />
          <span className="text-[var(--accent-crimson)]">the Pages</span>
        </h1>

        <p className="font-serif-literary text-xl sm:text-2xl italic text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto">
          "Where stories come alive through literature, world-building, and verified archival research."
        </p>

        <p className="font-sans-ui text-sm sm:text-base text-[var(--text-muted)] max-w-xl mx-auto mt-4 leading-relaxed">
          An editorial showcase bridging monumental literary cycles, adaptation historiography,
          and rigorously sourced scholarship.
        </p>

        {/* Primary Call to Action */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            id="hero-launch-asoiaf-btn"
            onClick={() => onNavigate('asoiaf-story')}
            className="px-6 py-3.5 rounded-full bg-[var(--accent-crimson)] hover:bg-[var(--accent-crimson-light)] text-white font-medium text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2 group"
          >
            <span>Enter "A Song of Ice & Fire"</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id="hero-explore-genres-btn"
            onClick={() => onNavigate('epic-fantasy')}
            className="px-5 py-3.5 rounded-full bg-[var(--bg-surface)] hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border-subtle)] font-medium text-sm transition-all flex items-center gap-2"
          >
            <Compass className="w-4 h-4 text-[var(--accent-bronze)]" />
            <span>Explore Epic Fantasy Shelf</span>
          </button>
        </div>
      </section>

      {/* Featured Anchor Card: A Song of Ice and Fire */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-[var(--bg-surface)] to-[var(--bg-secondary)] border-2 border-[var(--accent-crimson)]/30 rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[var(--accent-crimson)] text-white text-[10px] font-mono uppercase font-bold">
                  Dedicated Feature
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  Scene-based scroll system • 12 curated chapters
                </span>
              </div>

              <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                A Song of Ice and Fire: The Books Behind Game of Thrones
              </h2>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Dive into the five published novels, character viewpoints, millennial history,
                television adaptation divergence, and verified 2026 ongoing developments.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs px-2.5 py-1 rounded-md bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
                  5 Published Volumes
                </span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
                  24 Research Citations
                </span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
                  Spoiler-Light World Map
                </span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('asoiaf-story')}
              className="px-6 py-3 rounded-2xl bg-[var(--accent-crimson)] text-white font-semibold text-sm shadow-md hover:bg-[var(--accent-crimson-light)] transition-all flex items-center gap-2 self-start lg:self-auto shrink-0"
            >
              <span>Begin Guided Story</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Six Genre Families */}
      <section className="mb-16">
        <div className="text-center sm:text-left mb-8">
          <span className="text-xs font-mono uppercase text-[var(--accent-crimson)] font-semibold tracking-wider block mb-1">
            Six Literary Families
          </span>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
            Explore By Genre Family
          </h2>
          <p className="text-xs text-[var(--text-secondary)] mt-1">
            Discover expansive literary realms. Epic Fantasy is our active featured archive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {GENRE_FAMILIES.map((family) => {
            const hasActiveRoute = family.subcategories.some((s) => s.active);

            return (
              <div
                key={family.id}
                id={`genre-family-${family.id}`}
                className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
                  hasActiveRoute
                    ? 'bg-[var(--bg-surface)] border-[var(--accent-crimson)]/50 shadow-md ring-1 ring-[var(--accent-crimson)]/20'
                    : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] opacity-80 hover:opacity-100'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)]">
                      {family.motif}
                    </span>
                    {hasActiveRoute && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--accent-crimson)] text-white font-semibold">
                        Archive Active
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif-display font-bold text-lg text-[var(--text-primary)] mb-1">
                    {family.name}
                  </h3>

                  <p className="text-xs text-[var(--text-secondary)] mb-4 leading-relaxed">
                    {family.description}
                  </p>
                </div>

                <div>
                  <div className="border-t border-[var(--border-subtle)] pt-3">
                    <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] block mb-1.5">
                      Curated Branches:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {family.subcategories.map((sub, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            if (sub.route === 'epic-fantasy') {
                              onNavigate('epic-fantasy');
                            }
                          }}
                          disabled={!sub.active}
                          className={`text-xs px-2.5 py-1 rounded-md transition-all ${
                            sub.active
                              ? 'bg-[var(--accent-crimson)] text-white font-medium hover:bg-[var(--accent-crimson-light)] shadow-xs cursor-pointer'
                              : 'bg-[var(--bg-secondary)] text-[var(--text-muted)] cursor-not-allowed'
                          }`}
                        >
                          {sub.name} {sub.active && '→'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Archival Evidence Bar */}
      <section className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-[var(--bg-secondary)] text-[var(--accent-crimson)]">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif-display font-bold text-sm text-[var(--text-primary)]">
              Verified Research Freeze Corpus
            </h4>
            <p className="text-xs text-[var(--text-secondary)]">
              All data across books, TV ratings, sales numbers, and timelines are frozen to September 16, 2026.
            </p>
          </div>
        </div>

        <button
          onClick={onOpenSources}
          className="px-4 py-2 rounded-xl bg-[var(--bg-secondary)] hover:bg-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)] border border-[var(--border-subtle)] transition-colors whitespace-nowrap"
        >
          View Source Registry (S01–S24) →
        </button>
      </section>
    </div>
  );
};
