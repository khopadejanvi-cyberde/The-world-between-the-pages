import React from 'react';
import { CURRENT_DEVELOPMENTS, RESEARCH_FREEZE_DATE } from '../../data/researchData';
import { Radio, CalendarCheck2, Clock, CheckCircle, ExternalLink } from 'lucide-react';

interface Scene09Props {
  onOpenSource: (sourceId: string) => void;
}

export const Scene09LiveWesteros: React.FC<Scene09Props> = ({ onOpenSource }) => {
  return (
    <section
      id="scene-09-live-westeros"
      className="min-h-screen py-16 px-4 lg:px-12 max-w-7xl mx-auto flex flex-col justify-center"
    >
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--accent-crimson)] mb-2">
          <span>Scene 09</span>
          <span>•</span>
          <span>Contemporary Verified Ledger</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-3">
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
            Live Westeros
          </h2>
          <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--accent-crimson)] font-semibold">
            Status Frozen: {RESEARCH_FREEZE_DATE}
          </span>
        </div>
        <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-2xl">
          Verified active developments in broadcast, stage, and publishing through the freeze date of September 16, 2026.
          Every development carries an audit trail and primary source citation.
        </p>
      </div>

      {/* Verified Development Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {CURRENT_DEVELOPMENTS.map((dev, idx) => {
          const isBookStatus = dev.status === 'Forthcoming';
          const isBroadcast = dev.status === 'Broadcast';

          return (
            <div
              key={idx}
              className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                isBookStatus
                  ? 'bg-amber-500/5 border-amber-500/30'
                  : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-[var(--accent-crimson)]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-[var(--text-muted)] flex items-center gap-1.5">
                    <CalendarCheck2 className="w-3.5 h-3.5 text-[var(--accent-crimson)]" />
                    {dev.date}
                  </span>
                  <span
                    className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded font-semibold ${
                      isBroadcast
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        : isBookStatus
                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                    }`}
                  >
                    {dev.status}
                  </span>
                </div>

                <h3 className="font-serif-display font-bold text-base text-[var(--text-primary)] mb-2">
                  {dev.development}
                </h3>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                  {dev.detail}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)]/70 text-[11px] font-mono text-[var(--text-muted)] flex items-center justify-between">
                <span className="truncate max-w-[180px]">{dev.source}</span>
                <span className="text-[var(--accent-crimson)]">Verified ✓</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Freeze Integrity Policy Callout */}
      <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[var(--accent-crimson)]/10 flex items-center justify-center text-[var(--accent-crimson)] shrink-0">
            <Radio className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif-display font-bold text-sm text-[var(--text-primary)]">
              Research Freeze Methodology Integrity
            </h4>
            <p className="text-xs text-[var(--text-secondary)] mt-0.5">
              No rumors, unconfirmed leaks, or speculative release dates are incorporated into this platform archive.
            </p>
          </div>
        </div>

        <button
          onClick={() => onOpenSource('S10')}
          className="px-4 py-2 rounded-xl bg-[var(--bg-secondary)] hover:bg-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)] border border-[var(--border-subtle)] whitespace-nowrap transition-colors"
        >
          Inspect WBD Disclosures [S10, S11] →
        </button>
      </div>
    </section>
  );
};
