import React from 'react';
import { GENRE_FAMILIES } from '../../data/researchData';
import { ArrowLeft, Database, Sparkles } from 'lucide-react';
import { ActiveView } from '../../types';

interface LandingViewProps {
  onNavigate: (view: ActiveView) => void;
  onOpenSources: () => void;
  onBack?: () => void;
  canGoBack?: boolean;
}

// Color accent maps for genre families based on the Pinterest palette (pin.it/2I3cLExHQ)
const GENRE_ACCENTS: Record<string, { badge: string; border: string; activeBtn: string }> = {
  'epic-fantasy': {
    badge: 'bg-[#FFE098]/25 text-[#4A3800] dark:text-[#FFE098] border-[#FFE098]/60',
    border: 'border-[#FFE098]/60 ring-1 ring-[#FFE098]/30',
    activeBtn: 'bg-[#24201D] text-[#FFE098] hover:bg-black dark:bg-[#FFE098] dark:text-[#24201D] dark:hover:bg-[#FFF3B0]',
  },
  'high-scifi': {
    badge: 'bg-[#ABC5D2]/25 text-[#1E3A4C] dark:text-[#ABC5D2] border-[#ABC5D2]/50',
    border: 'border-[var(--border-subtle)]',
    activeBtn: 'bg-[var(--bg-secondary)] text-[var(--text-muted)]',
  },
  'mythic-legend': {
    badge: 'bg-[#85E3CD]/25 text-[#0F473B] dark:text-[#85E3CD] border-[#85E3CD]/50',
    border: 'border-[var(--border-subtle)]',
    activeBtn: 'bg-[var(--bg-secondary)] text-[var(--text-muted)]',
  },
  'dark-gothic': {
    badge: 'bg-[#CCAAD9]/25 text-[#422050] dark:text-[#CCAAD9] border-[#CCAAD9]/50',
    border: 'border-[var(--border-subtle)]',
    activeBtn: 'bg-[var(--bg-secondary)] text-[var(--text-muted)]',
  },
  'historical-speculative': {
    badge: 'bg-[#FB877A]/25 text-[#5A2019] dark:text-[#FB877A] border-[#FB877A]/50',
    border: 'border-[var(--border-subtle)]',
    activeBtn: 'bg-[var(--bg-secondary)] text-[var(--text-muted)]',
  },
  'magical-realism': {
    badge: 'bg-[#DCA0B8]/25 text-[#521D34] dark:text-[#DCA0B8] border-[#DCA0B8]/50',
    border: 'border-[var(--border-subtle)]',
    activeBtn: 'bg-[var(--bg-secondary)] text-[var(--text-muted)]',
  },
};

