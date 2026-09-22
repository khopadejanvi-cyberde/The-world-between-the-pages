import React, { useState } from 'react';
import { THEMES_DATA } from '../../data/researchData';
import { ThemeRecord } from '../../types';
import { Feather, BookOpen, Quote, Sparkles, ExternalLink } from 'lucide-react';

interface Scene05Props {
  onOpenSource: (sourceId: string) => void;
}

export const Scene05Author: React.FC<Scene05Props> = ({ onOpenSource }) => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeRecord>(THEMES_DATA[0]);

  const influences = [
    {
      name: 'J.R.R. Tolkien',
      tradition: 'Epic Fantasy Lineage',
      note: 'Inspired the vast linguistic scope and mythic world-building, while Martin purposefully subverted the romanticized medievalism and clear moral absolutes.',
    },
    {
      name: 'Bernard Cornwell',
      tradition: 'Historical Fiction Sisterhood',
      note: 'Martin and Cornwell discussed in dialogue how historical fiction and fantasy are "sisters under the skin"—raw logistics, mud, battle fatigue, and political betrayal.',
    },
    {
      name: 'Jack Vance & Fritz Leiber',
      tradition: 'Pulp & Sword-and-Sorcery',
      note: 'Vibrant prose styling, roguish antiheroes, and world-weary cynics whose primary motivation is survival rather than noble destiny.',
    },
    {
      name: 'The Wars of the Roses',
      tradition: 'Historical Architecture',
      note: 'Lancaster and York mirror Lannister and Stark; dynastic civil war, child princes in towers, and the catastrophe of a fractured succession.',
    },
  ];

  return (
    <section
      id="scene-05-author"
      className="min-h-screen py-16 px-4 lg:px-12 max-w-7xl mx-auto flex flex-col justify-center scroll-mt-20"
    >
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--accent-crimson)] mb-2">
          <span>Scene 05</span>
          <span>•</span>
          <span>The Writer’s Craft & Archival Desk</span>
        </div>
        <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
          Inside the Author’s Head
        </h2>
        <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-2xl">
          George R. R. Martin’s craft philosophy: the rejection of clean binaries, the mosaic viewpoint method,
          and the intimate fusion of historical fiction with epic fantasy.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Influences & Lineage Cards */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
              Literary Ancestry & Historical Roots
            </span>
            <span className="text-[11px] font-mono text-[var(--accent-crimson)]">Primary Documented Statements</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {influences.map((inf, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent-bronze)] transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase text-[var(--accent-crimson)] font-semibold block mb-1">
                    {inf.tradition}
                  </span>
                  <h3 className="font-serif-display font-bold text-base text-[var(--text-primary)] mb-2">
                    {inf.name}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {inf.note}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Martin Primary Statement Callout */}
          <div className="p-5 rounded-2xl bg-[var(--bg-secondary)]/80 border border-[var(--border-subtle)] relative">
            <Quote className="w-8 h-8 text-[var(--accent-crimson)]/30 absolute top-4 right-4" />
            <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] block mb-1">
              George R.R. Martin on Moral Complexity
            </span>
            <p className="font-serif-literary text-base sm:text-lg italic text-[var(--text-primary)] leading-relaxed">
              "The human heart in conflict with itself is the only thing worth writing about... I’ve always preferred grey characters to black-and-white."
            </p>
            <div className="mt-3 flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
              <span>Primary Interview S05</span>
              <button
                onClick={() => onOpenSource('S05')}
                className="text-[var(--accent-crimson)] hover:underline flex items-center gap-1"
              >
                <span>Read Dialogue</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Right: Thematic Architecture Matrix */}
        <div className="lg:col-span-6">
          <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-[var(--text-muted)] uppercase">
                Core Thematic Dialectics (08_themes.json)
              </span>
              <span className="text-xs font-mono text-[var(--accent-crimson)]">
                {THEMES_DATA.length} Structural Themes
              </span>
            </div>

            {/* Theme Selector Pills */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {THEMES_DATA.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTheme(t)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedTheme.id === t.id
                      ? 'bg-[var(--accent-crimson)] text-white shadow-xs'
                      : 'bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[var(--border-subtle)]'
                  }`}
                >
                  {t.theme}
                </button>
              ))}
            </div>

            {/* Selected Theme Dossier */}
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono text-[var(--accent-crimson)] uppercase font-semibold">
                  Theme {selectedTheme.id}
                </span>
                <h3 className="font-serif-display text-2xl font-bold text-[var(--text-primary)] mt-0.5">
                  {selectedTheme.theme}
                </h3>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg-secondary)]/60 border border-[var(--border-subtle)]">
                <strong className="text-xs font-mono text-[var(--text-primary)] block mb-1">
                  Structural Definition:
                </strong>
                <p className="font-serif-literary text-base text-[var(--text-secondary)] italic leading-relaxed">
                  "{selectedTheme.definition}"
                </p>
              </div>

              <div className="space-y-2.5 text-xs text-[var(--text-secondary)]">
                <div>
                  <strong className="font-mono text-[var(--text-primary)] block">Textual Evidence:</strong>
                  <span>{selectedTheme.evidence}</span>
                </div>

                {selectedTheme.author && (
                  <div>
                    <strong className="font-mono text-[var(--text-primary)] block">Author Commentary:</strong>
                    <span>{selectedTheme.author}</span>
                  </div>
                )}

                {selectedTheme.scholarship && (
                  <div>
                    <strong className="font-mono text-[var(--text-primary)] block">Academic Scholarship:</strong>
                    <span>{selectedTheme.scholarship}</span>
                  </div>
                )}

                {selectedTheme.quantitative && (
                  <div>
                    <strong className="font-mono text-[var(--text-primary)] block">Quantitative Metric:</strong>
                    <span className="font-mono font-semibold text-[var(--accent-crimson)]">
                      {selectedTheme.quantitative}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
              <span>Visual Form: {selectedTheme.visual}</span>
              <button
                onClick={() => onOpenSource('S20')}
                className="text-[var(--accent-crimson)] hover:underline"
              >
                Scholarship Source [S20] →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
