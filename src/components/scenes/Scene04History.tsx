import React, { useState } from 'react';
import { TIMELINE_DATA } from '../../data/researchData';
import { TimelineEvent } from '../../types';
import { History, Layers, ChevronRight, Calendar } from 'lucide-react';

interface Scene04Props {
  onOpenSource: (sourceId: string) => void;
}

export const Scene04History: React.FC<Scene04Props> = ({ onOpenSource }) => {
  const [selectedEra, setSelectedEra] = useState<string>('all');
  const [activeEvent, setActiveEvent] = useState<TimelineEvent | null>(TIMELINE_DATA[0]);

  const filteredEvents = TIMELINE_DATA.filter((e) => {
    if (selectedEra === 'all') return true;
    return e.era === selectedEra;
  });

  const getEraColor = (era: TimelineEvent['era']) => {
    switch (era) {
      case 'ancient history':
        return 'border-stone-400 text-stone-600 dark:text-stone-400 bg-stone-100 dark:bg-stone-900/60';
      case 'dynastic history':
        return 'border-red-400 text-red-700 dark:text-red-400 bg-red-100 dark:bg-red-950/60';
      case 'recent history':
        return 'border-amber-400 text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-950/60';
      case 'main story':
        return 'border-blue-400 text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-950/60';
    }
  };

  return (
    <section
      id="scene-04-history"
      className="min-h-screen py-16 px-4 lg:px-12 max-w-7xl mx-auto flex flex-col justify-center scroll-mt-20"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--accent-crimson)] mb-2">
            <span>Scene 04</span>
            <span>•</span>
            <span>Historiographical Architecture</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
            History Beneath the Story
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-2xl">
            The contemporary struggle for the Iron Throne sits upon eight millennia of accumulated memory,
            broken dynasties, cataclysms, and ancient supernatural pacts.
          </p>
        </div>

        {/* Era Filters */}
        <div className="flex flex-wrap gap-1.5 bg-[var(--bg-secondary)] p-1.5 rounded-xl border border-[var(--border-subtle)] text-xs">
          <button
            onClick={() => setSelectedEra('all')}
            className={`px-3 py-1 rounded-lg transition-all ${
              selectedEra === 'all'
                ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] font-semibold shadow-xs'
                : 'text-[var(--text-secondary)]'
            }`}
          >
            All Eras
          </button>
          <button
            onClick={() => setSelectedEra('ancient history')}
            className={`px-3 py-1 rounded-lg transition-all ${
              selectedEra === 'ancient history'
                ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] font-semibold shadow-xs'
                : 'text-[var(--text-secondary)]'
            }`}
          >
            Ancient (Doom / Long Night)
          </button>
          <button
            onClick={() => setSelectedEra('dynastic history')}
            className={`px-3 py-1 rounded-lg transition-all ${
              selectedEra === 'dynastic history'
                ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] font-semibold shadow-xs'
                : 'text-[var(--text-secondary)]'
            }`}
          >
            Targaryen Dynastic
          </button>
          <button
            onClick={() => setSelectedEra('main story')}
            className={`px-3 py-1 rounded-lg transition-all ${
              selectedEra === 'main story'
                ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] font-semibold shadow-xs'
                : 'text-[var(--text-secondary)]'
            }`}
          >
            War of the 5 Kings
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Deep Vertical Timeline */}
        <div className="lg:col-span-7 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 shadow-sm">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-[var(--border-subtle)] space-y-6 max-h-[500px] overflow-y-auto pr-2">
            {filteredEvents.map((item, idx) => {
              const isSelected = activeEvent?.event === item.event;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveEvent(item)}
                  className={`relative group cursor-pointer p-3.5 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-[var(--bg-secondary)] border-[var(--accent-crimson)] shadow-sm'
                      : 'bg-[var(--bg-card)] border-transparent hover:border-[var(--border-subtle)]'
                  }`}
                >
                  {/* Timeline Bead on Left Line */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[39px] top-5 w-4 h-4 rounded-full border-2 bg-[var(--bg-surface)] transition-all ${
                      isSelected
                        ? 'border-[var(--accent-crimson)] scale-125 ring-2 ring-[var(--accent-crimson)]/20'
                        : 'border-[var(--text-muted)] group-hover:border-[var(--accent-bronze)]'
                    }`}
                  />

                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-mono text-xs text-[var(--accent-crimson)] font-semibold">
                      {item.depthYear}
                    </span>
                    <span
                      className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border ${getEraColor(
                        item.era
                      )}`}
                    >
                      {item.era}
                    </span>
                  </div>

                  <h3 className="font-serif-display font-semibold text-base text-[var(--text-primary)] group-hover:text-[var(--accent-crimson)] transition-colors">
                    {item.event}
                  </h3>

                  <p className="text-xs text-[var(--text-secondary)] mt-1 line-clamp-2 leading-relaxed">
                    {item.meaning}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Historical Event Context Card */}
        <div className="lg:col-span-5">
          {activeEvent ? (
            <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent-crimson)] uppercase mb-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>Chronological Depth Marker</span>
              </div>

              <h3 className="font-serif-display text-2xl font-bold text-[var(--text-primary)] mb-1">
                {activeEvent.event}
              </h3>
              <div className="font-mono text-xs text-[var(--accent-bronze)] font-semibold mb-4">
                Period: {activeEvent.depthYear}
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg-secondary)]/70 border border-[var(--border-subtle)] mb-4">
                <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] block mb-1">
                  Historical Meaning & Narrative Impact
                </span>
                <p className="font-serif-literary text-base sm:text-lg text-[var(--text-primary)] leading-relaxed italic">
                  "{activeEvent.meaning}"
                </p>
              </div>

              <div className="space-y-2 text-xs text-[var(--text-secondary)]">
                <div>
                  <strong className="font-mono text-[var(--text-primary)]">Era Classification:</strong>{' '}
                  <span className="capitalize">{activeEvent.era}</span>
                </div>
                <div>
                  <strong className="font-mono text-[var(--text-primary)]">Textual Infiltration:</strong>{' '}
                  Shapes songs, legends, house rivalries, and prophesies in the contemporary storyline.
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                <span>Frozen Dataset: 07_timeline.csv</span>
                <button
                  onClick={() => onOpenSource('S20')}
                  className="text-[var(--accent-crimson)] hover:underline"
                >
                  Cambridge Medievalism [S20] →
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-8 text-center text-xs text-[var(--text-muted)]">
              Select any event on the timeline to inspect historiographical context.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
