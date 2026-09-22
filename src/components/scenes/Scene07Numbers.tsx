import React, { useState } from 'react';
import { SALES_DATA, TV_SEASONS_DATA, AWARDS_DATA } from '../../data/researchData';
import { BarChart3, Trophy, TrendingUp, AlertCircle, ShieldAlert } from 'lucide-react';

interface Scene07Props {
  onOpenSource: (sourceId: string) => void;
}

export const Scene07Numbers: React.FC<Scene07Props> = ({ onOpenSource }) => {
  const [dataTab, setDataTab] = useState<'sales' | 'tv' | 'awards'>('sales');

  return (
    <section
      id="scene-07-numbers"
      className="min-h-screen py-16 px-4 lg:px-12 max-w-7xl mx-auto flex flex-col justify-center scroll-mt-20"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--accent-crimson)] mb-2">
            <span>Scene 07</span>
            <span>•</span>
            <span>Editorial Data Storytelling</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
            The Measured Scale
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-2xl">
            Quantitative benchmarks from publishing registries, trade reporting, and official television archives.
            Every metric is tagged with verification grading and methodology constraints.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-1.5 bg-[var(--bg-secondary)] p-1 rounded-xl border border-[var(--border-subtle)] text-xs self-start md:self-auto">
          <button
            onClick={() => setDataTab('sales')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              dataTab === 'sales'
                ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] font-semibold shadow-xs'
                : 'text-[var(--text-secondary)]'
            }`}
          >
            Publishing Sales (15m → 100m)
          </button>
          <button
            onClick={() => setDataTab('tv')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              dataTab === 'tv'
                ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] font-semibold shadow-xs'
                : 'text-[var(--text-secondary)]'
            }`}
          >
            TV Viewership (2.5m → 19.3m)
          </button>
          <button
            onClick={() => setDataTab('awards')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              dataTab === 'awards'
                ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] font-semibold shadow-xs'
                : 'text-[var(--text-secondary)]'
            }`}
          >
            Awards & Honors (59 Emmys / Hugo)
          </button>
        </div>
      </div>

      {/* Editorial Methodology Disclaimer Callout */}
      <div className="bg-[var(--bg-secondary)]/70 border border-[var(--border-subtle)] p-3.5 rounded-xl mb-8 flex items-start gap-3 text-xs">
        <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
        <p className="text-[var(--text-secondary)] leading-relaxed">
          <strong className="text-[var(--text-primary)]">Strict Non-Causal Attribution Policy:</strong>{' '}
          Literary publishing surges and broadcast audience growth are presented side-by-side chronologically.
          The editorial text employs precise descriptive framing (e.g., <em>"coincided with"</em>, <em>"followed"</em>)
          rather than unverified causal assertions.
        </p>
      </div>

      {/* Content Panels */}
      {dataTab === 'sales' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
              <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] block">
                Pre-HBO Baseline (2011)
              </span>
              <span className="font-serif-display text-3xl font-bold text-[var(--text-primary)] block my-1">
                15M+
              </span>
              <p className="text-xs text-[var(--text-secondary)]">
                Worldwide cumulative copies sold before the HBO broadcast premiere.
              </p>
              <div className="mt-2 text-[10px] font-mono text-[var(--accent-crimson)]">Source: New Yorker (Grade D)</div>
            </div>

            <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
              <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] block">
                Launch Surge (2011)
              </span>
              <span className="font-serif-display text-3xl font-bold text-[var(--text-primary)] block my-1">
                8M+
              </span>
              <p className="text-xs text-[var(--text-secondary)]">
                Books sold across formats in the 2011 calendar year alone.
              </p>
              <div className="mt-2 text-[10px] font-mono text-[var(--accent-crimson)]">Source: Forbes / Nielsen (Grade D)</div>
            </div>

            <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
              <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] block">
                2019 Milestone
              </span>
              <span className="font-serif-display text-3xl font-bold text-[var(--text-primary)] block my-1">
                90M+
              </span>
              <p className="text-xs text-[var(--text-secondary)]">
                Copies sold worldwide by the television series finale.
              </p>
              <div className="mt-2 text-[10px] font-mono text-[var(--accent-crimson)]">Source: Contemporary trade (Grade D)</div>
            </div>

            <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
              <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] block">
                Research Freeze (2026)
              </span>
              <span className="font-serif-display text-3xl font-bold text-[var(--text-primary)] block my-1">
                100M+
              </span>
              <p className="text-xs text-[var(--text-secondary)]">
                Reported secondary aggregate total requiring ongoing publisher verification.
              </p>
              <div className="mt-2 text-[10px] font-mono text-amber-600">Secondary relay (Grade E)</div>
            </div>
          </div>

          {/* Detailed Sales Registry Table */}
          <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 shadow-sm overflow-x-auto">
            <h3 className="font-serif-display text-base font-bold text-[var(--text-primary)] mb-3">
              Documented Sales Milestones (04_sales.csv)
            </h3>
            <table className="w-full text-left text-xs border-collapse min-w-[500px]">
              <thead>
                <tr className="border-b border-[var(--border-subtle)] text-[var(--text-muted)] font-mono text-[11px]">
                  <th className="py-2 px-3">Year</th>
                  <th className="py-2 px-3">Period / Event</th>
                  <th className="py-2 px-3">Metric Description</th>
                  <th className="py-2 px-3">Reported Value</th>
                  <th className="py-2 px-3">Primary / Trade Source</th>
                  <th className="py-2 px-3">Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-subtle)]/60 text-[var(--text-secondary)]">
                {SALES_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[var(--bg-secondary)]/40 transition-colors">
                    <td className="py-2.5 px-3 font-mono font-semibold text-[var(--text-primary)]">{row.year}</td>
                    <td className="py-2.5 px-3">{row.period}</td>
                    <td className="py-2.5 px-3 font-medium text-[var(--text-primary)]">{row.metric}</td>
                    <td className="py-2.5 px-3 font-mono font-bold text-[var(--accent-crimson)]">{row.value}</td>
                    <td className="py-2.5 px-3 text-[var(--text-muted)]">{row.source}</td>
                    <td className="py-2.5 px-3">
                      <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                        {row.grade}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {dataTab === 'tv' && (
        <div className="space-y-6">
          <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 shadow-sm">
            <h3 className="font-serif-display text-base font-bold text-[var(--text-primary)] mb-2">
              Average First-Run US Television Viewership Progression (Seasons 1–8)
            </h3>
            <p className="text-xs text-[var(--text-secondary)] mb-6">
              Official HBO Nielsen Live+SD first-run averages in millions of viewers.
            </p>

            {/* Custom Bar Visualization */}
            <div className="space-y-3">
              {TV_SEASONS_DATA.map((s) => {
                const percentage = (s.avg_us_viewers_millions / 12) * 100;
                return (
                  <div key={s.season} className="flex items-center gap-4 text-xs">
                    <span className="font-mono w-16 text-[var(--text-muted)]">
                      Season {s.season}
                    </span>
                    <div className="flex-1 bg-[var(--bg-secondary)] h-7 rounded-lg overflow-hidden relative">
                      <div
                        className="bg-gradient-to-r from-[var(--accent-crimson)] to-amber-600 h-full rounded-lg flex items-center justify-end pr-2 transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      >
                        <span className="font-mono text-[11px] font-bold text-white">
                          {s.avg_us_viewers_millions}M
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] text-[var(--text-muted)] w-28 hidden sm:inline truncate">
                      {s.first_aired.split('-')[0]} ({s.episodes} eps)
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
              <span>Record Finale Broadcast: 19.3M Multiplatform (LA Times, S16)</span>
              <button
                onClick={() => onOpenSource('S16')}
                className="text-[var(--accent-crimson)] hover:underline"
              >
                View Ratings Source [S16] →
              </button>
            </div>
          </div>
        </div>
      )}

      {dataTab === 'awards' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Literary Awards */}
          <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-5 h-5 text-[var(--accent-bronze)]" />
              <h3 className="font-serif-display text-lg font-bold text-[var(--text-primary)]">
                Literary Honors & Recognition
              </h3>
            </div>
            <div className="space-y-2.5">
              {AWARDS_DATA.filter((a) => a.work !== 'Game of Thrones').map((award, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)] flex items-center justify-between text-xs"
                >
                  <div>
                    <span className="font-bold text-[var(--text-primary)] block">
                      {award.work} ({award.year})
                    </span>
                    <span className="text-[var(--text-secondary)]">
                      {award.award} • {award.category}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-[var(--bg-surface)] text-[var(--accent-crimson)] font-semibold border border-[var(--border-subtle)]">
                    {award.result}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Television Academy Record */}
          <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-5 h-5 text-amber-500" />
                <h3 className="font-serif-display text-lg font-bold text-[var(--text-primary)]">
                  Television Academy Record
                </h3>
              </div>
              <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-center mb-4">
                <span className="font-serif-display text-4xl sm:text-5xl font-bold text-amber-700 dark:text-amber-400 block mb-1">
                  59 Wins
                </span>
                <span className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-wider block">
                  from 159 Primetime Emmy Nominations
                </span>
                <p className="text-xs text-[var(--text-secondary)] mt-2">
                  Highest Emmy total for any scripted prime-time television drama in Academy history.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
              <span>Television Academy Official Registry</span>
              <button
                onClick={() => onOpenSource('S08')}
                className="text-[var(--accent-crimson)] hover:underline"
              >
                Verify Record [S08] →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
