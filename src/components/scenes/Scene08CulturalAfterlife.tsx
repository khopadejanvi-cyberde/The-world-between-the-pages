import React from 'react';
import { BookMarked, Sparkles, Theater, Users2, Tv2, Globe } from 'lucide-react';

interface Scene08Props {
  onOpenSource: (sourceId: string) => void;
}

export const Scene08CulturalAfterlife: React.FC<Scene08Props> = ({ onOpenSource }) => {
  const companionWorks = [
    {
      title: 'Fire & Blood (Volume 1)',
      year: '2018',
      format: 'In-Universe Archival History',
      description: 'Written from the perspective of Archmaester Gyldayn, detailing the Targaryen dynasty from Aegon’s Conquest to the Regency of Aegon III. Served as the direct foundation for House of the Dragon.',
      badge: 'Primary Foundation'
    },
    {
      title: 'A Knight of the Seven Kingdoms',
      year: '2015 Collection',
      format: 'Dunk & Egg Prequel Novellas',
      description: 'The Hedge Knight, The Sworn Sword, and The Mystery Knight follow hedge knight Ser Duncan the Tall and young Prince Aegon Targaryen (Egg) a century before the main novels.',
      badge: 'Screen Adaptation'
    },
    {
      title: 'The World of Ice & Fire',
      year: '2014',
      format: 'Comprehensive World Atlas',
      description: 'Co-authored with Elio M. García Jr. and Linda Antonsson of Westeros.org, compiling ancient histories, regional geographies, and artwork across the known world.',
      badge: 'Canonical Atlas'
    }
  ];

  const franchiseEcosystem = [
    {
      category: 'Television Universe',
      title: 'House of the Dragon',
      icon: Tv2,
      note: 'Critically lauded prequel series chronicling the Dance of the Dragons Targaryen civil war; Season 3 premiered June 2026.'
    },
    {
      category: 'Stage & Theater',
      title: 'The Mad King: Tourney at Harrenhal',
      icon: Theater,
      note: 'Official dramatic stage production written by Duncan MacMillan and directed by Dominic Cooke; West End London transfer announced for 2027.'
    },
    {
      category: 'Fandom & Scholarship',
      title: 'Westeros.org & Academic Conferences',
      icon: Globe,
      note: 'Pioneering digital encyclopedias, Cambridge medievalism symposia, and network science analyses mapping the fictional sociology.'
    }
  ];

  return (
    <section
      id="scene-08-cultural-afterlife"
      className="min-h-screen py-16 px-4 lg:px-12 max-w-7xl mx-auto flex flex-col justify-center scroll-mt-20"
    >
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--accent-crimson)] mb-2">
          <span>Scene 08</span>
          <span>•</span>
          <span>The Expanded Constellation</span>
        </div>
        <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
          The Cultural Afterlife
        </h2>
        <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-2xl">
          The story expands beyond the original five novels into illustrated histories, companion novellas,
          prequel television productions, official stage plays, and global academic scholarship.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Companion Books */}
        <div className="lg:col-span-6 space-y-4">
          <span className="text-xs font-mono uppercase text-[var(--text-muted)] tracking-wider block">
            Archival Companion Literature
          </span>

          <div className="space-y-3">
            {companionWorks.map((work, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent-bronze)] transition-all"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs text-[var(--accent-crimson)] font-bold">
                    {work.year}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
                    {work.badge}
                  </span>
                </div>
                <h3 className="font-serif-display font-bold text-base text-[var(--text-primary)] mb-1">
                  {work.title}
                </h3>
                <span className="text-xs font-mono text-[var(--text-muted)] block mb-2">
                  Format: {work.format}
                </span>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {work.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Franchise, Stage, and Scholar Ecosystem */}
        <div className="lg:col-span-6 space-y-4">
          <span className="text-xs font-mono uppercase text-[var(--text-muted)] tracking-wider block">
            Franchise Expansions & Living Culture
          </span>

          <div className="space-y-3">
            {franchiseEcosystem.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent-crimson)] transition-all flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-xl bg-[var(--bg-secondary)] text-[var(--accent-crimson)] shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] block">
                      {item.category}
                    </span>
                    <h3 className="font-serif-display font-bold text-base text-[var(--text-primary)] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {item.note}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 rounded-xl bg-[var(--bg-secondary)]/70 border border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)] mt-4">
            <span>Stage Sources: Martin Not A Blog & Official Play Archive</span>
            <button
              onClick={() => onOpenSource('S12')}
              className="text-[var(--accent-crimson)] hover:underline"
            >
              Verify The Mad King [S12, S13] →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
