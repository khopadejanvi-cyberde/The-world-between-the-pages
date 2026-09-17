import React, { useState } from 'react';
import { CHARACTERS_DATA } from '../../data/researchData';
import { CharacterRecord } from '../../types';
import { Users, GitBranch, BookOpen, Shield, Network } from 'lucide-react';

interface Scene03Props {
  onOpenSource: (sourceId: string) => void;
}

export const Scene03People: React.FC<Scene03Props> = ({ onOpenSource }) => {
  const [selectedChar, setSelectedChar] = useState<CharacterRecord>(CHARACTERS_DATA[0]);
  const [hoveredChar, setHoveredChar] = useState<string | null>(null);

  // Network connections mapping for constellation interactions
  const connections: Record<string, string[]> = {
    'Jon Snow': ['Arya Stark', 'Bran Stark', 'Sansa Stark', 'Daenerys Targaryen', 'Tyrion Lannister'],
    'Daenerys Targaryen': ['Jon Snow', 'Tyrion Lannister', 'Jaime Lannister'],
    'Tyrion Lannister': ['Jon Snow', 'Cersei Lannister', 'Jaime Lannister', 'Sansa Stark', 'Daenerys Targaryen'],
    'Arya Stark': ['Jon Snow', 'Sansa Stark', 'Bran Stark', 'Cersei Lannister', 'Jaime Lannister'],
    'Sansa Stark': ['Jon Snow', 'Arya Stark', 'Bran Stark', 'Tyrion Lannister', 'Cersei Lannister'],
    'Bran Stark': ['Jon Snow', 'Arya Stark', 'Sansa Stark', 'Jaime Lannister'],
    'Cersei Lannister': ['Jaime Lannister', 'Tyrion Lannister', 'Sansa Stark', 'Arya Stark'],
    'Jaime Lannister': ['Cersei Lannister', 'Tyrion Lannister', 'Bran Stark', 'Daenerys Targaryen'],
  };

  const activeConnectedList = hoveredChar
    ? connections[hoveredChar] || []
    : connections[selectedChar.name] || [];

  return (
    <section
      id="scene-03-people"
      className="min-h-screen py-16 px-4 lg:px-12 max-w-7xl mx-auto flex flex-col justify-center"
    >
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--accent-crimson)] mb-2">
          <span>Scene 03</span>
          <span>•</span>
          <span>The Mosaic Viewpoint Network</span>
        </div>
        <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
          The People & Point-of-View Constellation
        </h2>
        <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-2xl">
          The narrative is not told by an omniscient narrator, but through 24 subjective viewpoint characters.
          Academic studies (PNAS 2020) verify a structural network maintaining Dunbar’s cognitive social bounds.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Interactive Character Constellation Grid */}
        <div className="lg:col-span-7 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 shadow-sm relative">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
              <Network className="w-4 h-4 text-[var(--accent-crimson)]" />
              <span>POV Narrative Hubs (PNAS Quantitative Criteria)</span>
            </div>
            <span className="text-[10px] font-mono text-[var(--text-muted)]">
              Hover to illuminate network bonds
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
            {CHARACTERS_DATA.map((char) => {
              const isSelected = selectedChar.name === char.name;
              const isHovered = hoveredChar === char.name;
              const isConnected =
                hoveredChar && activeConnectedList.includes(char.name);
              const isDimmed =
                hoveredChar && !isHovered && !isConnected;

              return (
                <button
                  key={char.name}
                  id={`char-node-${char.name.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setSelectedChar(char)}
                  onMouseEnter={() => setHoveredChar(char.name)}
                  onMouseLeave={() => setHoveredChar(null)}
                  className={`p-3 rounded-xl border text-left transition-all duration-300 relative flex flex-col justify-between h-32 ${
                    isSelected
                      ? 'bg-[var(--accent-crimson)]/5 border-[var(--accent-crimson)] shadow-md ring-2 ring-[var(--accent-crimson)]/20'
                      : isHovered
                      ? 'bg-[var(--bg-secondary)] border-[var(--accent-crimson)] shadow-sm'
                      : isConnected
                      ? 'bg-[var(--bg-surface)] border-[var(--accent-bronze)] ring-1 ring-[var(--accent-bronze)]/30'
                      : isDimmed
                      ? 'opacity-30 scale-95 border-transparent'
                      : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-[var(--accent-bronze)]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono uppercase text-[var(--text-muted)]">
                        {char.house}
                      </span>
                      <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--accent-crimson)]">
                        {char.povChapters} ch
                      </span>
                    </div>
                    <h3 className="font-serif-display font-semibold text-xs sm:text-sm text-[var(--text-primary)]">
                      {char.name}
                    </h3>
                  </div>

                  <p className="text-[10px] text-[var(--text-muted)] line-clamp-2 leading-tight">
                    {char.epithet}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Quantitative Methodology Note */}
          <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-muted)] font-mono">
            <span>Data: PNAS Study (Padraig MacCarron et al.) & Text Chapter Totals</span>
            <button
              onClick={() => onOpenSource('S19')}
              className="text-[var(--accent-crimson)] hover:underline"
            >
              Examine Study [S19, S21] →
            </button>
          </div>
        </div>

        {/* Right: Character Detailed Viewpoint Dossier */}
        <div className="lg:col-span-5">
          <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 shadow-md">
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="text-xs font-mono uppercase text-[var(--accent-crimson)] font-semibold">
                  House {selectedChar.house} • {selectedChar.povChapters} POV Chapters
                </span>
                <h3 className="font-serif-display text-2xl font-bold text-[var(--text-primary)]">
                  {selectedChar.name}
                </h3>
              </div>
              <span className="text-2xl">⚔️</span>
            </div>

            <p className="font-serif-literary text-sm sm:text-base italic text-[var(--text-secondary)] mb-4">
              "{selectedChar.epithet}"
            </p>

            <div className="space-y-3 text-xs bg-[var(--bg-secondary)]/50 p-4 rounded-xl border border-[var(--border-subtle)] mb-4">
              <div>
                <strong className="font-mono text-[var(--text-primary)] block mb-0.5">
                  Narrative Role & Classification:
                </strong>
                <span className="text-[var(--text-secondary)]">{selectedChar.type}</span>
              </div>

              <div>
                <strong className="font-mono text-[var(--text-primary)] block mb-0.5">
                  Key Structural Ties & Dynamics:
                </strong>
                <span className="text-[var(--text-secondary)]">{selectedChar.keyRelationship}</span>
              </div>

              <div>
                <strong className="font-mono text-[var(--text-primary)] block mb-1">
                  Published Novel Appearances:
                </strong>
                <div className="flex flex-wrap gap-1">
                  {selectedChar.booksAppeared.map((b) => (
                    <span
                      key={b}
                      className="px-2 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[10px] font-mono text-[var(--text-primary)]"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Interconnected Ties */}
            <div>
              <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase block mb-1.5">
                Active Constellation Ties:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {(connections[selectedChar.name] || []).map((conn) => (
                  <span
                    key={conn}
                    className="text-xs px-2.5 py-1 rounded-full bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border-subtle)]"
                  >
                    {conn}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
