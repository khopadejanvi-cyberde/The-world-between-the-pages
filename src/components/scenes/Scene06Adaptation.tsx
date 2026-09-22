import React, { useState } from 'react';
import { ADAPTATION_MILESTONES, TV_SEASONS_DATA } from '../../data/researchData';
import { Tv, Film, Split, CheckCircle2, AlertCircle } from 'lucide-react';

interface Scene06Props {
  onOpenSource: (sourceId: string) => void;
}

export const Scene06Adaptation: React.FC<Scene06Props> = ({ onOpenSource }) => {
  const [selectedSeason, setSelectedSeason] = useState<number>(1);

  const activeSeasonData = TV_SEASONS_DATA.find((s) => s.season === selectedSeason);

  return (
    <section
      id="scene-06-adaptation"
      className="min-h-screen py-16 px-4 lg:px-12 max-w-7xl mx-auto flex flex-col justify-center scroll-mt-20"
    >
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--accent-crimson)] mb-2">
          <span>Scene 06</span>
          <span>•</span>
          <span>The Television Adaptation Pipeline</span>
        </div>
        <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
          From Page to Screen
        </h2>
        <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-2xl">
          The dual-track chronology: from the 2007 lunch meeting to the 2011 global premiere,
          the faithful early seasons, and the structural divergence when the television series moved beyond the published novels.
        </p>
      </div>

      {/* Dual Track Visual Map */}
      <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 shadow-sm mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono uppercase text-[var(--text-muted)] tracking-wider">
            Adaptation Trajectory & Point of Divergence
          </span>
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" /> Book-Anchored (S1-S4)
            </span>
            <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
              <Split className="w-3.5 h-3.5" /> Condensed / Divergent (S5-S8)
            </span>
          </div>
        </div>

        {/* Season Track Selector */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
          {TV_SEASONS_DATA.map((season) => {
            const isSelected = selectedSeason === season.season;
            const isPostBooks = season.season >= 6;

            return (
              <button
                key={season.season}
                id={`season-btn-${season.season}`}
                onClick={() => setSelectedSeason(season.season)}
                className={`p-3 rounded-xl border text-center transition-all ${
                  isSelected
                    ? 'bg-[var(--accent-crimson)] text-white shadow-md border-[var(--accent-crimson)]'
                    : isPostBooks
                    ? 'bg-amber-500/10 border-amber-500/30 text-[var(--text-primary)] hover:border-amber-500'
                    : 'bg-[var(--bg-secondary)] border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--accent-bronze)]'
                }`}
              >
                <span className="text-[10px] font-mono uppercase block opacity-80">
                  Season {season.season}
                </span>
                <span className="font-serif-display font-bold text-sm block mt-0.5">
                  {season.first_aired.split('-')[0]}
                </span>
                <span className="text-[10px] font-mono block mt-1 opacity-75">
                  {season.episodes} eps
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Adaptation Historical Milestones */}
        <div className="lg:col-span-7 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 shadow-sm">
          <h3 className="font-serif-display text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
            <Film className="w-4 h-4 text-[var(--accent-crimson)]" />
            Key Adaptation Milestones (09_adaptation.csv)
          </h3>

          <div className="space-y-3 max-h-[380px] overflow-y-auto pr-2">
            {ADAPTATION_MILESTONES.map((m, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)] hover:border-[var(--border-subtle)]/80 text-xs"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono font-bold text-[var(--accent-crimson)]">
                    {m.date}
                  </span>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[var(--bg-surface)] text-[var(--text-secondary)]">
                    {m.category}
                  </span>
                </div>
                <h4 className="font-serif-display font-semibold text-sm text-[var(--text-primary)]">
                  {m.milestone}
                </h4>
                <p className="text-[var(--text-secondary)] mt-1 leading-relaxed">
                  {m.detail}
                </p>
                <div className="mt-1.5 text-[10px] font-mono text-[var(--text-muted)]">
                  Entities: {m.people_entities}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-muted)] font-mono">
            <span>Primary Verification: Martin Not A Blog & HBO Press</span>
            <button
              onClick={() => onOpenSource('S03')}
              className="text-[var(--accent-crimson)] hover:underline"
            >
              Examine Option [S03, S04] →
            </button>
          </div>
        </div>

        {/* Right: Selected Season Deep Dive */}
        <div className="lg:col-span-5">
          {activeSeasonData && (
            <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 shadow-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-[var(--accent-crimson)] uppercase font-semibold">
                  HBO Broadcast Record
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--text-secondary)]">
                  {activeSeasonData.first_aired} to {activeSeasonData.last_aired}
                </span>
              </div>

              <h3 className="font-serif-display text-2xl font-bold text-[var(--text-primary)]">
                Season {activeSeasonData.season}
              </h3>

              <div className="p-4 rounded-xl bg-[var(--bg-secondary)]/70 border border-[var(--border-subtle)] my-4">
                <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] block mb-1">
                  Source Material Relationship:
                </span>
                <p className="font-serif-literary text-base font-semibold text-[var(--accent-crimson)]">
                  {activeSeasonData.source_material}
                </p>
              </div>

              <div className="space-y-3 text-xs text-[var(--text-secondary)]">
                <div>
                  <strong className="font-mono text-[var(--text-primary)] block">Primary Dramatic Arc:</strong>
                  <p className="leading-relaxed mt-0.5">{activeSeasonData.keyPlotArc}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-[var(--bg-secondary)]/40 p-3 rounded-lg border border-[var(--border-subtle)]">
                    <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase block">
                      Episodes
                    </span>
                    <span className="font-mono text-base font-bold text-[var(--text-primary)]">
                      {activeSeasonData.episodes} episodes
                    </span>
                  </div>

                  <div className="bg-[var(--bg-secondary)]/40 p-3 rounded-lg border border-[var(--border-subtle)]">
                    <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase block">
                      First-Run Viewers
                    </span>
                    <span className="font-mono text-base font-bold text-[var(--accent-crimson)]">
                      {activeSeasonData.avg_us_viewers_millions}M avg
                    </span>
                  </div>
                </div>
              </div>

              {activeSeasonData.season >= 6 && (
                <div className="mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-600" />
                  <span>
                    <strong>Divergence Note:</strong> Beyond published novels. Produced from Martin’s high-level outlines and original television plotting.
                  </span>
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                <span>Broadcaster Archive</span>
                <button
                  onClick={() => onOpenSource('S09')}
                  className="text-[var(--accent-crimson)] hover:underline"
                >
                  HBO Archive [S09] →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