export const LandingView: React.FC<LandingViewProps> = ({
  onNavigate,
  onOpenSources,
  onBack,
  canGoBack,
}) => {
  return (
    <div id="landing-view" className="min-h-screen py-10 px-4 lg:px-8 max-w-7xl mx-auto space-y-14">
      {/* Editorial Hero / Title Section with Bookshelf Background Image */}
      <section
        id="hero-title-section"
        className="relative rounded-3xl overflow-hidden shadow-xl border border-[var(--border-subtle)] min-h-[380px] sm:min-h-[440px] flex flex-col justify-center"
      >
        {/* Background Image Container with atmospheric scrim overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/title-bookshelf.jpg"
            alt="Library bookshelves and vintage literature wallpaper"
            className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.08]"
            referrerPolicy="no-referrer"
          />
          {/* Subtle multi-layer gradient mask for guaranteed contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25" />
        </div>

        {/* Content Container positioned directly over the background */}
        <div className="relative z-10 py-12 sm:py-16 md:py-20 px-6 sm:px-12 md:px-16 text-left max-w-4xl space-y-5">
          {/* Back CTA Button (if navigated from previous page) */}
          {canGoBack && onBack && (
            <div>
              <button
                id="landing-back-btn"
                onClick={onBack}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/25 bg-black/40 hover:bg-black/65 hover:border-[#FFE098] text-xs font-medium text-white transition-all shadow-xs cursor-pointer"
                title="Go back to previous page"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#FFE098]" />
                <span>Back</span>
              </button>
            </div>
          )}

          <h1 className="font-serif-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
            The World Between <br className="hidden sm:inline" />
            <span className="text-[#FFE098]">the Pages</span>
          </h1>

          <p className="font-serif-literary text-xl sm:text-2xl md:text-3xl italic text-[#FFF3B0] max-w-2xl leading-relaxed drop-shadow-sm font-normal">
            "Where stories come alive through literature, world-building, and verified archival research."
          </p>
        </div>
      </section>

      {/* Six Genre Families Section */}
      <section className="space-y-8">
        <div className="text-left flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B38F5C] dark:text-[#FFE098] font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#FFE098]" />
              <span>Six Literary Families</span>
            </div>
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Explore By Genre Family
            </h2>
            <p className="text-xs text-[var(--text-secondary)] mt-1 max-w-xl">
              Discover expansive literary realms curated for world-building depth. Epic Fantasy is our active featured archive.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GENRE_FAMILIES.map((family) => {
            const hasActiveRoute = family.subcategories.some((s) => s.active);
            const accent = GENRE_ACCENTS[family.id] || {
              badge: 'bg-[#FFE098]/20 text-[#4A3800] border-[#FFE098]/40',
              border: 'border-[var(--border-subtle)]',
              activeBtn: 'bg-[#24201D] text-[#FFE098]',
            };

            return (
              <div
                key={family.id}
                id={`genre-family-${family.id}`}
                className={`p-6 rounded-2xl border transition-all flex flex-col justify-between bg-[var(--bg-surface)] ${
                  hasActiveRoute
                    ? `${accent.border} shadow-md`
                    : 'border-[var(--border-subtle)] opacity-85 hover:opacity-100 hover:shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)]">
                      {family.motif}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border font-semibold ${accent.badge}`}
                    >
                      {hasActiveRoute ? 'Archive Active' : 'Planned Branch'}
                    </span>
                  </div>

                  <h3 className="font-serif-display font-bold text-lg text-[var(--text-primary)] mb-1.5">
                    {family.name}
                  </h3>

                  <p className="text-xs text-[var(--text-secondary)] mb-5 leading-relaxed">
                    {family.description}
                  </p>
                </div>

                <div>
                  <div className="border-t border-[var(--border-subtle)] pt-3.5">
                    <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] block mb-2">
                      Curated Branches:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {family.subcategories.map((sub, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            if (sub.route === 'epic-fantasy') {
                              onNavigate('epic-fantasy');
                            }
                          }}
                          disabled={!sub.active}
                          className={`text-xs px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                            sub.active
                              ? `${accent.activeBtn} cursor-pointer shadow-xs`
                              : 'bg-[var(--bg-secondary)] text-[var(--text-muted)] cursor-not-allowed'
                          }`}
                        >
                          <span>{sub.name}</span>
                          {sub.active && <span>→</span>}
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
      <section className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-7 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-3.5">
          <div className="p-3 rounded-2xl bg-[#FFE098]/20 text-[#8C2525] dark:text-[#FFE098] border border-[#FFE098]/40 shrink-0">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif-display font-bold text-sm text-[var(--text-primary)]">
              Verified Research Freeze Corpus
            </h4>
            <p className="text-xs text-[var(--text-secondary)] mt-0.5">
              All data across books, TV ratings, sales numbers, and timelines are frozen to September 16, 2026.
            </p>
          </div>
        </div>

        <button
          onClick={onOpenSources}
          className="px-4 py-2 rounded-full bg-[var(--bg-secondary)] hover:bg-[#FFE098]/20 hover:border-[#FFE098]/50 text-xs font-mono text-[var(--text-primary)] border border-[var(--border-subtle)] transition-all whitespace-nowrap cursor-pointer shadow-2xs"
        >
          View Source Registry (S01–S24) →
        </button>
      </section>
    </div>
  );
};
